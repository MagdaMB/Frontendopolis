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
	var tabela = document.getElementById("tabela");

		btn1.addEventListener('click', function() {
			tabela.innerHTML = '';
			tabela.className += "table";

			for(var i=0; i<array.length; i++) {
			
				tabela.innerHTML += "<tr><td>" + array[i] + "</td></tr>" 
			}

		});

	var btn2 = document.getElementById("btn2");
		btn2.addEventListener('click', function() {
			tabela.innerHTML = '';
			var newArr=[];
			newArr = array.sort(function(a, b) {
				return a-b;
			});

				for(var j=0; j<newArr.length; j++) {
			
					tabela.innerHTML += "<tr><td>" + newArr[j] + "</td></tr>" 
				}

		});

	var btn3 = document.getElementById("btn3");
		btn3.addEventListener('click', function() {
			tabela.innerHTML = '';
			var malArr=[];
			malArr = array.sort(function(a, b) {
				return b-a;
			})
			for(var z=0; z<malArr.length; z++) {
			
				tabela.innerHTML += "<tr><td>" + malArr[z] + "</td></tr>" 
			}
		})
	
	var btn4 = document.getElementById("btn4");
		btn4.addEventListener('click', function() {
			tabela.innerHTML = '';
			var evenNum = [];

			for(var y=0; y<array.length; y++){
				if(array[y]%2 == 0) {
					evenNum.push(array[y]);
				} else {
					evenNum;
				}
			}

			for(var x=0; x<evenNum.length; x++) {
			
				tabela.innerHTML += "<tr><td>" + evenNum[x] + "</td></tr>" 
			}
		});

	var btn5 = document.getElementById("btn5");
		btn5.addEventListener('click', function() {
			tabela.innerHTML = '';
			var oddNum = [];

			for(var i=0; i<array.length; i++) {
				if(array[i]%2 != 0) {
					oddNum.push(array[i]);
				} else {
					oddNum;
				}
			}

			for(var x=0; x<oddNum.length; x++) {
			
				tabela.innerHTML += "<tr><td>" + oddNum[x] + "</td></tr>" 
			}

		});

	var btn6 = document.getElementById("btn6");
		btn6.addEventListener('click', function() {

			tabela.innerHTML='';
			for(var i=0; i<array.length; i++) {
			
				tabela.innerHTML += "<tr><td>" + array[i] + "</td></tr>" 
			}

		})

	
	var btn7 = document.getElementById("btn7");
	
		btn7.addEventListener('click', function() {

			tabela.innerHTML = '';
			
				for(var i=0; i<array.length; i=i+2) 
				{if(i==array.length-1)
					tabela.innerHTML += '<td>'+ array[i] +'</td>'
					else
				{
					var j=i+1;
					tabela.innerHTML += '<td>'+ array[i] + '<td>'+ array[j]+'</td>';
				}
				}

		})
});
		
		
			
	







	
	
	
	



	

		
		

		
		
		

	
	

	
