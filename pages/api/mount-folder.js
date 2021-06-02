const request = require('request');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');

const mountFolder = async(_id, shared_folder_id)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: "https://api.dropboxapi.com/2/sharing/mount_folder",
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${dropboxToken}`},
         json:{ shared_folder_id }
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
                  let { shared_folder_id } = req.body
                  res.status(200).json(await mountFolder(id, shared_folder_id))
               }catch(e){
                  res.status(200).json({error: true, msg: 'Falha na criação'})
               }
               break;
            default:
               res.status(405).end(`Method ${method} Not Allowed`)
         }
      }else{
         res.status(500).json({error: true, statusCode: 500, msg: "Falha na autenticação"})
      }
   }catch(err){
      res.status(500).json({error: true, statusCode: 500, msg: err.message})
   }
}
