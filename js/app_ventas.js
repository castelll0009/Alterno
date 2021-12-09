$(document).ready(function() {
  // Global Settings
  let edit = false;

  // Testing Jquery
  console.log('jquery is working!');
  fetchVentas();
  fetchProducts();
  getCurrentDate();

  // Search by Key Type (Event)
  $('#search').keyup(function() {
    if($('#search').val()) {
      let search = $('#search').val();
      $.ajax({
        url: 'backend/venta-search.php',        
        type: 'POST',
        data: {search},
        success: function(response) {
          const products = JSON.parse(response);
          let template = '';
          products.forEach(product => {
            template +=  `
                    <tr productId="${product.id}">
                      <td>${product.id}</td>
                      <td>
                      <a href="#" class="product-item">
                        ${product.nombre} 
                      </a>
                      </td>
                      <td>${product.precio}</td>
                      <td>${product.cantidad}</td>
                      <td>${product.fecha}</td>
                      <td>${product.precio_total}</td>
                      <td>
                        <a class="btn btn-secondary">
                          <i class="fas fa-cog"></i>
                        </a>
                        <a class="btn btn-danger" style="color:#fff;">
                          <i class="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  `
          });
          $('#sales').html(template);
        }
      })
    } 
    else {
      fetchVentas();
    }
  });

  // Fetching Products
  function fetchProducts() {
    $.ajax({
      url: 'backend/products-list.php',
      type: 'GET',
      success: function(response) {
        const products = JSON.parse(response);
        let template = '<option selected disabled hidden>Producto</option>';
        //console.log(products);
        products.forEach(product => {
          template += `
                  <option value="${product.nombre}">${product.nombre}</option>
                `
        });
        $('#name').html(template);
      }
    });
  }

  // Get Current Date
  function getCurrentDate() {
    let date = new Date().toISOString().slice(0, 10);
    $('#date').val(date);
  }

  // Get Precio
  $('#name').change(function() {
    if($('#name').val()) {
      let search = $('#name').val();
      //console.log(search);
      $.ajax({
        url: 'backend/product-search.php',
        type: 'POST',
        data: {search},
        success: function(response) {
          const product = JSON.parse(response);
          //console.log(product);
          $('#price').val(product[0].precio);
        }
      });
    }
  });

  // Get Total
  $('#amount').change(function() {
    if($('#price').val()) {
      let price = $('#price').val();
      let amount = $('#amount').val();
      let total = price * amount;
      $('#total').val(total);
    }
  });

  // Fetching Ventas
  function fetchVentas() {
    $.ajax({
      url: 'backend/ventas-list.php',
      type: 'GET',
      success: function(response) {
        const products = JSON.parse(response);
        let template = '';
        console.log(products);
        products.forEach(product => {
          template += `
                  <tr productId="${product.id}">
                    <td>${product.id}</td>
                    <td>
                    <a href="#" class="product-item">
                      ${product.nombre} 
                    </a>
                    </td>
                    <td>${product.precio}</td>
                    <td>${product.cantidad}</td>
                    <td>${product.fecha}</td>
                    <td>${product.precio_total}</td>
                    <td>
                      <a class="btn btn-secondary">
                        <i class="fas fa-cog"></i>
                      </a>
                      <a class="btn btn-danger" style="color:#fff;">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                `
        });
        $('#sales').html(template);
      }
    });
  }
  
  /*
  // Send Products (New or Edited)
  $('#product-form').submit(e => {
    e.preventDefault();
    const postData = {
      id: $('#productId').val(),
      name: $('#name').val(),
      price: $('#price').val(),
      description: $('#description').val(),
      properties: $('#properties').val(),
      uses: $('#uses').val(),
      recipes: $('#recipes').val()
    };
    console.log(postData.id);
    const url = edit === false ? 'backend/-add.php' : 'backend/-edit.php';
    console.log(postData, url);
    $.post(url, postData, (response) => {
      edit=false;
      console.log(response);
      $('#product-form').trigger('reset');
      document.getElementById('name-action').innerHTML = 'New Product';
      fetchVentas();
      fetchProducts();
      getCurrentDate();
    });
  });*/

  /*
  // Delete a Single Product
  $(document).on('click', '.product-delete', function() {
    if(confirm('Are you sure you want to delete it?')) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('productId');
      $.post('backend/product-delete.php', {id}, function(response) {
        //console.log(response);
        fetchVentas();
      });
    }
  });

  // Show a Product Listed Selected in Formulary
  $(document).on('click', '.product-item', function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr("productId");
      //console.log(id);
      $.post('backend/product-single.php', {id}, function(response){
        edit = true;
        //console.log(response);
        const product = JSON.parse(response);
        //console.log(product);
        $('#productId').val(product.id);
        $('#name').val(product.nombre);
        $('#price').val(product.precio);
        $('#description').val(product.descripcion);
        $('#recipes').val(product.recetas);
        $('#properties').val(product.propiedades);
        $('#uses').val(product.usos);
        //title action
        document.getElementById('name-action').innerHTML = 'Edit Product';
     })
  });

  /*
  // Get a Single Product by Id - The same above ^^^^
  $(document).on('click', '.product-item', function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('productId');
    $.post('backend/product-single.php', {id}, function(response) {
      const product = JSON.parse(response);
      $('#name').val(product.nombre);
      $('#price').val(product.precio);
      $('#description').val(product.descripcion);
      edit = true;
    });
  });
  */

});