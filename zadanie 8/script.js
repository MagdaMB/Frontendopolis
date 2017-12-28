var button = document.getElementById("button");
var liczby = " ";
	button.onclick = function() {

		for (var i=1; i<=100; i++) {

			var num = i;
			
			if(num%2 == 0 && num%3 !=0) {

				num = "Buzz ";
				var par = document.createElement("p");
				var text = document.createTextNode(num);

				par.appendChild(text);
    			document.body.appendChild(par);

			} else if(num%3 == 0 && num%2 !=0) {

				num = "Fizz ";

				var par = document.createElement("p");
				var text = document.createTextNode(num);

				par.appendChild(text);
    			document.body.appendChild(par);
			} else if(num%2==0 && num%3 == 0) {

				num = "FizzBuzz ";
				var par = document.createElement("p");
				var text = document.createTextNode(num);

				par.appendChild(text);
    			document.body.appendChild(par);
			} else {
				num = num + " ";
				var par = document.createElement("p");
				var text = document.createTextNode(num);

				par.appendChild(text);
    			document.body.appendChild(par);
			}

			
}


	};

	
	
	
	



	

		
		

		
		
		

	
	

	
