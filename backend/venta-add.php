<?php
    include('database.php');

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $amount = $_POST['amount'];
        $date = $_POST['date'];
        $total = $_POST['total'];

        $query_id = "SELECT id FROM tbl_producto WHERE nombre = '$name'";
        $id_producto = mysqli_query($connection, $query_id);
        //Convertir id_producto a un valor, ya que vuelve con formato

        $query = "INSERT into tbl_venta(id_producto_venta, cantidad, fecha_de_venta, precio_total) VALUES ('$id_producto','$amount', '$date', '$total')";
        echo $query;
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Product Added Successfully';
    }

?>