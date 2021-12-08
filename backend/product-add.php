<?php
    include('database.php');

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $price = $_POST['price'];
        $description = $_POST['description'];
        $properties = $_POST['properties'];
        $uses = $_POST['uses'];
        $recipes = $_POST['recipes'];

        $query = "INSERT into tbl_producto(nombre, descripcion, precio, propiedades, usos, recetas) VALUES ('$name','$description','$price','$properties','$uses','$recipes')";
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Product Added Successfully';
    }

?>