var score;
score = 0;

function displayScore(){
    document.getElementById('score').value = score;
}

function O(){ score++; }
function X(){  }

function resetScore(){
    score=0;
    displayScore();
}



function disableScroll() { 
    document.body.classList.add("stop-scrolling"); 
} 
  
let stopScroll = disableScroll();


