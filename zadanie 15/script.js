document.addEventListener("DOMContentLoaded", function (){
	
	var tablica = document.getElementById("tablica");
	var btn = document.getElementById("btn");
	
		btn.addEventListener('click', function() {

			var array = [];
			var length = document.getElementById("length").value;

				for (var i=1; i<length; i++)
				{
					array[0] = 1;
					array[1] = 1;

					array[i] = (array[i-2] + array[i-1]);
				}
					
				tablica.innerHTML = array;

		});	
	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
