document.addEventListener("DOMContentLoaded", function (){
	
	var button = document.getElementById("btn")

		button.addEventListener('click', function() {
			var num = parseFloat(document.getElementById("num").value);
			var wynik = document.getElementById("wynik");

			var suma = 0;
			for(var i=1; i<=num; i++) 
			{
				var a = Math.floor(Math.random() * 6) +1;
				suma += a; 
			}

			wynik.innerHTML = suma;
			               
			
		});

});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
