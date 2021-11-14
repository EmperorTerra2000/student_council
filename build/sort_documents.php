<?php
include './db.php';

$sql = "SELECT * FROM `documents` ";
$fl = 0;
$str = "";
$arr = [];
$_POST = (array)json_decode(file_get_contents("php://input", true));
if (isset($_POST['year'])) {
  foreach ($_POST['year'] as $value) {
    if ($fl == 0) {
      array_push ($arr, $value);
      $str .= "i";
      $sql .= "WHERE (`year` = ? ";
      $fl = 1;
    }
    else {
      array_push ($arr, $value);
      $str .= "i";
      $sql .= "OR `year` = ? ";
    }
  }
  $sql .= ") ";
}

if (isset($_POST['tag'])) {
  if ($fl == 0) {
    array_push ($arr, $_POST['tag']);
    $str .= "s";
    $sql .= "WHERE `tag` = ?";
    $fl = 1;
  }
  else {
    array_push ($arr, $_POST['tag']);
    $str .= "s";
    $sql .= "AND (`tag` = ?)";
  }
}


$stmt = $connection->prepare($sql);
if ($fl == 1) {
  $stmt->bind_param($str, ...$arr);
}
if (!$stmt->execute()) {
    $res = [
        "error" => 1,
        "err_description" => "Ошибка базы данных",
    ];
    echo json_encode($res);
    die("Execution failed: (" . $stmt->errno . ") " . $stmt->error);
}
$result = $stmt->get_result();
$arr = [];
while ($a = ($result->fetch_assoc())){
  array_push($arr, $a);
}
echo json_encode($arr, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
?>
