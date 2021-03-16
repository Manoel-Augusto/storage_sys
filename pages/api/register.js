const bcrypt = require('bcrypt');
const { loginMongo } = require('../../models/mongo');

const register = async(name, email, password, dropboxToken)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let emailExist = await db.findOne({email},{ projection:{id:1}})
   if(!emailExist){
      try{
         const hash = bcrypt.hashSync(password, 10);
         await db.insert({name, email, password: hash, dropboxToken})
         client.close()
         return true
      }catch(e){}
   }
   client.close()
   return false
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'POST'){
         let { name, email, password, dropboxToken } = req.body
         res.status(200).json(await register(name, email, password, dropboxToken))
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
