


//reemplazar por los  valores cantidad de ventas
//consulta  cantidad de productos vendidos por id_producto
var myChart;  
var xValues = [];
var yValues =  [];
var barColors = ["red", "green","blue","orange","brown","pink","gray","purple"];

// Fetching Data Products
rotular_grafica();
function rotular_grafica(){
  $.ajax({
    url: 'backend/graficar.php',
    type: 'GET',
    success: function(response) {
      const products = JSON.parse(response);    
      products.forEach(product => {         
        xValues.push(product.nombre);           
        yValues.push(product.cantidad_total);           
      });
      //console.log(xValues);
      //console.log(yValues);
                     
      myChart = new Chart("myChart", {    
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          title: {
            display: true,
            text: "Ventas de productos  en el mes actual, en timepo real"
          }
        }                
      }); 
      
        xValues = [];
        yValues = [];           
                         
    }
  });  
} 

setInterval(
  function(){    
    rotular_grafica();
  }, 5000);

/*
// Fetching Data Products
function fetchProducts() {
  $.ajax({
    url: 'backend/graficar.php',
    type: 'GET',
    success: function(response) {
      const products = JSON.parse(response);
      //console.log(products);
      const len = Object.keys(products).length;
      var cont = 0;
      products.forEach(product => {
        xAuxValues[cont] = `${product.nombre}`;        
        console.log(xAuxValues[cont]);
        yAuxValues[cont] = `${product.cantidad_total}`;
        cont++;
      });
      //console.log(xValues);
      //console.log(yValues);
    }
  });
}
*/

/*
// Fetching Data Products
function fetchProducts() {
  $.ajax({
    url: 'backend/graficar.php',
    type: 'GET',
    success: function(response) {
      const products = JSON.parse(response);
      xValues = `[`;
      yValues = `[`;
      let cont = 1;
      console.log(products);
      products.forEach(product => {
        if(cont == 1){
          xValues += `"${product.nombre}"`;
          yValues += `"${product.cantidad_total}"`;
        } else {
          xValues += `, "${product.nombre}"`;
          yValues += `, "${product.cantidad_total}"`;
        }
        cont ++;
      });
      xValues += `]`;
      yValues += `]`;
      console.log(xValues);
      console.log(yValues);
    }
  });
}*/

