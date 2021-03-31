const request = require('request');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const formidable = require('formidable');
export const config = { api: { bodyParser: false }};

const upload = async(_id, path, file)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: "https://content.dropboxapi.com/2/files/upload",
         headers:{
            "Content-Type": "application/octet-stream",
            "Authorization":`Bearer ${dropboxToken}`,
            "Dropbox-API-Arg": JSON.stringify({path, mode: "add",autorename: true,mute: false,strict_conflict: false}),
         },
         body: file,
      }, (err, res, body)=>{
         if(err){
            r(err)
         }else{
            s(body)
         }
      })
   })
}

const getFiles = (req)=>{
   const form = new formidable.IncomingForm();
   return new Promise((s,r)=>{
      form.parse(req, (err, fields, files) => {
         if(err){
            r(err)
         }else{
            s({fields, files})
         }
      });
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
                  let {fields:{path}, files:{file}} = await getFiles(req)
                  await upload(id, path, fs.readFileSync(file.path))
                  res.status(200).json({error: false})
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
