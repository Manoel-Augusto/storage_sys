const request = require('request');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');

const getList = async(_id, type)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,password:0}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: `https://api.dropboxapi.com/2/sharing/${type == "folders" ? "list_folders" : "list_received_files"}`,
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${dropboxToken}`},
         json:{ limit: 100, actions: [] }
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
      const { method, cookies:{tk}} = req;
      if(tk){
         switch(method){
            case 'GET':
               try{
                  let { id } = jwt.verify(tk, process.env.JWTSECRET);
                  let folders = await getList(id, "folders")
                  if(!folders.error){
                     folders.entries = folders.entries.map(item => ({...item, ".tag": "folder"}))
                  }
                  let files = await getList(id, "files")
                  if(!files.error){
                     files.entries = files.entries.map(item => ({...item, ".tag": "file"}))
                  }
                  res.status(200).json({folders, files})
               }catch(e){
                  res.status(200).json([])
               }
               break;
            default:
               res.status(405).end(`Method ${method} Not Allowed`)
         }
      }else{
         res.status(500).json({error: true, statusCode: 500, msg: "Falha na autenticação"})
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
