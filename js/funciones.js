//funcion  que crea  ventas de  forma ALeatoria segun un rango
var lim_ventas = 5;
generarVentas();


function generarVentas(){ 
    let cont_ventas = 0;
    //let crearVentas = true;        
    //-Registrar datos de forma automática y aleatoria para una venta simulada
    //(precio(tbl_producto),fecha de venta,cantidad y total)
    setInterval(function(){ 
        //debe ir la funcion apra generar las ventas
        //elegimos un producto de los que tengamos enla base de datos   
        //alert("Hello");    

        if(cont_ventas <  lim_ventas){
            $.post('backend/product-rand.php', function(response) {
                const product = JSON.parse(response);
                console.log(product.nombre);
                //para crear la venta necesitamos el nombre y el precio del producto
                //CREAR LA VENTA
                const postData = {
                    id_producto: product.id,
                    precio: product.precio,                                          
                };    
                $.post('backend/ventas-rand-add.php', postData, (response) => {                
                    console.log(response);
                });
                /*                
                console.log("producto" + product);                
                $('#name').val(product.nombre);
                $('#price').val(product.precio);
                $('#description').val(product.descripcion);
                $('#productId').val(product.id);
                */
            });
            cont_ventas++;
        }else{
            return;
        }                     
    }, 1000);                    
}

