<?php
session_start();

$conn = mysqli_connect(
  '162.241.61.135',
  'mojitosc_castelll0009',
  'Castillo1997177-',
  'mojitosc_mojitos-db'
) or die(mysqli_erro($mysqli));

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
