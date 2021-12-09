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
                    <tr saleId="${product.id}">
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
                        <a class="sale-delete btn btn-danger" style="color:#fff;">
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

  // Get Price
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

  // Fetching Sales
  function fetchVentas() {
    $.ajax({
      url: 'backend/ventas-list.php',
      type: 'GET',
      success: function(response) {
        const products = JSON.parse(response);
        let template = '';
        //console.log(products);
        products.forEach(product => {
          template += `
                  <tr saleId="${product.id}">
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
                      <a class="sale-delete btn btn-danger" style="color:#fff;">
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

  setInterval(function() {
    fetchVentas();
  }, 1000);
  
  // Add New Sale
  $('#sale-form').submit(e => {
    e.preventDefault();
    const postData = {
      name: $('#name').val(),
      amount: $('#amount').val(),
      date: $('#date').val(),
      total: $('#total').val()
    };
    console.log(postData);
    const url = 'backend/venta-add.php';
    //console.log(postData, url);
    $.post(url, postData, (response) => {
      edit=false;
      console.log(response);
      $('#sale-form').trigger('reset');
      fetchVentas();
      fetchProducts();
      getCurrentDate();
    });
  });

  // Delete a Single Sale
  $(document).on('click', '.sale-delete', function() {
    if(confirm('¿Seguro que quieres eliminar este registro?')) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('saleId');
      $.post('backend/venta-delete.php', {id}, function(response) {
        //console.log(response);
        fetchVentas();
      });
    }
  });

});