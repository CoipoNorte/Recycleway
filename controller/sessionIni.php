<!-- Implementacion php sobre el inicio de sesion, conexion.php -->
<?php

session_start();
require '../database/conexion.php';

if (!empty($_POST['correo']) && !empty($_POST['contrasena'])) {
    $records = $conn->prepare('SELECT * FROM usuarios WHERE correo = :correo');
    $records->bindParam(':correo', $_POST['correo']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (!empty($results) && password_verify($_POST['contrasena'], $results['contrasena'])) {
        $_SESSION['user_id'] = $results['correo'];
    } else {
        $message = 'Los datos ingresados no son correctos';
    }
}
if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT * FROM usuarios WHERE correo = :correo');
    $records->bindParam(':correo', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
        $user = $results;
    }
}
if (isset($_GET['logout'])) {

    session_unset();
    session_destroy();
}
?>