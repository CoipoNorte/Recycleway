<?php
include("../controller/sessionIni.php"); /** sessionIni */
include('./includes/head.php'); /** head */
?>

<body>

  <?php
  include('./includes/header.php'); /** header */
  include('../controller/mensage.php'); /** mensage */
  ?>
  
  <!-- h1 para el cuerpo de la pagina de historial -->
  <h1 id="tituloInformacion" class="text-center">Rendimiento en el juego</h1>
  <br><br>
  <!-- Tabla del usuario donde diga los materiales que ha fallado el usuario recientemente -->
  <table class="table table-striped bg-info text-white text-center w-75 mx-auto">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Material</th>
        <th scope="col">Contenedor correcto</th>
        <th scope="col">Porcentaje de fallo</th>
      </tr>
    </thead>

    <tbody>

    <!-- historialRendimiento -->
    <?php include('./utils/historialRendimiento.php');?>

    </tbody>

  </table>
  <!-- h1 para la tabla del usuario n°2 -->
  <h1 id="tituloInformacion" class="text-center"> ¡Cuidado! </h1>
  <!-- Tabla del usuario donde diga los materiales que mas ha fallado el usuario -->
  <table class="table table-striped w-75 mx-auto bg-danger text-white text-center">
    <p class="lead mx-5 text-center"><strong style="color:white"> Estos son los 4 materiales que mas se ha equivocado de
        contenedor: </strong></p>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Material</th>
        <th scope="col">Contenedor correcto</th>
        <th scope="col">Porcentaje de fallo</th>
      </tr>
    </thead>

    <tbody>
      <!-- historialRendimiento -->
      <?php include('./utils/historialCuidado.php');?>

  </table>

  <?php
  include('./includes/footer.php'); /** footer */
  include('./includes/foot.php'); /** foot */
  ?>
</body>

</html>