document.addEventListener("DOMContentLoaded", function() {	
	/*var pierwszy;
	var poprzedni;
	var nastepny;
	var klik = 1;

		addEventListener('click', function(event) {
			
			klik++;

			if (klik % 2 == 0) 
			{
			pierwszy = event.target;
			poprzedni = pierwszy.previousElementSibling;
			nastepny = pierwszy.nextElementSibling;

			pierwszy.className = "first";
			poprzedni.className = "previous";
			nastepny.className = "next";
		    } 

			if (klik % 2 != 0)
			{
			pierwszy.className = "reset";
			poprzedni.className = "reset";
			nastepny.className = "reset";
		    }

		})*/
		
var x = document.querySelector("li");

		for(var i=0; i<=x.length; i++) {
				
				x[i].addEventListener("click", function(event) {
		   		
			   	var clicked = event.target;
			   	var poprzedni = clicked.previousElementSibling;
			   	var nastepny = clicked.previousElementSibling;

			   	clicked.classList.add("active");
			 	poprzedni.classList.add("previous");
			 	nastepny.classList.add("next");	


		});
			}
	})

	
	
		



	
	
	
	



	

		
		

		
		
		

	
	

	
