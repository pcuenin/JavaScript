
var RanNum = Math.floor(Math.random() * 10) + 1;

for (x = 0; Guess != RanNum; x+=1) {
	var Guess = prompt("Guess a number between 1-10");

}

document.write("Great job you guessed " + RanNum + ". It only took " + x + " tries.");
