<?php
include('database.php');

if(isset($_POST['id'])){
    $id = $_POST['id']; 
    $query = "SELECT  tbl_producto.id, tbl_producto.nombre
    FROM tbl_producto
    GROUP BY tbl_producto.id
    LIMIT 5";

    $result = mysqli_query($connection, $query);

    if(!$result){
        die('Single Query Failed');
    }

    echo  'estaqmos aqui';
  
     
}

?>