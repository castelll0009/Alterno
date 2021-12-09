//consulta primeros  5  , insertarlos
var xValues = ["producto1", "Producto2", "Producto3", "Producto4", "Producto5"];
//reemplazar por los  valores cantidad de ventas
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
      text: "Ventas de productos  en el mes actual, en timepo real."
    }
  }
});