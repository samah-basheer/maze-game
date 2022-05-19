let lose = false;

function startGame() {
    document.getElementById('status').innerText = "Begin by moving your mouse over the \"S\".";
    lose = false;
    var boundaries = document.querySelectorAll('.boundary');
    for(var i = 0; i < boundaries.length; i ++) {
        boundaries[i].classList.remove("lose");
    }
}

function endGame() {
    if(lose) {
        document.getElementById('status').innerText = "You Lost!";
    } else {
        document.getElementById('status').innerText = "You Won!";
    }
}

function overBoundaries() {
    lose = true;
    document.getElementById('status').innerText = "You Lost!";
    var boundaries = document.querySelectorAll('.boundary');
    for(var i = 0; i < boundaries.length; i ++) {
        boundaries[i].classList.add("lose");
    }
}

var startBtn = document.getElementById('start');
startBtn.onclick = startGame;

var endBtn = document.getElementById('end');
endBtn.onmouseover = endGame;

var boundaries = document.querySelectorAll('.boundary');
for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = overBoundaries;
}