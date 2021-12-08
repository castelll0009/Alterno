<?php

    include('database.php');
        
        $id_producto = $_POST['id_producto'];        
        $precio = $_POST['precio'];
        //creamos una cantidad random, descripcion random,         
        $cantidad = rand(1,10);        
        //precio total , lo calculamos usando la llave forane Id_prodcucto_venta 
        $precio_total = $cantidad * $precio;

        $query = "INSERT into tbl_venta(id_producto_venta, cantidad,precio_total) VALUES ('$id_producto',$cantidad, $precio_total)";
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Product Added Successfully';    

?>