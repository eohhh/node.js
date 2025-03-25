// 05_fs.js
const fs = require('fs');

const data = 'Hello, World!!';

fs.writeFile('./sample.txt', data, 'latin1', (err) => { // 파일생성.
  if (err) {
    throw err;
  }
  console.log('파일쓰기 완료!');
});

fs.readFile('./sample.txt', 'utf-8', (err, result) => { // ./sample.txt파일에 있는거 읽기. (인코딩->err, 디코딩->result)
  if (err) throw err;
  console.log(result);
});