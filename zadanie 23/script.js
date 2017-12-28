document.addEventListener("DOMContentLoaded", function() {	
	
	let btn = document.getElementById("btn");
	
		btn.addEventListener('click', function() {
			let wiersz = document.getElementById("wiersz").value;
			let kolumna = document.getElementById("kolumna").value;
			let table = document.getElementById("myTable");
			let a = document.getElementById("a").value;
			let b = document.getElementById("b").value;
			table.innerHTML = '';

			for(let j=0;j<wiersz;j++){
				let row = table.insertRow(0);

				let cell = new Array(kolumna);
				for(let g=0; g<kolumna;g++)
					cell[g]=row.insertCell(0);

			if(j%2==0)
				{

				for (let i=0; i<kolumna;i++) 
				    cell[i].innerHTML = a;
				
				} 
				else 
				{
				  
				for (let i=0; i<kolumna;i++) 
				    cell[i].innerHTML = b;

				}
				}
		})
	})
		



	
	
	
	



	

		
		

		
		
		

	
	

	
