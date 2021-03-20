const request = require('request');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');

const createFolder = async(_id, path)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: "https://api.dropboxapi.com/2/files/create_folder_v2",
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${dropboxToken}`},
         json:{ path, autorename: false }
      }, (err, res, body)=>{
         if(err){
            r(err)
         }else{
            s(body)
         }
      })
   })
}

export default async function handler(req, res){
   try{
      const { method, cookies:{tk} } = req;
      if(tk){
         switch(method){
            case 'POST':
               try{
                  let { id } = jwt.verify(tk, process.env.JWTSECRET);
                  let { folder } = req.body
                  res.status(200).json(await createFolder(id, folder))
               }catch(e){
                  res.status(200).json({error: true, msg: 'Falha na criação'})
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
