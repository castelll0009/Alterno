$(document).ready(function() {
  // Global Settings
  let edit = false;

  // Testing Jquery
  console.log('jquery is working!');
  fetchProducts();
  $('#product-result').hide();

  // search key type event
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
                      <td>${product.receta}</td>                   
                      <td>${product.propiedades}</td>                   
                      <td>${product.usos}</td>
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
                    <td>${product.receta}</td>                   
                    <td>${product.propiedades}</td>                   
                    <td>${product.usos}</td>
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
  
  $('#product-form').submit(e => {
    e.preventDefault();
    const postData = {
      name: $('#name').val(),
      price: $('#price').val(),
      description: $('#description').val(),
      id: $('#productId').val()
    };
    console.log(postData.id);
    const url = edit === false ? 'backend/product-add.php' : 'backend/product-edit.php';
    //url = 'backend/product-add.php';
    console.log(postData, url);
    $.post(url, postData, (response) => {
      console.log(response);
      $('#product-form').trigger('reset');
      fetchProducts();
    });
  });

  // Delete a Single Product
  $(document).on('click', '.product-delete', function() {
    if(confirm('Are you sure you want to delete it?')) {
      let element = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('productId');
      $.post('backend/product-delete.php', {id}, function(response) {
        //console.log(response);
        fetchProducts();
      });
    }
  });

  // Editar los Productos mostrados en Formulario
  $(document).on('click', '.product-item', function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr("productId");
      //console.log(id);
      //primero obtenemos los datos del elemtno clickeado
      $.post('backend/product-single.php', {id}, function(response){
        edit = true;
        //console.log(response);
        const product = JSON.parse(response);
        //console.log(product);
        $('#name').val(product.nombre);
        $('#price').val(product.precio);
        $('#description').val(product.descripcion);
        $('#productId').val(product.id);
     })
  });

  /*
  // Get a Single Product by Id 
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