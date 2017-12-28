document.addEventListener("DOMContentLoaded", function (){
	var form = document.querySelector("form");
	var button = document.getElementById("btn");
	
		form.addEventListener('submit', function(e) {

			e.preventDefault();
			
			var point = document.getElementById("points").value;
			var ocena="";

				if (point >= 0 && point <= 40) {
					ocena="dst";
				} else if (point >= 41 && point <= 60) {
					ocena="dst+";
				} else if (point >= 61 && point <= 70) {
					ocena="db";
				} else if (point >= 71 && point <= 75) {
					ocena="db+";
				} else if (point >= 76) {
					ocena="bdb";
				} else {
					ocena="podaj poprawną wartość punktową";
				}

			document.getElementById("ocena").innerHTML = ocena;
			document.getElementById("points").value = '';
		});

	});








	
	
	
	



	

		
		

		
		
		

	
	

	
