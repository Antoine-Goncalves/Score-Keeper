`use strict`;

const buttonPlayer1 = document.querySelector(".player1");

const buttonPlayer2 = document.querySelector(".player2");

const buttonReset = document.querySelector(".reset");

const numInput = document.querySelector("input");

const scorePlayer1 = document.querySelector("span");

const scorePlayer2 = document.querySelectorAll("span")[1];

const numFinalToWin = document.querySelectorAll("h2 span");

let goalPlayer1 = 0;

let goalPlayer2 = 0;

let scoreMax = 5;

function addScoreForPlayer1() {
	
	goalPlayer1++;

	scorePlayer1.textContent = goalPlayer1;

}

function addScoreForPlayer2() {
	
	goalPlayer2++;

	scorePlayer2.textContent = goalPlayer2;

}

buttonPlayer1.addEventListener("click", addScoreForPlayer1);
