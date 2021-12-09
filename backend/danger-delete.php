<?php

    include('database.php');

    $query = "TRUNCATE TABLE tbl_ventas";
    //$query = "DELETE FROM tbl_ventas";
    $result = mysqli_query($connection, $query);
    
    if(!$result){
        die('Delete Query Failed');
    }

    echo 'ALL Sales Deleted Successfully';

?>