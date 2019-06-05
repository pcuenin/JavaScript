


function DiceFunction(a) {
	var RNumber = Math.floor(Math.random() * a) + 1;
	document.write("The Dice Rolled a " + RNumber +" That is between 1 and " + a +"<br>");
}


DiceFunction("6");
DiceFunction("12");
DiceFunction("20");