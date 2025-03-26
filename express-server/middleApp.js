// middleApp.js
const express = require('express');
const app = express();
// 미들웨어 등록.
const session = require('express-session');
const cors = require('cors');

let sessionSetting = session ({
  secret : '!@#!@#',
  resave : false, // 변경된 사항이 있을때만 저장할거냐.
  saveUninitialized : true, // 세션이 필요하기 전에 세션을 구동 여부.
  cookie : { // 세션쿠키 설정.
    httpOnly : true,
    secure : false,  // 보안 관련
    maxAge : 60000 // 유효기간
  }
});

app.use(sessionSetting);

app.use(express.json()); // json 형식으로 ..

// CORS 설정
// 1) 모든 origin과 모든 요청에 응답. origin==> http://127.0.0.1:5500/express-server/cors.html이면 http://127.0.0.1:5500 까지(port까지)
// app.use(cors()); // 모든 요청에 응답하기 때문에 보안이 취약 그 잡채임

// 2) 지정한 요청에 대해서만 응답
const corsOption = {
  origin : 'http://192.168.0.55:5500',
  optionSuccessStatus : 200,
}
app.use(cors(corsOption));


app.listen(3000, ()=> {
  console.log('http://localhost:3000');
});

app.post('/login', (req, res) => {
  const { id, pwd } = req.body;    // { "id" : "user01","pwd" : 1234 }
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err) { // 세션에 저장하는 작업 (이때 save는 비동기)
    if(err) throw err;
    // res.redirect('/');
    res.send(req.session);
  })
});


app.get('/', (req,res) => {
  res.send(req.session);
});

app.get('/logout', (req,res) => {
  req.session.destroy(); // 세션의 destroy 파기하는것.
  res.redirect('/');
})