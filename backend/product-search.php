<?php

include('database.php');

$search = $_POST['search'];
if(!empty($search)) {
  $query = "SELECT * FROM tbl_producto WHERE nombre LIKE '$search%'";
  $result = mysqli_query($connection, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($connection));
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
}

?>
