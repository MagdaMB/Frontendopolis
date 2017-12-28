document.addEventListener("DOMContentLoaded", function() {	

	let btn = document.getElementById("btn");
	
		btn.addEventListener('click', function() {
	
			let kolumna = document.getElementById("kolumna").value;
			let table = document.getElementById("myTable");
			table.innerHTML = '';

				let num=[];
				let num1=[];
				let num2=[];

			for(let j=0;j<3;j++){
				let row = table.insertRow(0);
	
				let cell = new Array(kolumna);
				for(let g=0; g<kolumna;g++)
					{
						cell[g]=row.insertCell(-1);	
					
						if (j==0) 
						{	 
						num[g] = Math.round(Math.random() * 100);

							if (num[g] %2!=0) 
							{ 
								num1[g]=Math.floor(num[g]/2);
							} 
							else 
							{
								num1[g]=num[g]/2;
							}

							if(num1[g]%2!=0) 
							{
								num2[g]=num1[g]+1;
							} 
							else 
							{
								num2[g]=num1[g];
							}
						
						cell[g].innerHTML = num2[g];
						}
						
						if (j==1) cell[g].innerHTML = num1[g];
						if (j==2) cell[g].innerHTML = num[g];

					}
					}
				})
		})
	
		



	
	
	
	



	

		
		

		
		
		

	
	

	
