var score=0;

function displayScore(){ //점수 표시하기
    document.getElementById('score').innerHTML = score;
}

function displayMessage(){
    var msg;

    if(score == 10){ msg = "와우!!! 짝짝짝!!!! 모든 문제를 다 맞추셨다니 정말 대단해요!!<br>당신은 좀비고의 수많은 고인물 중에서도 킹갓 고인물!<br>당신을 진정한 좀비고 마스터로 임명합니다!!<br>(설마... 치사하게 구글링을 한 건 아니겠죠? ㅎㅎ)"; }
    else if(score >= 8){ msg = "오오... 거의 모든 문제를 맞추셨네요!!<br>당신은 최소 2년 이상 좀비고를 해온 고인물!<br>당신을 좀비고 전문가로 임명합니다!!!"; }
    else if(score >= 5){ msg = "우와 반 이상의 문제를 맞추셨네요!<br>당신은 좀비고를 좋아하는 좀비고 애호가!<br>조금만 더 열심히 좀비고를 즐기면 당신도 좀비고 마스터가 될 수 있어요!"; }
    else if(score >= 2){ msg = "오오 꽤 많은 문제를 맞추셨군요!<br>당신은 미래에 좀비고 마스터가 될 기질을 갖추고 있습니다!<br>계속해서 정진하세요! 아자아자 화이팅!"; }
    else{ msg = "아닛... 이렇게 쉬운 문제를 다 틀리다니...!<br>당신은 좀비고를 싫어하는 좀비고 안티팬이군요...<br>우리 재미있는 좀비고 조금만 더 사랑해주세요 ㅠㅠ<br>만약 실수로 잘못 클릭해서 틀린 것 같다면 다시 한 번 도전 GOGO!!"; }

    document.getElementById("result").innerHTML = msg;
}

function result(){ //퀴즈 최종 결과 계산
    score=0;
    if(document.getElementsByName('1')[4].checked == true){ score++; } //1번 답 : 5
    if(document.getElementsByName('2')[2].checked == true){ score++; } //2번 답 : 3
    if(document.getElementsByName('3')[5].checked == true){ score++; } //3번 답 : 6
    if(document.getElementsByName('4')[4].checked == true){ score++; } //4번 답 : 5
    if(document.getElementsByName('5')[1].checked == true){ score++; } //5번 답 : X(2)
    if(document.getElementsByName('6')[0].checked == true){ score++; } //6번 답 : O(1)
    if(document.getElementsByName('7')[0].checked == true){ score++; } //7번 답 : O(1)
    if(document.getElementsByName('8')[1].checked == true){ score++; } //8번 답 : 2
    if(document.getElementsByName('9')[0].checked == true){ score++; } //9번 답 : 1
    if(document.getElementsByName('10')[2].checked == true){ score++; } //10번 답 : 3
    displayScore();
    displayMessage();
    location.href="quiz.html#11";
}

function disableScroll() { //스크롤 사용 금지하기
    document.body.classList.add("stop-scrolling"); 
} 