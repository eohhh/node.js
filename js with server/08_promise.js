// 08_promise.js
timeAsync = new Promise((resolve, reject) => { // resolve => 성공 / reject => 실패.
  // 비동기 작업 등록.
  let result = false;

  setTimeout(() => {
    result = true;
    console.log('비동기 작업 수행');
    if (result) {
      resolve('result : 성공');
    } else {
      reject(new Error('result : 실패'));
    }
  }, 3000);
});
console.log(timeAsync); 
console.log('작업종료1');

timeAsync
.then(success => {
  console.log(success);
  return ' 첫번째 작업 완료';
}, (fail) => {
  console.log(fail);
})
.then((success) => {
  console.log(success);
  throw new Error('후속 처리 중 에러 발생');
})
.catch(console.log);
console.log('작업종료2');

/**
 * 
 * 실행순서 *
new Promise(...) 실행 → 3초 후 완료 예정

console.log(timeAsync) → pending 상태 출력

console.log('작업종료1') → 즉시 출력

3초 후 → console.log('비동기 작업 수행')

resolve('result : 성공') → 첫 번째 .then() 실행 → console.log('result : 성공')

return ' 첫번째 작업 완료' → 다음 .then() 실행 → console.log(' 첫번째 작업 완료')

throw Error(...) → .catch() 실행 → 에러 메시지 출력

그 사이에 console.log('작업종료2')는 미리 실행됨

 */