document.addEventListener("DOMContentLoaded", function (){	
	
	/*pierwsza tablica z inputami*/
	var button = document.getElementById("btn");

		button.addEventListener('click', function() {
			var tablica = "<table>";
			var row = document.getElementById("length").value;

			for (var i = 1; i <= row; i++)
			{
			   tablica += "<tr>"; 
			    
			        tablica += "<td>" + '<input type="number" class="wartosc">' + "</td>";
			    
			   tablica += "</tr>"; 
			}

			tablica += "</table>";

			var rezultat = document.getElementById("myTable");

			rezultat.innerHTML = tablica;

		});  
	/*druga tablica z wynikami*/

	var button2 = document.getElementById("btnOblicz");

		button2.addEventListener('click', function() {
			
			var val = document.getElementsByClassName("wartosc").val;
			console.log(val);










			/*var tablica2 = "<table>";

				tablica2 += "<tr>";

					tablica2 += "<td>" + "Suma: " + "</td>"; 
			
				tablica2 += "</tr>"; 

				tablica2 += "<tr>";

					tablica2 += "<td>" + "Średnia: " + "</td>"; 
			
				tablica2 += "</tr>";

				tablica2 += "<tr>";

					tablica2 += "<td>" + "Największy wynik: " + "</td>"; 
			
				tablica2 += "</tr>";

				tablica2 += "<tr>";

					tablica2 += "<td>" + "Najmniejszy wynik: " + "</td>"; 
			
				tablica2 += "</tr>";

				tablica2 += "</table>";

				var final = document.getElementById("wynik");

				final.innerHTML = tablica2;*/

		});
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
