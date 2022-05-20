let lose = false;
let score = 0;
let start = false;
let end = false;

function startGame() {
    if(lose) {
        score -= 10;
    }
    start = true;
    end = false;
    document.getElementById('status').innerText = "Begin by moving your mouse over the \"S\".";
    lose = false;
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
        if(lose) {
            score -= 10;
            document.getElementById('status').innerText = "You Lost! Your Score is: "+ score;
        } else {
            score += 5;
            document.getElementById('status').innerText = "You Won! Your Score is: " + score;
        }
        start = false;
        end = true;
    }
}

function overBoundaries() {
    if(!end) {
        lose = true;
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