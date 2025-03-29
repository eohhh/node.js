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

module.exports = {
  selectAll,
  selectById,
}