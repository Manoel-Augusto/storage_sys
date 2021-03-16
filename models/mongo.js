const MongoClient = require('mongodb').MongoClient;
const URI = "mongodb://localhost:27017/";

const loginMongo = async(dbName, collection) => {
   try{
      let client = await MongoClient.connect(URI, {useNewUrlParser:true, useUnifiedTopology: true});
      let db = await client.db(dbName).collection(collection);
      return({db, client})
   }catch(e){
      return e;
   };

};
module.exports = { loginMongo }
