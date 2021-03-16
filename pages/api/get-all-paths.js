const request = require('request');

const getListFolderRecursive = ()=>{
   return new Promise((s,r)=>{
      request.post({
         url: "https://api.dropboxapi.com/2/files/list_folder",
         headers:{"Content-Type":"application/json","Authorization":`Bearer ${process.env.TOKEN}`},
         json:{ path:"", recursive: true }
      }, (err, res, body)=>{
         if(err){
            r(err)
         }else{
            s(body)
         }
      })
   })
}

export default async function handler(req, res){
   try{
      const { method } = req;
      if(method === 'GET'){
         let {entries,error} = await getListFolderRecursive()
         if(entries){
            let slugs = entries.map(item => ({params:{slug:item.path_lower.split("/").slice(1)}}))
            res.status(200).json(slugs)
         }else{
            res.status(500).json({statusCode: 500, msg: error})
         }
      }else{
         res.status(405).end(`Method ${method} Not Allowed`)
      }
   }catch(err){
      res.status(500).json({statusCode: 500, msg: err.message})
   }
}
