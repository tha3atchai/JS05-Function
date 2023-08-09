console.log("anonymous");

// Name fn, FN Declaration;
// function and () {};


// #2 : Anonymous

// IIFE : Intermidiate Invoke Function Expression

// (function (x, y) {
//     console.log(x + y);
// })(10, 5);

// console.log((function (x, y) {
//     return x + y;
// })(10, 5));

// let a = ((function (x, y) {
//     return x + y;
// })(10, 7));

// console.log(a);

// #2B

// VARIABLE = EXPRESSION
// let myVar = ((5 * 2 * 20 ) / 2) % 7;

// VARIABLE = FN (FN == EXPRESSION) // assign function ให้ตัวแปล จะมีชื่อหรือไม่ก็ได้;
// ASSIGN anonymouse FN to variable;
// const myFunc = function (x, y) {
//     return x + y;
// };

// console.log(myFunc(5,10));

// ASSIGN name FN to  variable
// const a = console.log;
// a("h1");

// ### ANONYM (MODERN: ARROW SYNTAX)

let a = function (x) {return x ** 2};

let b = (x, y) => x+y;

let c = (x, y) => {
    let result = x + y;
    return result;
};

let d = x => x + 2;


console.log(a(3));
console.log(b(3, 5));
console.log(c(3, 5));
console.log(d(3));

