const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');

const checkAuth = async(token)=>{
   try{
      let { id } = jwt.verify(token, process.env.JWTSECRET);
      let {db, client} = await loginMongo(process.env.MONGODB, 'users')
      let rt = await db.findOne({_id: new ObjectID(id)},{ projection:{_id:0,password:0}})
      if(rt){
         return {...rt}
      }
      return { error:true, msg: "Usuário não existe em nossa base." }
   }catch(e){
      return { error: true, msg: e }
   }
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'GET'){
         let { tk } = req.cookies
         res.status(200).json(await checkAuth(tk))
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
