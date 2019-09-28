`use strict`;

const buttonPlayer1 = document.querySelector(".player1");

const buttonPlayer2 = document.querySelector(".player2");

const buttonReset = document.querySelector(".reset");

const numInput = document.querySelector("input");

const scorePlayer1 = document.querySelector("span");

const scorePlayer2 = document.querySelectorAll("span")[1];

const numFinalToWin = document.querySelectorAll("span")[2];

const darkMode = document.querySelector(".darkMode");

let goalPlayer1 = 0;

let goalPlayer2 = 0;

let scoreMax = 5;

function addScoreForPlayer1() {
	
	if (goalPlayer1 < scoreMax && goalPlayer2 != scoreMax) {
		
		goalPlayer1++;

		stopTheMatch();

		scorePlayer1.textContent = goalPlayer1;

	}
}

function addScoreForPlayer2() {
	
	if (goalPlayer2 < scoreMax && goalPlayer1 != scoreMax) {

		goalPlayer2++;

		stopTheMatch();

		scorePlayer2.textContent = goalPlayer2;

	}
}

function stopTheMatch() {

	if (goalPlayer1 >= scoreMax) {

		goalPlayer1 = scoreMax;
		scorePlayer1.classList.add("win");
	}

	if (goalPlayer2 >= scoreMax) {
	
		goalPlayer2 = scoreMax;
		scorePlayer2.classList.add("win");
	}

}

function resetAll() {
	
	goalPlayer1 = 0;

	goalPlayer2 = 0;

	scorePlayer1.textContent = 0;

	scorePlayer1.classList.remove("win");

	scorePlayer2.textContent = 0;

	scorePlayer2.classList.remove("win");

	numFinalToWin.textContent = scoreMax;

}

function chooseScoreMax() {
	
	numFinalToWin.textContent = input.value;
	
	scoreMax = Number(input.value);

	resetAll();
}

function addDarkMode() {
	let color = document.body.style.background;

    	if (color == "") {
        	
		document.body.style.background = "#0D0D0D";
    	} else {
		document.body.style.background = "";
	}
    	
}

buttonPlayer1.addEventListener("click", addScoreForPlayer1);

buttonPlayer2.addEventListener("click", addScoreForPlayer2);

buttonReset.addEventListener("click", resetAll);

input.addEventListener("change", chooseScoreMax);

darkMode.addEventListener("click", addDarkMode);
