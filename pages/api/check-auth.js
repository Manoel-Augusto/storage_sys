const jwt = require('jsonwebtoken');

const checkAuth = async(token)=>{
   try{
      jwt.verify(token, process.env.JWTSECRET);
      return true
   }catch(e){
      return false
   }
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'GET'){
         let { token } = req.query
         res.status(200).json(await checkAuth(token))
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
