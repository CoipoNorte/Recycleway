<?php
include('../controller/sessionIni.php'); /** sessionIni */
include('./includes/head.php'); /** head */
?>

<body>

  <?php
  include('./includes/header.php'); /** header */
  include('../controller/mensage.php'); /** mensage */
  ?>
  
  <!-- Botones de modos de juego -->
  <main role="main pt-2" class="main">
    <div class="container text-center pt-5 pb-4">
      <h1 id="tituloInformacion">Selecciona un nivel para jugar</h1>
      <div class="row justify-content-center pb-5 pt-5">
        <div class="col-md-8">
          <a class="btn btn-primary btn-lg w-100" href="../juego.php">Juego Clásico</a>
        </div>
        <div class="col-md-8 mt-3">
          <a class="btn btn-primary btn-lg w-100" href="../juego2.php">Juego Tirachinas</a>
        </div>
      </div>
    </div>
  </main>

  <?php
  include('./includes/footer.php'); /** footer */
  include('./includes/foot.php'); /** foot */
  ?>
</body>

</html>