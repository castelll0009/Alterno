<?php

include('database.php');

$search = $_POST['search'];
if(!empty($search)) {
  $query = "SELECT p.id AS p_id, p.nombre AS p_nombre, p.precio AS p_precio, v.id AS v_id, v.cantidad AS v_cantidad, v.fecha_de_venta AS v_fecha, v.precio_total AS v_total FROM tbl_venta v, tbl_producto p WHERE p.id = v.id_producto_venta AND p.nombre  LIKE '$search%'";
  $result = mysqli_query($connection, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($connection));
  }
  
  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'id_p' => $row['p_id'],
      'nombre' => $row['p_nombre'],
      'precio' => $row['p_precio'],
      'id' => $row['v_id'],
      'cantidad' => $row['v_cantidad'],
      'fecha' => $row['v_fecha'],
      'precio_total' => $row['v_total']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}

?>
