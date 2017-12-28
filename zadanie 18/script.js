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
	var wynik = document.getElementById("wynik");
	var wynikMin = document.getElementById("wynik-min");
	
		btn1.addEventListener('click', function() {

			var min = array[0];
			var newArray = [];
			
			for (var j=1; j<array.length; j++) 
			{
				if(min>array[j]) 
				{
					min=array[j];
				} 

			}

			for (var z=0; z<array.length; z++)
			{
				if (min==array[z])
				{
					newArray.push(z);
				}
			}

		wynikMin.innerHTML = "Najmniejsza wartość to: " + min;
		wynik.innerHTML = "Gdzie występują najmniejsze elementy: " + newArray;
	});
	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
