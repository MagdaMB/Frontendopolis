document.addEventListener("DOMContentLoaded", function() {	
	
	var btn = document.getElementById("btn");
	
		btn.addEventListener('click', function() {
			var wiersz = document.getElementById("wiersz").value;
			var kolumna = document.getElementById("kolumna").value;
			var table = document.getElementById("myTable");
			var a = document.getElementById("a").value;
			var b = document.getElementById("b").value;
			table.innerHTML = '';

			for(var j=0;j<wiersz;j++){
			if(j%2==0)
				{

				    var row = table.insertRow(0);
				       
				    var cell = new Array(kolumna);
				    for(var g=0; g<kolumna;g++)
				    cell[g]=row.insertCell(0);  

				for (var i=0; i<kolumna;i++) {
				    cell[i].innerHTML = a;
				}
				} else {
				var row = table.insertRow(0); 
				    
				    var cell = new Array(kolumna);
				    for(var g=0; g<kolumna;g++)
				    cell[g]=row.insertCell(0);
				     
				for (var i=0; i<kolumna;i++) {
				    cell[i].innerHTML = b;

				}
				}
				}
		})
	})
		
		
	

/*function myFunction() {

var wiersz = document.getElementById("wiersz").value;
var kolumna = document.getElementById("kolumna").value;
var table = document.getElementById("myTable");
table.innerHTML = '';
for(var j=0;j<wiersz;j++){
if(j%2==0)
{

    var row = table.insertRow(0);
       
    var cell = new Array(kolumna);
    for(var g=0; g<kolumna;g++)
    cell[g]=row.insertCell(0);  

for (var i=0; i<kolumna;i++) {
    cell[i].innerHTML = "NEW CEL";
}
} else {
var row = table.insertRow(0);
    
    
    var cell = new Array(kolumna);
    for(var g=0; g<kolumna;g++)
    cell[g]=row.insertCell(0);
     
    

for (var i=0; i<kolumna;i++) {
    cell[i].innerHTML = "NEW el";

}
}
}
}

*/



	
	
	
	



	

		
		

		
		
		

	
	

	
