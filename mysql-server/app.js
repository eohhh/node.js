// 만드는 순서 service에서 기능만들고 -> mapper가서 DB,query문 -> router 만들고 -> service랑 연결.
// 동작 순서 app.js => router => service => mapper
// FrontController같은 역할.
require('dotenv').config({path : './mapper/dbConfig.env'}); // config => env 파일을 경로로 넘겨주면 됨.
// console.log(process.env);
const express = require('express');
const app = express();
const custRouter = require('./router/customer_router.js');

//미들웨어
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// 응답서버 설정
app.listen(3000, ()=> {
  console.log('Server Start');
  console.log('http://localhost:3000');
});

// 라우팅
app.get('/', (req,res) =>{ 
  res.send('Wellcome!');
});

app.use('/', custRouter);