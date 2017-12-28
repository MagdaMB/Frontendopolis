document.addEventListener("DOMContentLoaded", function (){
	
	var tablica = document.getElementById("tablica");
	var btn = document.getElementById("btn");
	
		btn.addEventListener('click', function() {

			var array = [];
			var length = document.getElementById("length").value;

				for (var i=1; i<length; i++)
				{
					array[0] = 1000;
					array[i] = Math.floor((array[(i-1)]) / 2);
				}
					
				tablica.innerHTML = array;

		});	
	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
