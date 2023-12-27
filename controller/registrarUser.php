<!-- Implementacion php sobre el inicio de sesion, conexion.php -->
<?php
require '../database/conexion.php';
$message = '';

if (!empty($_POST['correo']) && !empty($_POST['contrasena'])) {
  $sql = "INSERT INTO usuarios (id,nombre,apellido,correo,contrasena) VALUES (NULL,:nombre, :apellido,:correo,:contrasena)";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':nombre', $_POST['nombre']);
  $stmt->bindParam(':apellido', $_POST['apellido']);
  $stmt->bindParam(':correo', $_POST['correo']);

  $contrasenaHash = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
  // $contrasena = password_hash(, PASSWORD_BCRYPT);

  $stmt->bindParam(':contrasena', $contrasenaHash);
  // Verificacion de la registracion de cuenta y sus restricciones, no se debe repetir el correo.
  if ($stmt->execute()) {
    $message = 'La cuenta se agrego';
    $records = $conn->prepare('SELECT id FROM usuarios WHERE correo = :correo');
    $records->bindParam(':correo', $_POST['correo']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);
    if (!empty($results)) {
      $idUsuario = $results['id'];

      $sql = "INSERT INTO puntajes (id,idUsuario,puntajeMax) VALUES (NULL,:idUsuario, :puntajeMax)";
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':idUsuario', $idUsuario);
      $puntajeMax = 0;
      $stmt->bindParam(':puntajeMax', $puntajeMax);
      $stmt->execute();

      $qs = $conn->prepare('SELECT id FROM material');
      $qs->execute();
      $materiales = $qs;
      foreach ($materiales as $material) {
        $sql = "INSERT INTO rendimiento (id,idUsuario,idMaterial,frecuenciaJuego,frecuenciaIncorrecta) VALUES (NULL,:idUsuario,:idMaterial,:frecuenciaJuego,:frecuenciaIncorrecta)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':idUsuario', $idUsuario);
        $stmt->bindParam(':idMaterial', $material["id"]);
        $frecuencias = 0;
        $stmt->bindParam(':frecuenciaJuego', $frecuencias);
        $stmt->bindParam(':frecuenciaIncorrecta', $frecuencias);
        $stmt->execute();
      }
    }
  } else {
    $message = 'No se pudo agregar la cuenta, puede que la cuenta ya este en uso';

    $records = $conn->prepare('SELECT correo, contrasena FROM usuarios WHERE correo = :correo');
    $records->bindParam(':correo', $_POST['correo']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;
  }
}
?>