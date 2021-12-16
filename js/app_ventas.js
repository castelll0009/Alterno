$(document).ready(function() {
  // Global Settings
  var bandera_enlistar = 0;
  let d_query = false;

  // Testing Jquery
  console.log('jquery is working!');
  if(bandera_enlistar < 1){
    fetchVentas();
  }
  fetchProducts();
  getCurrentDate();

  // Search by Key Type (Event)
  $('#search').keyup(function() {
    bandera_enlistar++;
    console.log(bandera_enlistar);
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
                        <!--<a class="btn btn-secondary">
                          <i class="fas fa-cog"></i>
                        </a>-->
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
      bandera_enlistar = 0;
    }
  });

  // Type of Query Change 
  $(document).on('click', '#query-by-date', function() {
    if (d_query == false){
      d_query = true;
      template_q = `
              <input name="search" id="search" class="form-control mr-sm-2" type="date" aria-label="Search">
              <button id="plus-d-query" type="button" class="btn btn-secondary fas fa-plus-square"></button>
              <button id="query-by-date" type="button" class="btn btn-primary fas fa-pencil-alt"></button>
              `
      $('#type-query').html(template_q)
      console.log("date query ready");
    } else {
      d_query = false;
      template_q = `
              <input name="search" id="search" class="form-control mr-sm-2" type="search" placeholder="Nombre del producto" aria-label="Search">
              <button id="query-by-date" type="button" class="btn btn-primary fas fa-calendar"></button>
              `
      $('#type-query').html(template_q)
      console.log("query ready");
    }
  });
  // Plus Range Date Query
  $(document).on('click', '#plus-d-query', function() {
    template_q = `
            <div style="padding-top:37px; padding-right:5px;">
              <a style="color: #fff">Rango {</a>
            </div>
            <div class="card">
              <input name="search" id="search" class="form-control" type="date" aria-label="Search">
              <input name="search" id="search2" class="form-control" type="date" aria-label="Search">
            </div>
            <button id="query-by-date" type="button" class="btn btn-primary fas fa-pencil-alt"></button>
            `
    $('#type-query').html(template_q)
    console.log("date query ready");
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

  // Search by Date
  $('#busqueda').submit(e => {
    bandera_enlistar++;
    e.preventDefault();
    if(d_query == true) {
      var data_query = {};
      if($('#search2').val()){
        data_query = {
          s1: $('#search').val(),
          s2: $('#search2').val(),
        };
      } else {
        data_query = {
          s1: $('#search').val(),
        };
      }
      console.log(data_query);
      $.ajax({
        url: 'backend/venta-d-search.php',        
        type: 'POST',
        data: data_query,
        success: function(response) {
          console.log(response);
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
                        <!--<a class="btn btn-secondary">
                          <i class="fas fa-cog"></i>
                        </a>-->
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
    } else {
      let search = $('#search').val();
      console.log(search); 
      bandera_enlistar = 0;
    }
  });

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
                      <!--<a class="btn btn-secondary">
                        <i class="fas fa-cog"></i>
                      </a>-->
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
    if(bandera_enlistar < 1){
      console.log(bandera_enlistar);
      fetchVentas();
    }
  }, 3000);

  // Refresh Button
  $(document).on('click', '#refresh', function() {
    fetchVentas();
    bandera_enlistar = 0;
  });
  
  // Add New Sale
  $('#sale-form').submit(e => {
    e.preventDefault();
    const postData = {
      name: $('#name').val(),
      amount: $('#amount').val(),
      date: $('#date').val(),
      total: $('#total').val()
    };
    //console.log(postData);
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