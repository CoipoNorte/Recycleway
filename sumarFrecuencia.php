<!-- Implementaion de php donde hace la frecuencia que aparece el objeto que ve en el usuario -->

<?php
 $data = $_POST;
 echo $data['idUsuario'];
 echo $data['nombreMaterial'];


 require './database/conexion.php';

  $message = '';

  if (!empty($_POST['idUsuario'])) {





    $records = $conn->prepare('SELECT * FROM material WHERE nombre = :nombre');
    $records->bindParam(':nombre', $_POST['nombreMaterial']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);




    $sql = "UPDATE rendimiento SET frecuenciaJuego=frecuenciaJuego+1 WHERE idUsuario=:idUsuario and idMaterial=:idMaterial";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idUsuario', $_POST['idUsuario']);
    $stmt->bindParam(':idMaterial', $results['id']);

    if ($stmt->execute()) {
      $message = 'Successfully created new user';
    } else {
      $message = 'Sorry there must have been an issue creating your account';
    }
  }
?>
