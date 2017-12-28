document.addEventListener("DOMContentLoaded", function (){
	
	var button = document.getElementById("btn");
	var array = new Array(length);
	var w = 0;

		button.addEventListener('click', function() {
			var length = parseFloat(document.getElementById("length").value);
			var tab = document.getElementById("tab");
			array = [];
			w = length;

			for (var i=0; i<length; i++) 
			{
				array[i] = Math.floor(Math.random() * 101);
			}

				tab.innerHTML = "To jest Twoja losowa tablica: [" + array + "]";
			
		});

	var btn1 = document.getElementById("btn1");

		btn1.addEventListener('click', function() {

			var a = document.getElementById("a").value;
			var b = document.getElementById("b").value;
			var wynik1 = document.getElementById("wynik1");
			var licz=0;
			for (var j = 0; j<=w; j++) 
			{	
				if ((a<=array[j]) && (array[j] <= b)) 
				{
					licz++;
				}

			}

			wynik1.innerHTML = licz;

		});

	var btn2 = document.getElementById("btn2");

		btn2.addEventListener('click', function() {
			var wynik2 = document.getElementById("wynik2");
			var total = 0;

			for (var z=0; z<= w; z++) 
			{
				if (array[z]%2 == 1) 
				{
					total++;
				}

			}

			wynik2.innerHTML = total;
		})

});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
