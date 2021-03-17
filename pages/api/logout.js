const { serialize } = require('cookie');

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'GET'){
         res.setHeader('Set-Cookie', serialize('tk', '', {
            maxAge: -1,
            path: '/'
         }));
         res.end()
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
