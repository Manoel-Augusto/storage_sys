const { loginMongo } = require('../../models/mongo');

const checkEmail = async(email)=>{
   let {db, client} = await loginMongo(process.env.MONGODB, 'users')
   let result = await db.findOne({email},{ projection:{_id:1}})
   client.close()
   if(result){
      return true
   }
   return false
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'GET'){
         let { email } = req.query
         res.status(200).json(await checkEmail(email))
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
