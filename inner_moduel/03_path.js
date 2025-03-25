// 03_path.js
// 전역변수, 절대경로
console.log(__filename); // file까지 해서 절대경로.
console.log(__dirname); // 디렉토리 정보만.

const path = require('path'); // path모듈.

console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));