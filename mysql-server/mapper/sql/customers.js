// mapper/sql/customers.js
// Table : customers
const selectAll = 
`SELECT id
		     ,name
         ,email
         ,phone
         ,address
FROM customers
ORDER BY id`;

const selectById = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
WHERE id = ?`

module.exports = {
  selectAll, // 'selectAll' : selectAll
  selectById,
}