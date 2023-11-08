// 5. js 파일의 for문을 이용하여 현재 브라우저의 1,2,3 숫자에 10을 더해보세요.

let number = document.querySelectorAll(".number");

let num = 0;

for (let i = 0; i < number.length; i++) {
  const sum = +number[i].innerText + 10;
  number[i].innerText = sum;
}
