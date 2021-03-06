const { loginMongo } = require('../../models/mongo');
const { ObjectID } = require('mongodb');
const request = require('request');

const download = async(user_id, file_id, type)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let {dropboxToken} = await db.findOne({_id: new ObjectID(user_id)},{ projection:{_id:0,dropboxToken:1}})
   client.close()
   return new Promise((s,r)=>{
      request.post({
         url: `https://content.dropboxapi.com/2/files/download${type==='folder' ? '_zip' : ''}`,
         encoding: null,
         headers:{
            "Authorization":`Bearer ${dropboxToken}`,
            "Dropbox-API-Arg": JSON.stringify({path: file_id}),
         },
      }, (err, res, body)=>{
         if(err) return r(err)
         s(body) 
      })
   })
}

export default async function handler(req, res){
   try{
      const { method } = req;
      switch(method){
         case 'POST':
            try{
               let { user_id, file_id, type } = req.body
               let buffer = await download(user_id, file_id, type)
               res.status(200).send(buffer)
            }catch(err){
               res.status(500).json({statusCode: 500, error: true, msg: err})
            }
            break;
         default:
            res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, error: true, msg: err.message})
   }
}
