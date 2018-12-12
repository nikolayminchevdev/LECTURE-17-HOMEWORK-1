var gameStates = {
    firstSelection: '',
    secondSelection: '',
    selectionState: 0,
    firstCard: '',
    secondCard: '',
    typeid1: '',
    typeid2: ''
};

myStartInterval();
var winResult = 0;
var timer;
var widthTimer = 0;

var scoreField = document.getElementById('score');
var timeBarElement = document.querySelector('.time-bar');

var score = 0;

var cardWinCounter = 0;

function myStartInterval()
{
    timer = setInterval(function()
    {
        widthTimer+=15;
        timeBarElement.style.width = ''+ widthTimer +'.px';
        if (widthTimer>=760)
        {
            localStorage.winResult = 1;
            localStorage.score = score;
            open('game-over.html', '_self');
        }
    },

1000);
}

function selectCard(cardType, bg){
    if (gameStates.selectionState===0)
    {
        gameStates.firstCard = document.querySelector('#' + cardType + ' .card');
        gameStates.firstCard.classList.toggle(bg);
        gameStates.typeid1=bg;
        gameStates.firstSelection = cardType;
        gameStates.selectionState = 1;
    }
    else if (gameStates.selectionState===1 && gameStates.firstSelection != cardType)
    {
        gameStates.secondCard = document.querySelector('#' + cardType + ' .card');
        gameStates.secondCard.classList.toggle(bg);
        gameStates.typeid2=bg;
        gameStates.secondSelection = cardType;
        gameStates.selectionState=3;
        setTimeout(result, 1000, gameStates.typeid1, gameStates.typeid2)
    }
}

function result(card1, card2){
    if (card1 === card2){
        console.log('DISAPPEAR!!!')

        score+=10;

        var first = document.querySelector('#' + gameStates.firstSelection);
        first.setAttribute('style', 'visibility: hidden;')

        var second = document.querySelector('#' + gameStates.secondSelection);
        second.setAttribute('style', 'visibility: hidden;')

        cardWinCounter++;

        gameStates.firstSelection = '';
        gameStates.secondSelection = '';
        gameStates.firstCard = '';
        gameStates.secondCard = '';
        gameStates.typeid1 = '';
        gameStates.typeid2 = '';
        gameStates.selectionState = 0;

        scoreField.innerHTML = 'Score: ' +  score;

        if (cardWinCounter==9)
        {
            localStorage.winResult = 2;
            localStorage.score = score;
            open('game-over.html', '_self');
        }
    }
    else
    {
        gameStates.firstCard.classList.toggle(gameStates.typeid1);
        gameStates.secondCard.classList.toggle(gameStates.typeid2);
        gameStates.firstSelection = '';
        gameStates.secondSelection = '';
        gameStates.firstCard = '';
        gameStates.secondCard = '';
        gameStates.typeid1 = '';
        gameStates.typeid2 = '';
        gameStates.selectionState = 0;
    }
}