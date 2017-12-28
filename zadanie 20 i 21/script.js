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
			let pow = 0;
			let newArr = [];
			for(var i=0; i< array.length; i++) {
				
				if(array[i] == num.value) {
					pow++;
					newArr.push(i);
				} 
			 
			}


			if(pow==1){
				wynik.innerHTML = `Szukana wartość to: ${num.value}, która występuje ${pow} raz na pozycji: ${newArr}.`;
			} else if (pow ==  0) {
				wynik.innerHTML = `Szukana wartość to: ${num.value}, nie występuje ona w wylosowanej tablicy.`;
			} else {
				wynik.innerHTML = `Szukana wartość to: ${num.value}, która występuje ${pow} razy na pozycjach: ${newArr}.`;
			}
			

		})

	
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
