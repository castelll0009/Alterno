//funcion  que crea  ventas de  forma ALeatoria segun un rango
var lim_ventas = 5;
let cont_ventas = 0;
let crearVentas = false;        
//-Registrar datos de forma automática y aleatoria para una venta simulada
//(precio(tbl_producto),fecha de venta,cantidad y total)
$('#sales-rand-on').click(function() {
    console.log('click');
    if (crearVentas == false){
        crearVentas = true;
        document.getElementById('sales-rand-on').innerHTML = '¡Detener!';
        console.log('STARTED');
    } else {
        crearVentas = false;
        document.getElementById('sales-rand-on').innerHTML = 'Iniciar Registro de Ventas Automatico';
        console.log('STOPED');
    }
    console.log(crearVentas);
});

function createSales(){
    console.log('creando venta...');
    //debe ir la funcion apra generar las ventas
    //elegimos un producto de los que tengamos enla base de datos
    //alert("Hello");
    
    //if(cont_ventas <  lim_ventas){
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
        });
    /*    cont_ventas++;
    }else{
        return;
    }*/
}

setInterval(function(){
    if (crearVentas == true) {
        createSales();
    }
}, 6000);

$(document).on('click', '#danger-delete', function() {
    if(confirm('¿Seguro que quieres eliminar TODOS los registros?')) {
        if(confirm('¿No eres un robot cierto? :v')) {
                $.post('backend/danger-delete.php', function(response) {
                console.log(response);
            });
        }
    }
});