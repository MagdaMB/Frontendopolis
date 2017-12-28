	var button = document.getElementById("button");
	var num = " ";

	button.onclick = function() {

		for (var i=1; i<=100; i++) {	
			
			if(i%2 == 0 && i%3 !=0) {

				num += "Fizz ";

			} else if(i%3 == 0 && i%2 !=0) {

				num += "Buzz ";
			} else if(i%2==0 && i%3 == 0) {

				num += "FizzBuzz ";
			} else {
				num += i + " ";
			}		
		}

		document.getElementById("liczby").textContent = num;

	};



	
	
	
	



	

		
		

		
		
		

	
	

	
