const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { loginMongo } = require('../../models/mongo');

const auth = async(email, password)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let emailExist = await db.findOne({email},{ projection:{_id:1,name:1,password:1}})
   client.close()
   if(emailExist){
      let { _id:id, name, password:password_crypt } = emailExist
      if(bcrypt.compareSync(password, password_crypt)){
         let token = jwt.sign({id}, process.env.JWTSECRET, {expiresIn: '1d'})
         return {name, token}
      }
   }
   return false
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'POST'){
         let { email, password } = req.body
         res.status(200).json(await auth(email,password))
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
