const crypto = require('crypto');

const passCompare = (secret, format)=>{
   let parts = format.split('$')
   return parts[4] == crypto.pbkdf2Sync(secret,
      Buffer.from(parts[3].replace(/\./g, '+') + '='.repeat(parts[3].length % 3), 'base64'),
      +parts[2], 64, parts[1].split('-')[1])
      .toString('base64').replace(/=/g, '').replace(/\+/g, '.')
}
module.exports = {
   passCompare,
}
