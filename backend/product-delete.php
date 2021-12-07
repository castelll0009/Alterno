<?php 

    include('database.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_producto WHERE id = $id";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Delete Query Failed');
        }

        echo 'Task Deleted Successfully';
    }

?>