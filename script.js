"use strict";

let hidden_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = " No Number 😑";
  } else if (guess === hidden_number) {
    document.querySelector(".number").textContent = hidden_number;
    document.querySelector(".message").textContent = " CORRECT NUMBER🎉";
    document.querySelector("body").style.backgroundColor = "#230f92";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".highscore").textContent = score + 1;
  } else if (guess !== hidden_number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > hidden_number ? " TOO HIGH😶" : " TOO LOW😶";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " YOU LOOSE THE GAME😥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  hidden_number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = "0";
});
