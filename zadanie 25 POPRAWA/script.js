document.addEventListener("DOMContentLoaded", function() {	
	
var x = document.querySelectorAll("li");
console.log(x);
		for(var i=0; i<x.length; i++) {
				
				x[i].addEventListener("click", function(event) {
			   		
				   	var clicked = event.target;
				   	console.log(clicked)
				   	var poprzedni = clicked.previousElementSibling;
				   	console.log(poprzedni)
				   	var nastepny = clicked.nextElementSibling;
				   	console.log(nastepny)


				   	if(i%2===0) {
				   		clicked.classList.add("lightGrey")
				   	} else {
				   		clicked.classList.add("darkGrey")
				   	}

				   	if (clicked.classList.contains("active")) {
				   		clicked.classList.remove("active");
					 	poprzedni.classList.remove("previous");
					 	nastepny.classList.remove("next");
					 	clicked.classList.remove("lightGrey");
					 	clicked.classList.remove("darkGrey");

				   	} else {
				   		clicked.classList.add("active");
					 	poprzedni.classList.add("previous");
					 	nastepny.classList.add("next");	
				   	}
				   	
				   	
		});

			}
	})

	
	
		



	
	
	
	



	

		
		

		
		
		

	
	

	
