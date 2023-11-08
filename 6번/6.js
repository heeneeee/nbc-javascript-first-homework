// 6. 브라우저 새로고침 3초 후 화면에 “안녕” 이라는 문자가 보이도록 해보세요. (setTimeout)
setTimeout(() => {
  document.querySelector("body").innerHTML = "안녕";
}, 3000);
