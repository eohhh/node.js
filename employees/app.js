// app.js
 // require('dotenv').config{path : './mapper/dbConfig.env'};
// 모듈생성
const express = require('express');
const app = express();
const empRouter = require('./router/employees_router.js');
// 미들웨어
app.use(express.urlencoded ({extended : false})); // 폼
app.use(express.json()); // json

// 서버생성
app.listen (3000, () => {
  console.log('Server Start!');
});

// 라우팅
app.get('/', (req,res) => {
  res.send('Wellcome!');
});

app.use('/', empRouter);

