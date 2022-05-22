let loser = false;
let score = 0;
let start = false;
var timerVariable;
var last;
var best;
var temp;
var totalSeconds;
var hour;
var minute;
var seconds;

function startGame() {
    if(loser) {
        score -= 10;
    }
    totalSeconds = 0;
    timerVariable = setInterval(countUpTimer, 1000);

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
        clearInterval(timerVariable);
        last = hour + ":" + minute + ":" + seconds;
        (temp < last) ? best = temp : best = last;
        temp = best;
        document.getElementById("live").innerHTML = "0:0:0";
        document.getElementById("last").innerHTML = hour + ":" + minute + ":" + seconds;
        document.getElementById("best").innerHTML = best;
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

function countUpTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);
    document.getElementById("live").innerHTML = hour + ":" + minute + ":" + seconds;
}