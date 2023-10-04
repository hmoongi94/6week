// function add(firstNumber, SecondNumber){
//   if(typeof(firstNumber)==="number"){if(typeof(SecondNumber)==="number"){
//   return firstNumber + SecondNumber;
// } else if(typeof(firstNumber)!=="number"{
//   console.log(SecondNumber, "타입이 잘못 지정되었습니다.")
// }
//   } else{
//     console.log(firstNumber, "타입이 잘못 지정되었습니다.")
//   }

// console.log(add(1, 2))

// function add(firstNumber, SecondNumber){
//   if(typeof(firstNumber)==="number" && typeof(SecondNumber)==="number"){
//     return firstNumber + SecondNumber;
//   }
//   else{
//     console.log("타입이 잘못 지정되었습니다.")
//   }
// }

// const add = require("./module/add.js")
// console.log(add(5,2))

// const minus = require("./module/minus.js")
// console.log(minus(5,2))

// const divide = require("./module/divide.js")
// console.log(divide(5,2))

// const multiply = require("./module/multiply")
// console.log(multiply(5,2))


const add = require("./module/add.js");
const minus = require("./module/minus.js");
const multiply = require("./module/multiply.js");
const divide = require("./module/divide.js");


const calc = {
  add: require("./module/add.js"),
  minus: require("./module/minus.js"),
  multiply: require("./module/multiply.js"),
  divide: require("./module/divide.js"),
}

console.log("더하기", add(1,2));
console.log("빼기", minus(1,2));
console.log("곱하기", multiply(1,2));
console.log("나누기", divide(1,2));

const mysachick = require("./module/hongmoongi-sachick.js")
console.log(mysachick.divide(5,5))


