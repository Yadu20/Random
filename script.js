var started = 0;
var i = 0;
var k;
var pattern = [];
var colors = ["green", "red", "yellow", "blue"];


$(document).keypress(function () {
    if (!started) {
        startGame();
    }
});

function startGame() {
    started = 1;
    pattern = [];
    i = 0;
    nextRandom();
}

function nextRandom() {
    pattern[i] = colors[Math.floor(Math.random() * 4)];
    makeEffects(pattern[i]);
    $("h1").text("Level " + pattern.length);
    k = 0;
    i++;
}

function makeEffects(x) {
    var audio = new Audio("sounds/" + x + ".mp3");
    audio.play();
    $("#" + x).addClass("pressed");
    setTimeout(function () {
        $("#" + x).removeClass("pressed");
    }, 100);
}

$(".btn").click(function (event) {
    if ($(this).attr("id") == pattern[k]) {
        makeEffects(pattern[k]);
        k++;
        if (k == i) {
            setTimeout(nextRandom, 1000);
        }
    } 
    else {
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 100);
        started = 0;
    }
});
