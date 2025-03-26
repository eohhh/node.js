// emp_routers.js
const express =  require('express');
const router = express.Router(); // R
const { query } = require('../mapper/emp-map.js');


// REST API기반으로 작업
// 전체조회 : GET  +('/test', 지금은 app.use('/', empRouter);에서 '/'이기 때문에 생략.) + /emps' (s를 붙인다) // 전체조회 : GET + '/emps' (s) // get => 조회 rist.
router.get('/emps', (req, res) => { // end point
  let list = query('SELECT'); // 서비스.
  res.send(list); // 응답형태.
});
/*
  content-type        || express
  GET + QuerySting    || request.query
  POST + QueryString  || request.body
  JSON                || request.body
  경로에 값을 전달    || request.params
*/



// 단건조회 : GET + /emps/100' ==> 100은 경로의 데이터로 넘어온거.
router.get('/emps/:empId', (req, res) => {
  let searchId = req.params.empId;
  let info = query('SELECT', null, {id: searchId});
  res.send(info[0]); // [0] 을 안넣어주면 배열안에 객체( [{}] ) , [0]을 넣어주면 객체형태로 반환( {} )
});



// app.post(); // 등록 : PST + '/emps' (s) // post => 생성 create.
router.post('/emps', (req, res)=> {
  let addInfo = req.body; // body 영역의 정보를 가지고 온다.
  query('INSERT', addInfo);
  res.send({'result' : 'success'});
});



// app.put(); // 수정 : PUT + '/emps/100' + JSON (s+100) // put => 업데이트 update . 100 => primary key..
router.put('/emps/:eId', (req, res)=> {
 let searchId = req.params.eId;
 let updateInfo = req.body;
 query('UPDATE', updateInfo, { id : searchId});
 res.send({'result' : 'success', 'id' : searchId});
});


// app.delete(); // 삭제 : DELETE + '/emps/100' (s+100) // delete => 삭제 delete.
router.delete('/emps/:empId', (req,res)=> {     // ★★ 단건조회랑 거의 같음 ★★
  let searchId = req.params.empId;
  query('DELETE', null, {id : searchId});
  res.status(204).send('Completed'); // status ==> 상태코드를 변경할때 사용하는 메서드.
});



module.exports = router; // 라우터를 서버에 보내줘야 함.