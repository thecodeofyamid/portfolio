<?php

$host = "localhost";
$user = "root";
$password = "nidian56";
$database = "marvy_shopmarket";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>

