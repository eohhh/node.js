// mapper/sql/customers.js
// Table : customers


/* 쿼리문 작성 순서

1) ? 갯수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) ? 앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 기본 데이터 값 (문자, 숫자, 날짜 등)
2-2) 컬럼이 없는 경우 : 객체

*/ 

// 전체조회
const selectAll = 
`SELECT id
		     ,name
         ,email
         ,phone
         ,address
FROM customers
ORDER BY id`;

// 단건조회
const selectById = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
WHERE id = ?`;

// 등록
const insertInfo = 
`INSERT INTO customers (name, email, phone, address)
 VALUES (?,?,?,?)`; // 배열로 넘겨줘야함 // connectionPool.query(executeSql, values, (err, result)에서  values값을 배열로 넘겨줌.


 // {name : 'H', address:'daegu'}
 // SET name = 'H', address = 'daegu'

 // 수정
const updateInfo = 
`UPDATE customers
SET ? 
WHERE id = ?`; // 배열이면서 배열[ 객체, 단일값 ]이 필요함 => SET에 무엇이 들어갈지 모르니까..   // ?가 2개여서 배열이 필요함 값을 2개 가지는

// 삭제
const deleteInfo = 
`DELETE FROM customers
WHERE id = ?`;

module.exports = {
  selectAll, // 'selectAll' : selectAll
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo,
}