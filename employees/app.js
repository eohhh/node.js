// app.js

// 모듈생성
const express = require('express');
const app = express();

// 미들웨어
app.use(express.urlencoded ({extended : false})); // 폼
app.use(express.json()); // json

// 서버생성
app.listen (5000, () => {
  console.log('Server Start!');
});

