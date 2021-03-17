const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const updateUser = async(_id, data={})=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let rt = await db.update({_id: new ObjectID(_id)},{$set: data})
   client.close()
   return rt ? true : false
}

export default async function handler(req, res){
   try{
      const { method, cookies:{tk} } = req;
      if(tk){
         switch(method){
            case 'PUT':
               try{
                  let { id } = jwt.verify(tk, process.env.JWTSECRET);
                  if(req.body.password){
                     const hash = bcrypt.hashSync(req.body.password, 10);
                     req.body.password = hash
                  }
                  res.status(200).json(await updateUser(id, req.body))
               }catch(e){
                  res.status(200).json(false)
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
