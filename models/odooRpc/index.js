const Odoo = require('odoo');

const odooObj = (host, port, database, username, password) => {
   return new Promise ((s,r) => {
      const odoo = new Odoo({
         host: host,
         port: port,
         database: database,
         username: username,
         password: password
      });
      s(odoo);
   });
};

const conecta = (odoo) => {
   return new Promise ((s,r) => {
      odoo.connect((err,sucess) => {
         if(err){
            r(err);
         }
         s(sucess);
      });
   });
};


const buscaLer = (odoo, modulo, params) => {
   return new Promise ((s,r) => {
      odoo.search_read(modulo, params, (err, products) => {
         if (err){
            r(err)
         };
         s(products);
      });
   });
};

const busca = (odoo, modulo, params) => {
   return new Promise ((s,r) => {
      odoo.search(modulo, params, (err, products) => {
         if (err){
            r(err)
         };
         s(products);
      });
   });
};
const criar = (odoo, modulo, params) => {
   return new Promise ((s,r) => {
      odoo.create(modulo, params, (err, products) => {
         if (err){
            r(err)
         };
         s(products);
      });
   });
};


const atualizar = (odoo, modulo, id, params) => {
   return new Promise ((s,r) => {
      odoo.update(modulo, id, params, (err, products) => {
         if (err){
            r(err)
         };
         s(products);
      });
   });
};

const deletar = (odoo, modulo, id) => {
   return new Promise ((s,r) => {
      odoo.delete(modulo, id, (err, products) => {
         if (err){
            r(err)
         };
         s(products);
      });
   });
};

const rpcCall = (odoo, params)=>{
   return new Promise ((s,r) => {
      odoo.rpc_call('/web/dataset/call_kw', params, (err, result)=>{
         if (err){
            r(err)
         };
         s(result);
      })

   })
}

module.exports = {
   odooObj,
   conecta,
   buscaLer,
   busca,
   criar,
   atualizar,
   deletar,
   rpcCall
}

