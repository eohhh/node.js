// emp_sql.js
// Table : employees


// 전체 조회 쿼리문
const selectAll =
`SELECT id
        ,first_name
        ,last_name
        ,email
        ,gender
        ,ip_address
FROM employees
ORDER BY id`;


// id 조회. 
const selectById =
`SELECT id
        ,first_name
        ,last_name
        ,email
        ,gender
        ,ip_addpress
WHERE id = ?`;

const insertInfo = 
`INSERT INTO employees (first_name, last_name, eamil, ip_address)
VALUES (?,?,?,?)`;

const updateInfo =
`UPDATE employees
SET ?
WHERE id = ?`;

const deleteInfo =
`DELETER employees
FROM id = ?`; 

module.exports = {
  selectAll,
  selectById,
  updateInfo,
  insertInfo,
  deleteInfo,
}