var contador = 0;
$("label").click(function(){  
   contador = contador + 1;   
   if(  contador <= 1)  {
    $("#main-movil").css("width", "100%");
    $("#main-movil").css("background", "white");    
    
   }else{
    $("#main-movil").css("width", "100px"); 
    $("#main-movil").css("background", "transparent");
    contador = 0;
   }
        
});