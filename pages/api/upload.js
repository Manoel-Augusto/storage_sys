const { loginMongo } = require('../../models/mongo');
const { IncomingForm } = require('formidable');
const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const request = require('request');
const fs = require('fs');
export const config = {api: {bodyParser: false}}

const getFormData = (req) => new Promise((s,r)=>{
   const form = new IncomingForm();
   form.parse(req, (err, fields, files) => {
      if (err) return r(err)
      s({fields, file: fs.readFileSync(files.file.path)})
   });
});

const upload = async(_id, path, file)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      const args = JSON.stringify({path, mode: "add",autorename: true,mute: false,strict_conflict: false})
      request.post({
         url: "https://content.dropboxapi.com/2/files/upload",
         headers:{
            "Content-Type": "application/octet-stream",
            "Authorization":`Bearer ${dropboxToken}`,
            "Dropbox-API-Arg": args,
         },
         body: file,
      }, (err, res, body)=>{
         if(err) return r(err)
         try{
            s(JSON.parse(body)) 
         }catch(e){
            r(body)
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
                  let {fields:{path}, file} = await getFormData(req)
                  path = unescape(encodeURIComponent(path))
                  let {id:idUpload} = await upload(id, path, file)
                  res.status(200).json({error: false, idUpload})
               }catch(err){
                  res.status(500).json({statusCode: 500, error: true, msg: err})
               }
               break;
            default:
               res.status(405).end(`Method ${method} Not Allowed`)
         }
      }else{
         res.status(500).json({statusCode: 500, error: true, msg: "Falha na autenticação"})
      }
   }catch(err){
      res.status(500).json({statusCode: 500, error: true, msg: err.message})
   }
}
