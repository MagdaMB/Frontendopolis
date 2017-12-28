document.addEventListener("DOMContentLoaded", function (){
	
	var tablica = document.getElementById("tablica");
	var btn = document.getElementById("btn");
	var array = [];

		btn.addEventListener('click', function() {
			
			array = [];
			var length = document.getElementById("length").value;

				for (var i=0; i<length; i++)
				{
					array[i] = Math.floor(Math.random() * 100);
				}
					
				tablica.innerHTML = array;

		});

	var btn1 = document.getElementById("btn1");
	var wynikMax = document.getElementById("wynik-max");
	var wynikPowt = document.getElementById("wynik-powt");
	
		btn1.addEventListener('click', function() {

			var naj=array[0];
			var powt=1;

			for (var j=1; j<array.length; j++) 
			{
				if(naj==array[j])
				{
					powt++;
				}
				if(naj<array[j]) 
				{
					powt=1
					naj=array[j];
				} 
				
			}

				wynikMax.innerHTML = "Twoja największa wartość to: " + naj;
				wynikPowt.innerHTML = "W tablicy występuje: " + powt + " razy";

	});
	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
