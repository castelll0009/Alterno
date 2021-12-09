<?php

  include('database.php');

  //Puede ser ordenado (ORDER BY) por fecha o por id, por defecto se deja en id.
  $query = "SELECT p.id AS p_id, p.nombre AS p_nombre, p.precio AS p_precio, v.id AS v_id, v.cantidad AS v_cantidad, v.fecha_de_venta AS v_fecha, v.precio_total AS v_total FROM tbl_venta v, tbl_producto p WHERE p.id = v.id_producto_venta ORDER BY v.id";
  $result = mysqli_query($connection, $query);
  //echo $result;
  
  /* si no hay  encuentra resultados se cierra la conexion*/
  if(!$result) {
    die('Query Failed'. mysqli_error($connection));
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
?>
