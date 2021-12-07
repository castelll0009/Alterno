<?php

  include('database.php');

  $query = "SELECT * from tbl_producto";
  $result = mysqli_query($connection, $query);

  /* si no hay  encuentra resultados se cierra la conexion*/
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
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

  $jsonstring = json_encode($json);
  echo $jsonstring;
?>
