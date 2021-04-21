const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { serialize } = require('cookie');
const { loginMongo } = require('../../models/mongo');

const auth = async(email, password)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let emailExist = await db.findOne({email})
   client.close()
   if(emailExist){
      let { _id:id, password:password_crypt, ...rest } = emailExist
      if(bcrypt.compareSync(password, password_crypt)){
         let token = jwt.sign({id}, process.env.JWTSECRET, {expiresIn: '1d'})
         return {token, ...rest}
      }
   }
   return {error: true}
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'POST'){
         let { email, password } = req.body
         let { token, ...rest } = await auth(email,password)
         if(token){
            res.setHeader('Set-Cookie', serialize('tk', token, {
               httpOnly: true,
               secure: process.env.NODE_ENV !== 'development',
               sameSite: 'strict',
               maxAge: 50000000,
               path: '/'
            }));
         }
         res.status(200).json(rest)
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
