// js with server/03_sort.js

let fruits = ["Banana", "Orange",
  "Aplle", "Mango"
];
fruits.sort();
console.log(fruits);

let points = [40, 100, 1, 25, 5, 10];
points.sort();
console.log(points);

points.sort(function (a, b) {
  return a - b;
})