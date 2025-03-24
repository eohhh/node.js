// 06-02_destrucuring.js
let {print} = require('./06-01_module'); // require => 일종의 import.

print('Hello');
// console.log(plus(1,2));

// 1) Object
let person = {
  firstName : "John",
  lastName : "Doe",
  age : 37,
  email : "jogn@gmail.com",
  country : "USA"
};

let { lastName, email } = person;
console.log(lastName, email);
console.log(person.lastName);

function getFullName ({firstName, lastName}) {
  console.log(`${firstName}, ${lastName}`);
}

getFullName(person);

// 2) Array
let scores = [100, 80, 90];

let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);