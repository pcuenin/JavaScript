

var counter = 0 ;

while (SecretQuestion !== "aabracadabra"){
	var SecretQuestion = prompt("What is the Secret Password");
	counter +=1;

	if(SecretQuestion == "aabracadabra"){
 	document.write("YOU MAY ENTER");
 	
 	}

	if (counter > 3){
		document.write("YOU SHALL NOT PASS");
		break

	}
}


