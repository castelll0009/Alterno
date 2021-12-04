var swiper = new Swiper(".mySwiper", { 

        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },        
      });

      
var tarjet_about = document.querySelectorAll(".about");
var tarjet_contenido = document.querySelectorAll(".contenido");
var tarjet_orden  = document.querySelectorAll(".orden");
var tarjet_orden_h4 = document.querySelectorAll(".h4-orden");

/*ABOUT*/
tarjet_about.forEach( (about) => {  
  about.addEventListener("click", function(){           
    about.classList.toggle("desplegar-tarjeta-info");  
    /*about_p.style ="opacity : 1; display : block;";  */
    about.querySelector("p").style ="opacity : 1; display : block;";   // esta linea vale oro
  });
});
/*CONTENIDO*/
tarjet_contenido.forEach( (contenido) => {  
  contenido.addEventListener("click", function(){           
    contenido.classList.toggle("desplegar-tarjeta-info");  
    /*about_p.style ="opacity : 1; display : block;";  */
    contenido.querySelector("p").style ="opacity : 1; display : block;";   // esta linea vale oro    
  });
});
/*ORDEN*/
tarjet_orden.forEach( (orden) => {  
  orden.addEventListener("click", function(){           
    orden.classList.toggle("desplegar-tarjeta-orden");    
  });
});


var div_figures = document.querySelectorAll(".div-figure");
var contenedor_swiper_tarjetas = document.querySelectorAll(".contenedor-swiper-tarjetas");
//listener DELEGACION de envetyos

var entrar_detalles = document.querySelectorAll(".entrar-detalles");

entrar_detalles.forEach( (detalle,index) => {  
  detalle.addEventListener("mouseup", function(){                        
     if(index == 0 || index== 1 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[0].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[0].classList.toggle("aparecer-contenedor")    
   
      }
      if(index == 2 || index== 3 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[1].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[1].classList.toggle("aparecer-contenedor") ;                
      }
      if(index == 4 || index== 5 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[2].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[2].classList.toggle("aparecer-contenedor")  ;          
      }
      if(index == 6 || index== 7 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[3].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[3].classList.toggle("aparecer-contenedor")            
      }
      if(index == 8 || index== 9 )//En este caso alertaremos el texto del cliqueado          
      {                        
            div_figures[4].classList.toggle("desaparecer-contenedor");
            contenedor_swiper_tarjetas[4].classList.toggle("aparecer-contenedor")            
      }


  });
});


//desplegar todas los menus 

function desplegarItems(){     
  div_figures.forEach( (figures) => {         
      figures.classList.toggle("desaparecer-contenedor");                          
  });
      
  contenedor_swiper_tarjetas.forEach( (tarjeta) => {                    
      tarjeta.classList.toggle("aparecer-contenedor");           
  });
}

/* Seleccionar variantes de producto detener propagacion*/
var variantes_productos = document.querySelectorAll(".variantes-producto");
variantes_productos.forEach( (variante, index) => {  
  variante.addEventListener("click", function(){  
    event.stopPropagation();  
  });
});
/* Seleccionar descripciones  de productos detener propagacion*/
var descripcion_productos = document.querySelectorAll(".descripcion-productos");
descripcion_productos.forEach( (descripcion, index) => {  
  descripcion.addEventListener("click", function(){  
    event.stopPropagation(); 
  });
});
/* Seleccionar boton disminuir  de productos detener propagacion*/
var arreglo_cantidad = [1,1,1,1,1];//se inicializa una variables en 1
var disminuir_productos = document.querySelectorAll(".disminuir-productos");
disminuir_productos.forEach( (disminuir, index) => {  
  disminuir.addEventListener("click", function(){  
    event.stopPropagation(); 
    if(arreglo_cantidad[index] > 1){
      arreglo_cantidad[index] = cantidad_productos[index].value = --arreglo_cantidad[index]; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    }    
  });
});
/* Seleccionar boton aumentar  de productos detener propagacion*/
var aumentar_productos = document.querySelectorAll(".aumentar-productos");
aumentar_productos.forEach( (aumentar, index) => {  
  aumentar.addEventListener("click", function(){  
    event.stopPropagation(); 
    arreglo_cantidad[index] = cantidad_productos[index].value = ++arreglo_cantidad[index]; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
  });
});
/* Seleccionar input cantidad  de productos detener propagacion*/
var cantidad_productos = document.querySelectorAll(".cantidad-producto");
cantidad_productos.forEach( (cantidad, index) => {  
  cantidad.addEventListener("click", function(){  
    event.stopPropagation(); 
  });
});
/*cantidad de unidades  orden aumentar disminuir*/
/*
var inicio = 1; //se inicializa una variable en 0
var cantidad; 
function aumentar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
  event.stopPropagation();
   cantidad = cantidad_productos.value = ++inicio; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
  event.stopPropagation();
  if(inicio > 1){
    cantidad = document.getElementsByClassName("cantidad").value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
  }
    
}
*/
/* comprar para los diferentes producotos*/
var botones_comprar = document.querySelectorAll(".btn-comprar");
var titulos_productos = document.querySelectorAll(".titulo-producto");
var precios_productos = document.querySelectorAll(".precios-productos");
var titulo_producto_vender;
var variante_selecionada_producto_vender;
var precio_producto_vender;
var descripcion_producto_vender;
var TOTAL_PAGAR_producto_vender;
//variables para crear URL y enviar pedido a Whatsapp
/*var numero_telefono = 573202486769;*/
var numero_telefono = 573224338473;
var URL_orden = window.location;
var cadenaURL = "";
botones_comprar.forEach( (boton, index) => {  
  boton.addEventListener("click", function(){  
      //enviamos el pedido a whatsap
  
  if(confirm("¿Esta seguro de realizar esta compra?") ){
    //el usuario acepto hacer la compra, recuperamos los datos de su pedido
    alert("Su pedido sera enviado al Whatsapp del vendedor");
    if(index == 0){      
      titulo_producto_vender = titulos_productos[0].innerHTML.toUpperCase();     
      variante_selecionada_producto_vender = variantes_productos[index].options[variantes_productos[index].selectedIndex].text;          
      precio_producto_vender = variantes_productos[0].options[variantes_productos[0].selectedIndex].value;           
      descripcion_producto_vender = descripcion_productos[0].value;      
      cantidad_producto_vender = arreglo_cantidad[index];
      TOTAL_PAGAR_producto_vender = (arreglo_cantidad[index] * precio_producto_vender );    
    }
    if(index == 1){   
      titulo_producto_vender = titulos_productos[1].innerHTML.toUpperCase();     
      variante_selecionada_producto_vender = variantes_productos[index].options[variantes_productos[index].selectedIndex].text;            
      precio_producto_vender = variantes_productos[1].options[variantes_productos[1].selectedIndex].value;    
      descripcion_producto_vender = descripcion_productos[1].value;      
      cantidad_producto_vender = arreglo_cantidad[index];
      TOTAL_PAGAR_producto_vender = (arreglo_cantidad[index] * precio_producto_vender );              
    }
    if(index == 2){
      titulo_producto_vender = titulos_productos[2].innerHTML.toUpperCase();      
      variante_selecionada_producto_vender = variantes_productos[index].options[variantes_productos[index].selectedIndex].text;           
      precio_producto_vender = variantes_productos[2].options[variantes_productos[2].selectedIndex].value;   
      descripcion_producto_vender = descripcion_productos[2].value;       
      cantidad_producto_vender = arreglo_cantidad[index];
      TOTAL_PAGAR_producto_vender = (arreglo_cantidad[index] * precio_producto_vender );            
    }
    if(index == 3){
      titulo_producto_vender = titulos_productos[3].innerHTML.toUpperCase();     
      variante_selecionada_producto_vender = variantes_productos[index].options[variantes_productos[index].selectedIndex].text;            
      precio_producto_vender = variantes_productos[3].options[variantes_productos[3].selectedIndex].value;    
      descripcion_producto_vender = descripcion_productos[3].value;        
      cantidad_producto_vender = arreglo_cantidad[index];
      TOTAL_PAGAR_producto_vender = (arreglo_cantidad[index] * precio_producto_vender );           
    }
    if(index == 4){
      titulo_producto_vender = titulos_productos[4].innerHTML.toUpperCase();       
      variante_selecionada_producto_vender = variantes_productos[index].options[variantes_productos[index].selectedIndex].text;          
      precio_producto_vender = variantes_productos[4].options[variantes_productos[4].selectedIndex].value;  
      descripcion_producto_vender = descripcion_productos[4].value;          
      cantidad_producto_vender = arreglo_cantidad[index];
      TOTAL_PAGAR_producto_vender = (arreglo_cantidad[index] * precio_producto_vender );         
    }
    ///se crea el enlace y se envia al numero designado 
    /*
    alert(titulo_producto_vender);
    alert(variante_selecionada_producto_vender);
    alert(precio_producto_vender);
    alert(descripcion_producto_vender);
    alert(cantidad_producto_vender);
    alert(TOTAL_PAGAR_producto_vender);
    */
    /*ANCHETAS:dulce y licor PRECIO:$60000 DESCRIPCION:quiero que diga te amo ma CANTIDAD:2 TOTAL A PAGAR:$120000    ->>Pendiente de envio comprobante de pago<<- */
    cadenaURL = "https://wa.me/"+numero_telefono+"?text=💝💝💝🦄🦄🦄%0AUNI-STORE (PEDIDO ONLINE)%0A🦄🦄🦄💝💝💝%0A%0A"+titulo_producto_vender+": "+variante_selecionada_producto_vender+"%0APRECIO:$ "+precio_producto_vender+"%0ADESCRIPCIÓN:"+
    descripcion_producto_vender+"%0ACANTIDAD: "+cantidad_producto_vender+"%0ATOTAL%20A%20PAGAR>> $ "+TOTAL_PAGAR_producto_vender+"%0A%0A->>Pendiente de envio comprobante de pago<<-";
    URL_orden =  window.location= cadenaURL;    
  }else{
    //el usuario no quiere hacer aun  la compra
  }    

  });
});
