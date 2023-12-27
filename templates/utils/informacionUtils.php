<?php
$qs = $conn->prepare('SELECT * FROM contenedores');
$qs->execute();
$contenedores = $qs;

foreach ($contenedores as $contenedor) {
    echo '
        <div class="row featurette item">
            <div class="col-md-7 contenedor">
                <h2 class="featurette-heading">' . $contenedor["nombre"] . '</h2>
                <p class="lead">' . $contenedor["descripcion"] . '</p>
            </div>
            <div class="col-md-5">
                <img class="mx-auto d-block" src="../' . $contenedor["imagen"] . '" alt="' . $contenedor["nombre"] . '">                
            </div>
            <div class="row ejemplos w-100">
    ';

    $qs2 = $conn->prepare('SELECT * FROM contenedores co INNER JOIN material ma ON co.id=ma.idContenedor AND co.nombre=:nombre ');
    $qs2->bindParam(':nombre', $contenedor['nombre']);
    $qs2->execute();
    $residuos = $qs2;

    foreach ($residuos as $residuo) {
        echo '
            <div class="col-lg-4">
                <img src="../' . $residuo["imagen"] . '" width="100px" class="mx-auto d-block" alt="' . $residuo["nombre"] . '">
                <h2 class="text-center">' . $residuo["nombre"] . '</h2>
            </div>
        ';
    }
    echo '
            </div>
        </div>
        <hr class="featurette-divider">
    ';
}
?>