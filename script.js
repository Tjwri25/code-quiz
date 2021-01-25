var i = 0;
var score = 0;
var secondsRemaining = 45;
var timer = document.querySelector("#timer");
var quizBeginning = document.querySelector("#quizBeginning");
var storedScores;
var scoreList = [];
var choiceOne = document.getElementById("choice-1");
var choiceTwo = document.getElementById("choice-2");
var choiceThree = document.getElementById("choice-3");
var choiceFour = document.getElementById("choice-4");
var choiceFive = document.getElementById("choice-5")


function setTime() {
  showQuestions();
  let timerInterval = setInterval(function() {
    secondsRemaining--;
    timer.textContent = "";
    timer.textContent = "Time: " + secondsRemaining;
    if (secondsRemaining <= 0 || questionCount === questions.length) {
      clearInterval(timerInterval);
    } 
  }, 1000);
  return(score)
}

function showQuestions() {
