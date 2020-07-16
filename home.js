// 페이지를 스크롤할 때 실행
window.onscroll = function() {myFunction()};

//스크롤바 기능
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function junbee(){ alert('준비중입니다.'); }

function dalkong(){
  document.getElementById('menu').style.height='700px';
}
function secom(){
  document.getElementById('menu').style.height='50px';
}