const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getUser = async(_id)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let result = await db.findOne({_id: new ObjectID(_id)},{ projection:{_id:0,password:0}})
   client.close()
   return result
}

const updateUser = async(_id, data={})=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let result = await db.update({_id: new ObjectID(_id)},{$set: data})
   client.close()
   return result ? true : false
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
                  res.status(200).json(await getUser(id))
               }catch(e){
                  res.status(200).json(false)
               }
               break;
            case 'PUT':
               try{
                  let { id } = jwt.verify(token, process.env.JWTSECRET);
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
