// function add(firstNumber, SecondNumber){
//   if(typeof(firstNumber)==="number"){if(typeof(SecondNumber)==="number"){
//   return firstNumber + SecondNumber;
// } else {
//   console.log(SecondNumber, "타입이 잘못 지정되었습니다.")
// }
//   } else{
//     console.log(firstNumber, "타입이 잘못 지정되었습니다.")
//   }

// console.log(add(1,"ㅇㅇ"))

function add(firstNumber, SecondNumber){
  if(typeof(firstNumber)==="number" && typeof(SecondNumber)==="number"){
    return firstNumber + SecondNumber;
  }
  else{
    console.log("타입이 잘못 지정되었습니다.")
  }
}


module.exports = add