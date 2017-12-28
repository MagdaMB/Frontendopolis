document.addEventListener("DOMContentLoaded", function (){	
	const length = document.getElementById("length");
	let tablica = document.getElementById("tablica");
	let array = [];

		length.addEventListener('change', function() {
			
			array = [];

				for (var i=0; i<length.value; i++)
				{
					array[i] = Math.floor(Math.random() * 100);
				}	
				tablica.innerHTML = array;
		});

	const num = document.getElementById("num");
	const btn = document.getElementById("btn");
	let wynik = document.getElementById("wynik");

		btn.addEventListener('click', function() {
			let licz = 0;
			
			for(var i=0; i<array.length; i++) {
				
				if(array[i] % num.value == 0) {
					licz++;
				} 
			}
		if(licz==0) {
			wynik.innerHTML = `W wylosowanej tablicy niewystępują wartosci podzielne przez ${num.value}.`
		} else if (licz==1) {
			wynik.innerHTML = `W wylosowanej tablicy występuje ${licz} wartość podzielna przez ${num.value}.`
		} else {
			wynik.innerHTML = `W wylosowanej tablicy występują ${licz} wartosci podzielne przez ${num.value}.`
		}
		
			
		})
	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
