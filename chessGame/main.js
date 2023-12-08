var score = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var timer = document.getElementById("timer");
var vision = document.getElementById("vision");
var chessboard = document.getElementById("chessboard");

function startGame() {
  // arr of positons
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let nums = [1, 2, 3, 4, 5, 6, 7, 9];

  // random number from 1 to 8
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
  vision.innerHTML = `${randomVision}`;

  // 30 second timer
  let counter = 1;
  let points = 0;


  function handler(event) {
    if (randomVision === event.target.id) {
      points++;
      score.innerHTML = `SCORE: ${points}`;
      vision.style.color = "green";
      vision.style.border = "3px solid green";
      randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
      vision.innerHTML = `${randomVision}`;
    } else {
      vision.style.color = "red";
      randomVision = `${chars[getRandomInt(7)]}${nums[getRandomInt(7)]}`;
      vision.innerHTML = `${randomVision}`;
      vision.style.border = "23px solid red !important";
      
    }
  }

  chessboard.addEventListener("click", handler);

  let timerCount = setInterval(() => {

    timer.innerHTML = ` ${counter} Seconds`;
    
    counter++;
    
    if (counter > 30) {
        clearInterval(timerCount);
        chessboard.removeEventListener("click", handler);
      }
  }, 1000);
}