/*
var x=0;

while(x < 500){
	document.write("REDRUM" +"  ");
	x=x+1;
}

*/


var counter = 0;


while(counter < 50000){
	counter = counter + 1;
	var RanNum = Math.floor(Math.random() * 100) + 1;
	document.write(RanNum +"  ");
}
