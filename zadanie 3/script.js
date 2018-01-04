	
	

	

	document.getElementById("button").onclick = function() {

		var num1 = document.getElementById("number1").value;
		var num2 = document.getElementById("number2").value;

		var number1 = parseFloat(num1);
		var number2 = parseFloat(num2);

		document.getElementById("suma").innerHTML = "Suma = " + (number1 + number2);
		document.getElementById("różnica").innerHTML = "Roznica = " + (number1 - number2);
		document.getElementById("mnozenie").innerHTML = "Iloczyn = " + number1 * number2;


		if(number2 != 0) {

			document.getElementById("dzielenie").innerHTML = "Iloraz = " + number1 / number2;
		} else {
			document.getElementById("dzielenie").innerHTML = "Nie dziel przez 0!!!!!!!";
		}
		
		
		

	}
	

	
