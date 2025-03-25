// 04_crypto.js
const crypto = require('crypto');
const data = 'pw1234';
let secret = 'eohhh';
let encData = crypto.createHmac('sha-512', secret) // SHA => 보안 해시 알고리즘
                    .update(data)
                    .digest('base64');
console.log(encData);


