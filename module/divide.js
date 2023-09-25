function divide(firstNumber, SecondNumber){
  if(typeof(firstNumber)==="number" && typeof(SecondNumber)==="number"){
    // return firstNumber / SecondNumber
    let funcDivide = [firstNumber/SecondNumber, firstNumber%SecondNumber]
    for(i=0; i<funcDivide.length; i++){
      funcDivide[i]
    }
   return funcDivide
  }
  else{
    console.log("타입이 잘못 지정되었습니다.")
  }
}

module.exports = divide