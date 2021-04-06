const { loginMongo } = require('../../models/mongo');
const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const request = require('request');

const download = async(_id, path, type)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: `https://content.dropboxapi.com/2/files/download${type==='folder' ? '_zip' : ''}`,
         encoding: null,
         headers:{
            "Authorization":`Bearer ${dropboxToken}`,
            "Dropbox-API-Arg": JSON.stringify({path}),
         },
      }, (err, res, body)=>{
         if(err) return r(err)
         s(body) 
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
                  let { path, type } = req.body
                  path = unescape(encodeURIComponent(path))
                  let buffer = await download(id, path, type)
                  res.status(200).send(buffer)
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
