
const xAuxValues = Array(6);
const yAuxValues = Array(6);

fetchProducts();
console.log(xAuxValues);
console.log(yAuxValues);
//reemplazar por los  valores cantidad de ventas
//consulta  cantidad de productos vendidos por id_producto
var xValues = ["", "pais2", "pais3" ];
var yValues =  [2, "3", "4" ];
var barColors = ["red", "green","blue","orange","brown"];

/*
console.log(barColors);
console.log(xValues);
console.log(yValues);*/



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
        console.log(`${product.nombre}`);
        yAuxValues[cont] = `${product.cantidad_total}`;
        cont++;
      });
      //console.log(xValues);
      //console.log(yValues);
    }
  });
}


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