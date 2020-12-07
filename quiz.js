var score;
score = 0;

function displayScore(){ //점수 표시하기
    document.getElementById('score').value = score;
}

function resetScore(){ //점수 리셋
    score=0;
    displayScore();
}

function result(){ //최종 결과 값 보여주기
    if(document.getElementsByName('1')[4].checked == true){ score++; } //1번 답 : 5
    if(document.getElementsByName('2')[2].checked == true){ score++; } //2번 답 : 3
    if(document.getElementsByName('3')[5].checked == true){ score++; } //3번 답 : 6
    if(document.getElementsByName('4')[9].checked == true){ score++; } //4번 답 : 
    if(document.getElementsByName('5')[1].checked == true){ score++; } //5번 답 : X(2)
    if(document.getElementsByName('6')[0].checked == true){ score++; } //6번 답 : O(1)
    if(document.getElementsByName('7')[0].checked == true){ score++; } //7번 답 : O(1)
    if(document.getElementsByName('8')[1].checked == true){ score++; } //8번 답 : 2
    if(document.getElementsByName('9')[9].checked == true){ score++; } //9번 답 : 
    if(document.getElementsByName('10')[9].checked == true){ score++; } //10번 답 : 
    displayScore();
}

function disableScroll() { //스크롤 사용 금지하기
    document.body.classList.add("stop-scrolling"); 
} 