

	document.getElementById("losuj").onclick = function() {
					
		for (var i=0; i<20; i++) {
			var liczba=Math.floor(Math.random() * 6) + 1;

			var num = "";

			switch (liczba) {
				case 0:
				num = "zero";
				break;

				case 1:
				num = "jeden";
				break;

				case 2:
				num = "dwa";
				break;

				case 3:
				num = "trzy";
				break;

				case 4:
				num = "cztery";
				break;

				case 5:
				num = "pięć";
				break;

				default:
				num = "sześć";

			}

			var par = document.createElement("p");
			var text = document.createTextNode(num);
			par.className = "dis";

			par.appendChild(text);
    		document.body.appendChild(par);


		}	

	};

	
	
	
	



	

		
		

		
		
		

	
	

	
