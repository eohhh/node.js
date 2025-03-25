// 02_timers.js
function showTime() {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}
showTime();

const timeout = setTimeout(() => {
  let today = new Date();
  console.log(today.toLocaleTimeString());
}, 2000); // 2초뒤에 실행.

let count = 0;
const interval = setInterval(() => {
  console.log('interval %d', count++);
  if (count == 2) {
    clearInterval(interval);
  }
}, 1000);

console.log('End!');