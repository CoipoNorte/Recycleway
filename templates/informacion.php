<?php
include('../controller/sessionIni.php'); /** sessionIni */
include('./includes/head.php'); /** head */
?>

<body>

  <?php
  include('./includes/header.php'); /** header */
  include('../controller/mensage.php'); /** mensage */
  ?>

  <!-- Contenido main de informacion -->
  <main role="main" class="main">
    <!-- Contenedor div que abarca a las filas de los elementos de los contenederes de basura y su informacion -->
    <div class="container marketing">
      <h1 id="tituloInformacion" class="text-center">Contenedores de acuerdo al material a reciclar</h1>

      <!-- informacionController -->
      <?php include('./utils/informacionUtils.php'); ?>

    </div>
  </main>

  <?php
  include('./includes/footer.php'); /** footer */
  include('./includes/foot.php'); /** foot */
  ?>
</body>

</html>