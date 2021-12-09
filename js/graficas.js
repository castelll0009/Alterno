//consulta primeros  5  , insertarlos
    $.post('backend/graficar.php', function(response) {        
        const productos = JSON.parse(response);    
        console.log(productos);
        
    });

var xValues =  [ "pro1", "Producto2", "Producto3", "Producto4", "Producto5"];
//reemplazar por los  valores cantidad de ventas
//consulta  cantidad de productos vendidos por id_producto
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
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

// Fetching Products
function fetchProducts() {
  $.ajax({
    url: 'backend/products-list.php',
    type: 'GET',
    success: function(response) {
      const products = JSON.parse(response);
      xValues = '[';
      let cont = 1;
      console.log(products);
      products.forEach(product => {
        if(cont == 1){
          xValues += `"${product.nombre}"`
        } else {
          xValues += `, "${product.nombre}"`
        }
        cont ++;
      });
      xValues += `]`
      console.log(xValues);
    }
  });
}