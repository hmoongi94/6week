const a = "안녕"
a = "잘가"

//var 재선언, 재할당이 무제한임.
//let 재선언은 안됨. 재할당은 가능.
//const 재선언, 재할당 둘다 안됨.

function first(){
  const a = "아직 안 갔어?"
  const b = 1;
  return b;
}
console.log(a);
//함수 안의 변수는 콘솔이 안찍힘.
//지역변수의 개념: {}안에서 모든 것이 끝남. 
// 전역/지역-> 영역(scope)
console.log(first())
