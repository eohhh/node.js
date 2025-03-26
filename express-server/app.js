// app.js
const express = require('express');
const app = express();


app.listen(5000, () => {
  console.log('Server Start!');
  console.log('http://localhost:5000');
});

// 미들웨어 등록
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// application/json
app.use(express.json());
// 미들웨어는 핸들러 보다 앞으로 와야함. 


const empRouter = require('./router/emp_routers.js'); // 라우터 고유 경로설정
app.use('/', empRouter);

// Error handler 에러발생시 보여주는 화면 (http://localhost:5000/error)
app.use(function(err, req, res, next) {
  res.status(500).json({statusCode: res.statusCode,
                        errMessage : err.message});
});

app.get('/error', (req, res, next)=> {
  next(new Error('Process Fail! Check Data!'));
});

// 정적파일 (css, html, image등 처리.)
// app.use(express.static('./fruits')); // http://localhost:5000/apple.jpg (fruits에 있는 jpg파일명)

app.use('/img', express.static('./fruits')); // http://localhost:5000/img/apple.jpg  (/img를 넣어줘야함..)