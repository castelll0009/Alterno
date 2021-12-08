//funcion  que crea  ventas de  forma ALeatoria segun un rango
generarVentas();

function generarVentas(){
    //let crearVentas = true;
    let contador = 0;
    if(contador < 5){
        //-Registrar datos de forma automática y aleatoria para una venta simulada
        //(precio(tbl_producto),fecha de venta,cantidad y total)
        setInterval(function(){ 
            //debe ir la funcion apra generar las ventas
            //elegimos un producto de los que tengamos enla base de datos   
            //alert("Hello"); 
            console.log(contador);
        }, 5000);       
        contador++;
    }  
}

