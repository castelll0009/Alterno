<?php

include('database.php');

$search = $_POST['s1'];
//echo $search;
$search2;
if (isset($_POST['s2'])){
  $search2 = $_POST['s2'];
  //echo $search2;
}
if(!empty($search)) {
  $query;

  if(!empty($search2)) {
    $query = "SELECT p.id AS p_id, p.nombre AS p_nombre, p.precio AS p_precio, v.id AS v_id, v.cantidad AS v_cantidad, v.fecha_de_venta AS v_fecha, v.precio_total AS v_total FROM tbl_venta v, tbl_producto p WHERE p.id = v.id_producto_venta AND v.fecha_de_venta BETWEEN '$search%' AND '$search2%' ORDER BY v.fecha_de_venta DESC";  
  } else {
    $query = "SELECT p.id AS p_id, p.nombre AS p_nombre, p.precio AS p_precio, v.id AS v_id, v.cantidad AS v_cantidad, v.fecha_de_venta AS v_fecha, v.precio_total AS v_total FROM tbl_venta v, tbl_producto p WHERE p.id = v.id_producto_venta AND v.fecha_de_venta = '$search%' ORDER BY v.id DESC";
  }

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