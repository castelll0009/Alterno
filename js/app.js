$(document).ready(function() {
  // Global Settings
  let edit = false;

  // Testing Jquery
  console.log('jquery is working!');
  fetchProducts();
  $('#product-result').hide();

  // Search by Key Type (Event)
  $('#search').keyup(function() {
    if($('#search').val()) {
      let search = $('#search').val();
      $.ajax({
        url: 'backend/product-search.php',        
        type: 'POST',
        data: {search}, //podemos enviar string , objetos
        /*success: function (response) {
          console.log(response);        
          if(!response.error) {
            let products = JSON.parse(response);
            let template = '';
            products.forEach(product => {
              template += `
                     <li><a href="#" class="product-item">${product.nombre}</a></li>
                    ` 
            });
            $('#product-result').show();
            $('#container').html(template);
          }
        }*/
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
                      <td>${product.descripcion}</td>
                      <td>${product.propiedades}</td>   
                      <td>${product.usos}</td>
                      <td>${product.receta}</td>
                      <td>
                        <a class="btn btn-secondary">
                          <i class="fas fa-cog"></i>
                        </a>
                        <a class="product-delete btn btn-danger" style="color:#fff;">
                          <i class="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  `
          });
          $('#products').html(template);
        }
      })
    } 
    else {
      fetchProducts();
    }
  });

  // Fetching Products
  function fetchProducts() {
    $.ajax({
      url: 'backend/products-list.php',
      type: 'GET',
      success: function(response) {
        const products = JSON.parse(response);
        let template = '';
        //console.log(products);
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
                    <td>${product.descripcion}</td>
                    <td>${product.propiedades}</td>
                    <td>${product.usos}</td>
                    <td>${product.receta}</td>
                    <td>
                      <a class="btn btn-secondary">
                        <i class="fas fa-cog"></i>
                      </a>
                      <a class="product-delete btn btn-danger" style="color:#fff;">
                        <i class="far fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                `
        });
        $('#products').html(template);
      }
    });
  }
  
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
    const url = edit === false ? 'backend/product-add.php' : 'backend/product-edit.php';
    console.log(postData, url);
    $.post(url, postData, (response) => {
      edit=false;
      console.log(response);
      $('#product-form').trigger('reset');
      document.getElementById('name-action').innerHTML = 'New Product';
      fetchProducts();
    });
  });

  // Delete a Single Product
  $(document).on('click', '.product-delete', function() {
    if(confirm('¿Seguro que quieres eliminar este producto?')) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('productId');
      $.post('backend/product-delete.php', {id}, function(response) {
        //console.log(response);
        fetchProducts();
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