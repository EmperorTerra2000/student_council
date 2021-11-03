<?php
$h = "localhost";
$u = "root";
$p = "root";
$d = "studsovet";

$connection = new mysqli($h, $u, $p, $d);
if($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}
?>
