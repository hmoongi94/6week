const hongmoongi = {
  plus: function(firstNumber,SecondNumber){
    return firstNumber + SecondNumber
  },
  minus: function(firstNumber,SecondNumber){
    return firstNumber-SecondNumber
  },
  multiply: function(firstNumber,SecondNumber){
    return firstNumber*SecondNumber
  },
  divide: function(firstNumber,SecondNumber){
    let divideValue = [firstNumber/SecondNumber, firstNumber%SecondNumber]
    for(i=0; i<divideValue.length; i++){
      divideValue[i]
    }
    return divideValue
  }
}

module.exports = hongmoongi