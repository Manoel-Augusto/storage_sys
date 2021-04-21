const request = require('request');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../../models/mongo');

const getListFolder = async(_id, path="")=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,password:0}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: "https://api.dropboxapi.com/2/files/list_folder",
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${dropboxToken}`},
         json:{ path }
      }, (err, res, body)=>{
         if(err){
            r(err)
         }else{
            s(body)
         }
      })
   })
}

const getShared = async(data) => {
   let {db, client} = await loginMongo(process.env.MONGODB, 'share')
   let sh = await db.find({file_id: {$in: data.entries.map(item => item.id)}}).toArray()
   client.close()
   data.entries = data.entries.map(item => {
      let share = sh.find(i => i.file_id === item.id)
      return {...item, shared_link: share ? share.link : false}
   })
   return data
}

export default async function handler(req, res){
   try{
      const { method, cookies:{tk}} = req;
      if(tk){
         switch(method){
            case 'GET':
               try{
                  let { id } = jwt.verify(tk, process.env.JWTSECRET);
                  let rt = await getListFolder(id)
                  await getShared(rt)
                  res.status(200).json(rt)
               }catch(e){
                  res.status(200).json([])
               }
               break;
            default:
               res.status(405).end(`Method ${method} Not Allowed`)
         }
      }else{
         res.status(500).json({statusCode: 500, msg: "Falha na autenticação"})
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
