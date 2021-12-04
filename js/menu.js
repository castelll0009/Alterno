var sound = document.getElementById("buzz");
var btn = document.getElementById("zumbido");	
var beepc = document.querySelector("#beepc");
var btn_detalles = document.querySelector("#btn-detalles");

document.getElementById("zumbido").addEventListener("click", function(){  
	sound.play();	
});

var anchoVentana = window.innerWidth;
var zoom = false;
	
function vistaEscritorio(){			   
	if(zoom == false){
		if(anchoVentana > 700){
			document.body.style = "zoom: 70%";	
		}else{
			document.body.style = "zoom: 50%";	
		}		
		btn_detalles.style ="font-size: 4em; bottom: 95px;";		
		beepc.style ="font-size: 4em";		
		zoom = true;
	}else{
		document.body.style = "zoom: 100%";		
		btn_detalles.style ="font-size: 2em";
		beepc.style ="font-size: 2em";		
		zoom = false;
	}		
}

/*///////////JQUERY///////////////////////////////////////*/
/*///////////JQUERY///////////////////////////////////////*/
	
$(document).ready(function() {		
	
	$(document).ready(() => {
		$(".sona0").click(function(){
			var elem = $(".puntos0", this).text();

			if (elem == "...Leer Más") {
				//depliega
				$(".text0", this).slideDown();
				$(".puntos0" ,this).text("");													
																							
			  } else {
				//pliega
				$(".puntos0", this).text("...Leer Más");		
				$(".text0", this).slideUp();													
			  }	
			  	
		});
	});
///////////////////////////////////////////////////////////////////

});

