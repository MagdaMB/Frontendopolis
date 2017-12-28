

	document.getElementById("buttom").onclick = function() {

		var name = prompt("Podaj proszę swoje imię", "Megi");

		if(name !== "") {

		document.getElementById("answer").innerHTML = "Witaj " + name + ".";
		
		} else {

		document.getElementById("answer").innerHTML = "Proszę podaj swoje imię.";

	}

	}
	

	
