<?php

    include('database.php');

    //$query = "SELECT  tbl_producto.id, tbl_producto.nombre FROM tbl_producto GROUP BY tbl_producto.id LIMIT 5";
    $query = "SELECT tbl_producto.nombre AS nombre, SUM(tbl_venta.cantidad) AS cantidad_total FROM tbl_venta
    INNER JOIN tbl_producto ON tbl_venta.id_producto_venta = tbl_producto.id GROUP BY tbl_venta.id_producto_venta";

    $result = mysqli_query($connection, $query);
    //echo $result;

    if(!$result){
        die('Single Query Failed');
    }

    $json = array();
    while($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'nombre' => $row['nombre'],
        'cantidad_total' => $row['cantidad_total']
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;

?>