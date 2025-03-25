// app.js
const express = require('express');
const app = express();

app.listen(5000, ()=>{
  console.log('Server Start!');
  console.log('http://localhost:5000');
});

// REST API기반으로 작업
// 전체조회 : GET + '/emps' (s를 붙인다)

app.get('/emps'); // 전체조회 : GET + '/emps' (s) // get => 조회 rist.

app.post(); // 등록 : PST + '/emps' (s) // post => 생성 create.

app.put(); // 수정 : PUT + '/emps/100' (s+100) // put => 업데이트 update . 100 => primary key..

app.delete(); // 삭제 : DELETE + '/emps/100' (s+100) // delete => 삭제 delete.