<?php
include "./db.php";

$stmt = $connection->prepare("SELECT `id`, `title`, `date`, `description`, `link`, `image` FROM `posts` WHERE `digest` = 1 ORDER BY `id` DESC");
if (!$stmt->execute()) {
    $res = [
        "error" => 1,
        "err_description" => "Ошибка базы данных",
    ];
    echo json_encode($res, JSON_UNESCAPED_UNICODE);
    die("Execution failed: (" . $stmt->errno . ") " . $stmt->error);
}
$result = $stmt->get_result();
$res_succ = [];

while($row = $result->fetch_assoc()) {
  array_push($res_succ, $row);
}

echo json_encode($res_succ, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
?>