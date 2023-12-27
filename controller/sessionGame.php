<!-- Implementacion php sobre el inicio de sesion, conexion.php -->
<?php
session_start();
require '../database/conexion.php';

if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT idUsuario, puntajeMax FROM puntajes p INNER JOIN usuarios u on p.idUsuario = u.id  and correo = :correo');
    $records->bindParam(':correo', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
        $user = $results;
    }
}
?>