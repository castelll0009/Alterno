<?php 

    include('database.php');

        //elejimos  un producto de  forma  ramdom
        $query =  "SELECT * FROM tbl_producto ORDER BY RAND() LIMIT 1";
        //$query = "SELECT * FROM tbl_producto WHERE id = $id";
        $result = mysqli_query($connection, $query);
        
        if(!$result){
            die('Single Query Failed');
        }

        $json = array();
        while($row = mysqli_fetch_array($result)) {
            $json[] = array(
                'nombre' => $row['nombre'],
                'precio' => $row['precio'],
                'descripcion' => $row['descripcion'],      
                'propiedades' => $row['propiedades'],            
                'usos' => $row['usos'],      
                'recetas' => $row['recetas'],  
                'id' => $row['id']
                );
        }
        $jsonstring = json_encode($json[0]);
        echo  $jsonstring;
        
    

?>