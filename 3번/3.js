// 3. 아래 두 가지 함수를 완성한 후, 브라우저 콘솔에 다음과 같은 결과가 나오도록 하세요.

function 인사하는함수(이름) {
  return "안녕 " + 이름 + "야~";
}
const result = 인사하는함수("철수");
console.log(result);

function 나이말해주는함수(나이) {
  return "내 나이는 " + 나이 + "살이야";
}
const result1 = 나이말해주는함수(20);
console.log(result1);

// 콘솔로그에 어떻게 작성해야 할까요?
console.log(`${result} 반가워. ${result1}`); // "안녕 철수야~ 반가워. 내 나이는 20살이야"
