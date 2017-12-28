
	var button = document.getElementById("button");
	var licznik=0;
	var click=1;

	document.getElementById("button").onclick = function () {
		
			
				licznik=licznik+click;

				if (licznik%5==0) {
					click = click+1;
				}

				document.getElementById("licznik").innerHTML = licznik;
			
		
	}

	



	

		
		

		
		
		

	
	

	
