<?php
    include('database.php');

    if(isset($_POST['id'])){
        $id =  $_POST['id'];
        $name = $_POST['name'];
        $price = $_POST['price'];
        $description = $_POST['description'];

        $query = "UPDATE tbl_producto SET nombre = '$name', descripcion = '$description', precio = '$price' WHERE id = '$id'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Edit Query Failed');
        }
    }

    echo "Update Task Successfully";
?>