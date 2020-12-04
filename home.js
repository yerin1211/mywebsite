// 페이지를 스크롤할 때 실행
window.onscroll = function() {myFunction()};

//스크롤바 기능
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; //전체 스크롤 길이
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //현재 스크롤 위치
  var scrolled = (winScroll / height) * 100; //현재 스크롤 길이/전체 스크롤 길이 퍼센트
  document.getElementById("myBar").style.width = scrolled + "%";
}

function junbee(){ alert('준비중입니다.'); }

function dalkong(){
  document.getElementById('menu').style.height='700px';
}
function secom(){
  document.getElementById('menu').style.height='50px';
}

//마우스의 위치 가져오는 함수 (onmousemove()와 사용하기)
function getPos(e){
  x=e.clientX;
  y=e.clientY;
  cursor="Your Mouse Position Is : " + x + " and " + y ;
  document.getElementById("cursor").innerHTML=cursor
}
//마우스의 위치가 영역을 벗어남
function stopTracking(){
  document.getElementById("cursor").innerHTML="";
}