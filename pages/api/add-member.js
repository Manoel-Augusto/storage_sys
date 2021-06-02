const request = require('request');
const { ObjectID } = require('mongodb');
const { loginMongo } = require('../../models/mongo');
const jwt = require('jsonwebtoken');

const getSharedFolderId = (token, path) => {
   return new Promise((s, r) => {
      request.post({
         url: 'https://api.dropboxapi.com/2/sharing/share_folder',
         headers: {
            "Authorization": `Bearer ${token}`,
         },
         json: {path, acl_update_policy: "editors", access_inheritance: "inherit"}
      }, (err, res, body) => {
         if (err) return r(err)
         if(body.error){
            if(body.error.bad_path){
               let { shared_folder_id } = body.error.bad_path
               return s({shared_folder_id})
            }
         }
         let { shared_folder_id } = body
         s({shared_folder_id})
      })
   })

}

const addCollaborator = async (user_id, id, path, email, type) => {
   let { db, client } = await loginMongo(process.env.MONGODB, 'users')
   let { dropboxToken } = await db.findOne({ _id: new ObjectID(user_id) }, { projection: { _id: 0, dropboxToken: 1 } })
   client.close()
   if (type == "folder") {
      let { shared_folder_id } = await getSharedFolderId(dropboxToken, path)
      var params = {
         shared_folder_id,
         members: [{
            member: {
               ".tag": "email",
               email
            },
            access_level: "editor"
         }],
      }
   } else {
      var params = {
         file: id,
         members: [{
            ".tag": "email",
            email
         }],
         access_level: "viewer",
      }
   }
   return new Promise((s, r) => {
      request.post({
         url: `https://api.dropboxapi.com/2/sharing/add_${type}_member`,
         headers: {
            "Authorization": `Bearer ${dropboxToken}`,
         },
         json: params
      }, (err, res, body) => {
         if (err) return r(err)
         s(body)
      })
   })
}

export default async function handler(req, res) {
   try {
      const { method, cookies: { tk } } = req;
      if (tk) {
         switch (method) {
            case 'POST':
               try {
                  let { id: user_id } = jwt.verify(tk, process.env.JWTSECRET);
                  let { id, path, email, type } = req.body
                  let result = await addCollaborator(user_id, id, path, email, type)
                  res.status(200).json({result})
               } catch (e) {
                  res.status(200).json({ error: true, msg: 'Falha ao adicionar membro' })
               }
               break;
            default:
               res.status(405).end(`Method ${method} Not Allowed`)
         }
      } else {
         res.status(500).json({ statusCode: 500, msg: "Falha na autenticação" })
      }
   } catch (err) {
      res.status(500).json({ statusCode: 500, msg: err.message })
   }
}
