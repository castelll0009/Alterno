<?php

    include('database.php');
        
    if(isset($_POST['id_producto']))
        $id_producto = $_POST['id_producto'];        
        $precio = $_POST['precio'];

        //creamos una cantidad random, descripcion random,         
        $cantidad = rand(1,10);        

        //Random Date Generator
        //$year = rand(2020,x);
        /*$month = rand(1,12);
        $day = rand(1,31);
        $months_30 = array(4,6,9,11);
        if(in_array($month, $months_30) && $day == 31){
            $day = 30;
        } elseif($month == 2 && $day > 28){
            $day = 28;
        }
        //$date = $year . "-" . $month . "-" . $day;
        $date = "2021-" . sprintf('%02d', $month) . "-" . sprintf('%02d', $day);*/
        $date = date("Y-m-d");

        //precio total , lo calculamos usando la llave forane Id_prodcucto_venta 
        $precio_total = $cantidad * $precio;

        $query = "INSERT into tbl_venta(id_producto_venta, cantidad, fecha_de_venta, precio_total) VALUES ('$id_producto','$cantidad', '$date', '$precio_total')";
        //echo $query;
        
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Add Query Failed');
        }

        echo 'Random Sale Added Successfully';    

?>