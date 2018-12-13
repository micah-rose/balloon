
var rand;
var rand2;
var rand3;
var rand4;

function generateBalloons(){

	//Image and text changes for b1
		rand = Math.floor(Math.random()*5);

		switch(rand){
			case 0: document.getElementById("b1").src = "/img/balloon20.jpg"; break;
			case 1: document.getElementById("b1").src = "/img/balloon40.jpg"; break;
			case 2: document.getElementById("b1").src = "/img/balloon60.jpg"; break;
			case 3: document.getElementById("b1").src = "/img/balloon80.jpg"; break;
			case 4: document.getElementById("b1").src = "/img/balloon100.jpg"; break;
		}

		rand3 = Math.floor(Math.random()*2);

		if(rand3 == 0){
			document.getElementById("b1-p").innerText = "Helium";
		} else{
			document.getElementById("b1-p").innerText = "Air";
		}


	//Image and text changes for b2
		rand2 = Math.floor(Math.random()*5);

		switch(rand2){
			case 0: document.getElementById("b2").src = "/img/balloon20.jpg"; break;
			case 1: document.getElementById("b2").src = "/img/balloon40.jpg"; break;
			case 2: document.getElementById("b2").src = "/img/balloon60.jpg"; break;
			case 3: document.getElementById("b2").src = "/img/balloon80.jpg"; break;
			case 4: document.getElementById("b2").src = "/img/balloon100.jpg"; break;
		}

		rand4 = Math.floor(Math.random()*2);

		if(rand3 == 0){
			document.getElementById("b2-p").innerText = "Helium";
		} else{
			document.getElementById("b2-p").innerText = "Air";
		}

	//Comparison for b1 and b2
		if(rand == rand2 && rand3 == rand4){
			document.getElementById("results").innerText = "You got a match!!";
		} else {
			document.getElementById("results").innerText = "No match, sorry!!";
		}
	}
