<?php
include('../controller/sessionIni.php'); /** sessionIni */
include('./includes/head.php'); /** head */
?>

<body>

  <?php
  include('./includes/header.php'); /** header */
  include('../controller/mensage.php'); /** mensage */
  ?>

  <!-- Contenido main de la pagina principal -->
  <main role="main pt-2" class="main">

    <?php
    include('./utils/carousel.php'); /** carousel */
    include('./utils/cards.php'); /** cards */
    ?>

  </main>

  <?php
  include('./includes/footer.php'); /** footer */
  include('./includes/foot.php'); /** foot */
  ?>

  <!-- Script que "normaliza" las alturas de los elementos del carrusel de Bootstrap -->
  <script type="text/javascript">
    function normalizeSlideHeights() {
      $('.carousel').each(function () {
        var items = $('.carousel-item', this);
        // Reinicia la altura
        items.css('min-height', 0);
        // Asigna la altura
        var maxHeight = Math.max.apply(null,
          items.map(function () {
            return $(this).outerHeight()
          }).get());
        items.css('min-height', maxHeight + 'px');
      })
    }
    $(window).on(
      'load resize orientationchange',
      normalizeSlideHeights);   
  </script>
</body>

</html>