const request = require('request');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const saltRounds = 54321;

const shareLink = async(user_id, id, name, type, active)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'share')
   if(active){
      let link = bcrypt.genSaltSync(saltRounds);
      await db.insert({file_id: id, user_id, name, type, link})
      return {error: false, link}
   }
   await db.remove({file_id: id})
   client.close()
   return {error: false, link: ''}
}

const getLink = async(link) => {
   let {db, client} = await loginMongo(process.env.MONGODB, 'share')
   let rt = await db.findOne({link}, {projection:{_id:0,name:1,type:1,file_id:1,user_id:1}})
   client.close()
   if(rt) return {error: false, ...rt}
   return {error: true}
}

export default async function handler(req, res){
   try{
      const { method, cookies:{tk} } = req;
      switch(method){
         case 'POST':
            if(tk){
               try{
                  let { id:user_id } = jwt.verify(tk, process.env.JWTSECRET);
                  let { id, name, type, active } = req.body
                  res.status(200).json(await shareLink(user_id, id, name, type, active))
               }catch(e){
                  res.status(200).json({error: true, msg: 'Falha na criação'})
               }
            }else{
               res.status(500).json({statusCode: 500, error: true, msg: "Falha na autenticação"})
            }
            break;
         case 'GET':
            let { link } = req.query
            res.status(200).json(await getLink(link))
            break;
         default:
            res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
