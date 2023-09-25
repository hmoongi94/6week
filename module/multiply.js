function multiply(firstNumber, SecondNumber){
  if(typeof(firstNumber)==="number" && typeof(SecondNumber)==="number"){
    return firstNumber * SecondNumber;
  }
  else{
    console.log("타입이 잘못 지정되었습니다.")
  }
}

module.exports = multiply