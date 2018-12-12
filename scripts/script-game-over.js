console.log(localStorage.winResult);
var result = localStorage.winResult;
var score = localStorage.score;
var headerItem = document.querySelector('h1');
var scoreItem = document.querySelector('h2');
var restartButton = document.querySelector('.restart-button');
var theOverlay = document.querySelector('.color-overlay');

function init(){
    if (result == 1)
    {
        headerItem.innerHTML = "GAME OVER";
        scoreItem.innerHTML = "Final Score: " + score + "";
        restartButton.innerHTML = "TRY AGAIN";
    }
    else if (result == 2){
        headerItem.innerHTML = "YOU WIN!";
        scoreItem.innerHTML = "Final Score: " + score + "";
        restartButton.innerHTML = "PLAY AGAIN";
        theOverlay.style.opacity = 0;
    }
}

init();