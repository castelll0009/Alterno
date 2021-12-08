<?php
    include('database.php');

    if(isset($_POST['id'])){
        $id =  $_POST['id'];
        $name = $_POST['name'];
        $price = $_POST['price'];
        $description = $_POST['description'];
        $properties = $_POST['properties'];
        $uses = $_POST['uses'];
        $recipes = $_POST['recipes'];        

        $query = "UPDATE tbl_producto SET nombre = '$name', descripcion = '$description', precio = '$price',  propiedades = '$properties', usos = '$uses', recetas = '$recipes' WHERE id = '$id'";

        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Edit Query Failed');
        }
    }

    echo "Update Product Successfully";
?>