// router (Presentation)
// router/customer_router.js
// control 역할.
// 라우터 모듈
const express = require('express');
const router = express.Router();
const custService = require('../service/customer_service.js');

// customers (고객)
// 전체조회 : GET + '/customers'
router.get('/customers', async(req, res) => { // async => 비동기를 동기방식으로 바꾸고 await을 통해 기다린후 뿌려줌.
  let custList = await custService.findAll();
  res.send(custList);
});

// 단건조회 : GET + '/customers/:id'
router.get('/customers/:id', async (req, res) => {
  let custId = req.params.id;
  let custInfo = await custService.findById(custId);
  res.send(custInfo);
});

// 등록 : POST + '/customers' + JSON
router.post('/customers', (req, res) => {
  
});

// 수정 : PUT + '/customers/:id' + JSON
router.put('/customers/:id', (req, res) => {
  
});

// 삭제 : DELETE + '/customers/:id'
router.delete('/customers/:id', (req, res) => {
  
});

module.exports = router;