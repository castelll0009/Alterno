<?php

    include('database.php');

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $price = $_POST['price'];
        $description = $_POST['description'];
        $query = "INSERT into tbl_producto(nombre, descripcion, precio) VALUES ('$name','$description',$price)";
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }
        echo 'Product Added Successfully';
    }

?>