let lose = false;
let score = 0;
let start = 0;
let end = false;

function startGame() {
    start = 1;
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
    if(start == 1) {
        if(lose) {
            score -= 10;
            document.getElementById('status').innerText = "You Lost! Your Score is: "+ score;
        } else {
            score += 5;
            document.getElementById('status').innerText = "You Won! Your Score is: " + score;
        }
        start = 0;
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

var startBtn = document.getElementById('start');
startBtn.onclick = startGame;

var endBtn = document.getElementById('end');
endBtn.onmouseover = endGame;