document.addEventListener("DOMContentLoaded", function() {	

	const list = document.querySelector("ol");
	const x = document.querySelectorAll("li");
	let click = 'false';

	list.addEventListener('click', function() {

		if (click === 'false') 
			{
    		var par = Number(event.target.dataset.par);
	    	
	    	if (par==0){
	      		
	    	
	      		x[par].style.color = 'green';

	      		x[par+1].style.color = 'blue';
	      	} else if (par !== 0 || par !== 9) 
	      	{
	      		x[par-1].style.color = 'orange';
	      		x[par].style.color = 'green';

	      		x[par+1].style.color = 'blue';
	      	} else if (par == 9)
	      	{
				x[par-1].style.color = 'orange';
	    	
	      		x[par].style.color = 'green';
	      	};

		   
		    if(par % 2 == 0){
		      x[par].style.backgroundColor = '#f2f2f2';
	    	} 
	    	else 
	    	{
      		x[par].style.backgroundColor = '#4d4d4d'; 
    		}

    		click = 'true';
  			} 

  			else 
  			{
			    for(let i = 0; i < x.length; i++){
			      x[i].style.color = 'black';
			      x[i].style.backgroundColor = 'grey';
			}

			click = 'false'
  }    
})
		
		
	})

	
	
		



	
	
	
	



	

		
		

		
		
		

	
	

	
