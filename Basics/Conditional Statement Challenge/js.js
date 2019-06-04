var Score = 0;
var Answer = prompt("What is 2+2?");
if (Answer==="4"){
		alert("Good job!");
		Score=Score+1;
	}else {
		alert("WRONG.");
	}
var Answer = prompt("What is 5-2?");
if (Answer==="3"){
		alert("Good job!");
		Score=Score+1;
	} else {
		alert("WRONG.");
	}

var Answer = prompt("What is 1+7?");
if (Answer==="8"){
		alert("Good job!");
		Score=Score+1;
	} else {
		alert("WRONG.");
	}

if(Score >=2){
	document.write("You won!");
} else {
	document.write("Please try again!");
}