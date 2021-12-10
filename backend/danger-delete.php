<?php

    include('database.php');

    $query = "DELETE FROM tbl_venta";
    //$query = "DELETE FROM tbl_ventas";
    $result = mysqli_query($connection, $query);
    
    if(!$result){
        die('Delete Query Failed');
    }

    echo 'ALL Sales Deleted Successfully';

?>