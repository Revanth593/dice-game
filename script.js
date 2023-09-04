var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");

var counter1 = document.getElementById("counter1");
var counter2 = document.getElementById("counter2");

var result = document.getElementById("result");
var pic = document.getElementById("pic");

var initialRandom = Math.floor(Math.random() * 6) + 1;

pic.innerHTML = "<img src='dice image/" + initialRandom + ".PNG'/>";

selection();

function selection() {
  let players = ["player1", "player2"];

  let randomPlayer = Math.floor(Math.random() * players.length);

  let selectedPlayer = players[randomPlayer];

  if (selectedPlayer == "player1") {
    btn.disabled = false;
    btn1.disabled = true;
    document.querySelector("span").innerHTML = "Player-1 To Play";
  } else if (selectedPlayer == "player2") {
    btn1.disabled = false;
    btn.disabled = true;
    document.querySelector("span").innerHTML = "Player-2 To Play";
  }
}

var player1 = document.getElementById("btn");
var currentScore1 = 0;
player1.addEventListener("click", rand1);

function rand1() {
  document.querySelector("span").innerHTML = "Player-2 To Play";
  var rand1 = Math.floor(Math.random() * 6) + 1;
  pic.innerHTML = "<img src='dice image/" + rand1 + ".PNG'/>";

  currentScore1 = currentScore1 + rand1;

  if (currentScore1 < 30) {
    counter1.innerHTML = currentScore1;
    btn.disabled = true;
    btn1.disabled = false;
  } else if (currentScore1 >= 30) {
    counter1.innerHTML = currentScore1;

    result.innerText = "Player 1 Congratulations! You win";
    btn.disabled = true;
    btn1.disabled = true;
  }
}

var player2 = document.getElementById("btn1");
var currentScore2 = 0;
player2.addEventListener("click", rand2);

function rand2() {
  document.querySelector("span").innerHTML = "Player-1 To Play";
  var rand2 = Math.floor(Math.random() * 6) + 1;
  pic.innerHTML = "<img src='dice image/" + rand2 + ".PNG'/>";

  currentScore2 = currentScore2 + rand2;

  if (currentScore2 < 30) {
    counter2.innerHTML = currentScore2;
    btn.disabled = false;
    btn1.disabled = true;
  } else if (currentScore2 >= 30) {
    counter2.innerHTML = currentScore2;

    result.innerText = "Player 2 Congratulations! You win";
    btn.disabled = true;
    btn1.disabled = true;
    currentScore2 = 0;
  }
}

var reset = document.getElementById("btn2");
reset.addEventListener("click", start);

function start() {
  result.innerHTML = "";
  currentScore1 = 0;
  counter1.innerHTML = currentScore1;
  currentScore2 = 0;
  counter2.innerHTML = currentScore2;
  selection();
}
