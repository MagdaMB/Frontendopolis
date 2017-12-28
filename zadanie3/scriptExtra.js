	
	document.getElementById("button1").onclick = function() {
		
		document.getElementById("number1").innerHTML = Math.floor(Math.random() * 20);

	}

	document.getElementById("button2").onclick = function() {
		
		document.getElementById("number2").innerHTML = Math.floor(Math.random() * 20);

	}
	

	document.getElementById("button3").onclick = function() {
		
		document.getElementById("suma").innerHTML = parseFloat(document.getElementById("number1").innerHTML) + parseFloat(document.getElementById("number2").innerHTML);

		document.getElementById("roznica").innerHTML = parseFloat(document.getElementById("number1").innerHTML) - parseFloat(document.getElementById("number2").innerHTML);
		
		document.getElementById("mnozenie").innerHTML = parseFloat(document.getElementById("number1").innerHTML) * parseFloat(document.getElementById("number2").innerHTML);

		if(document.getElementById("number2").innerHTML != 0) {

			document.getElementById("dzielenie").innerHTML = parseFloat(document.getElementById("number1").innerHTML) / parseFloat(document.getElementById("number2").innerHTML)
		} else {
			document.getElementById("dzielenie").innerHTML = "Nie dziel przez 0!!!!!";
		}
	}

	
