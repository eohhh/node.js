// mapper (Persistence)
// mapper/mapper.js 
const mariaDB = require('mariadb/callback');
const sqlList = require('./sql/customers.js');
const connectionPool = mariaDB.createPool({
  // 필수 // DB에 접속하기 위한 정보.
host : process.env.DB_HOST,
port : process.env.DB_PORT,
password : process.env.DB_PWD,
user : process.env.DB_USER,

database : process.env.DB_DATABASE,
connectionLimit : process.env.DB_LIMIT,
// 선택이지만 권장사항.
permitSetMultiParamEntries : true,
insertIdAsNumber : true,
bigIntAsNumber : true,
});

let testSql = `SELECT * FROM customers`;

const query = (alias, values) => { 
  return new Promise((resolve, reject) => {
    let executeSql = sqlList[alias]; // sqlList['selectAll']
    console.log(`sql : ${executeSql}`);
    connectionPool.query(executeSql, values, (err, result) => {
      if(err) {
        reject({err});  
      } else {
        resolve(result);
      }
    });
  })
  .catch(err => {
    console.log(err);
    return err;
  });
};

module.exports = {
  query,
}