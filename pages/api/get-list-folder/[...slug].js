const request = require('request');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../../models/mongo');

const getListFolder = async(_id, path="")=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let result = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,password:0}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: "https://api.dropboxapi.com/2/files/list_folder",
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${result.dropboxToken}`},
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

export default async function handler(req, res){
   try{
      const { method, headers:{authorization} } = req;
      if(authorization){
         const token = authorization.split(' ')[1];
         switch(method){
            case 'GET':
               try{
                  let { id } = jwt.verify(token, process.env.JWTSECRET);
                  let { slug } = req.query
                  let rt = await getListFolder(id, `/${slug.join('/')}`)
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
