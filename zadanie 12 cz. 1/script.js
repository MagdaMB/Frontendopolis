document.addEventListener("DOMContentLoaded", function (){
	
	var button = document.getElementById("btn")

		button.addEventListener('click', function() {
			var a = parseFloat(document.getElementById("first").value);
			var b = parseFloat(document.getElementById("second").value);
			var wynik = document.getElementById("wynik");

			if(a<=b) 
			{
				var w= 0;
			    for(var i=a; i<=b; i++) 
			    w += i;
				
			} 
			else 
			{
				var w= 0;
			    for(var i=b; i<=a; i++) 
			    w += i;
			}

			wynik.innerHTML = w;
			               
			

			
		});

});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
