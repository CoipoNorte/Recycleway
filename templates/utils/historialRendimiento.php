<!-- Implementacion php para conseguir datos de la primera tabla-->
<?php
if (isset($_SESSION['user_id'])) {

    $qs = $conn->prepare('SELECT *,ma.nombre as nombreMaterial,ma.imagen as imagenResiduo FROM (rendimiento as re INNER JOIN material as ma ON re.idMaterial =ma.id), contenedores c WHERE c.id=ma.idContenedor and re.idUsuario=:idUsuario');
    $qs->bindParam(':idUsuario', $user['id']);
    $qs->execute();
    $materiales = $qs;
    foreach ($materiales as $material) {
        if ($material['frecuenciaJuego'] != 0) {
            echo '
                <tr>
                    <th scope="row">
                        <img src="../' . $material["imagenResiduo"] . '" width="50" alt="">
                    </th>
                    <td>' . $material["nombreMaterial"] . '</td>
                    <td scope="row">
                        <img src="../' . $material["imagen"] . '" width="50" alt="">
                    </td>
                    <td>' . round((($material['frecuenciaIncorrecta'] / $material['frecuenciaJuego']) * 100), 2) . '%</td>
                </tr>
            ';
        } else {
            echo '
                <tr>
                    <th scope="row">
                        <img src="../' . $material["imagenResiduo"] . '" width="50" alt="">
                    </th>
                    <td>' . $material["nombreMaterial"] . '</td>
                    <td scope="row">
                        <img src="../' . $material["imagen"] . '" width="50" alt="">
                    </td>
                    <td>' . (0) . '%</td>
                </tr>
            ';
        }
    }
} else {
    echo '
        <tr>
            <td>Inicia sesión para ver estadística</td>
        </tr>
    ';
}
?>