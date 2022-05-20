let loser = false;
let score = 0;
let start = false;

function startGame() {
    if(loser) {
        score -= 10;
    }
    start = true;
    document.getElementById('status').innerText = "Begin by moving your mouse over the \"S\".";
    loser = false;
    var boundaries = document.querySelectorAll('.boundary');
    for(var i = 0; i < boundaries.length; i ++) {
        boundaries[i].classList.remove("lose");
    }
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundaries;
    }
}

function endGame() {
    if(start) {
        if(loser) {
            score -= 10;
            document.getElementById('status').innerText = "You Lost! Your Score is: "+ score;
        } else {
            score += 5;
            document.getElementById('status').innerText = "You Won! Your Score is: " + score;
        }
        start = false;
    }
}

function overBoundaries() {
    if(start) {
        loser = true;
        document.getElementById('status').innerText = "You Lost!";
        var boundaries = document.querySelectorAll('.boundary');
        for(var i = 0; i < boundaries.length; i ++) {
            boundaries[i].classList.add("lose");
        }
    }
}

function cheating() {
    if (start) {
        alert('You are cheating!!!');
    }
}

var startBtn = document.getElementById('start');
startBtn.onclick = startGame;

var endBtn = document.getElementById('end');
endBtn.onmouseover = endGame;

var leaveGame = document.getElementById('game');
leaveGame.onmouseleave = cheating;