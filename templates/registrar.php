<?php
include('../controller/registrarUser.php'); /** registrarUser */
include('./includes/head.php'); /** head */
?>

<body>

  <?php
  include('./includes/header.php'); /** header */
  include('../controller/mensage.php'); /** mensage */
  ?>

  <!-- Contenido div main de registrar -->
  <main class="main" role="main">
    <!-- Contenido div donde estara el formulario -->
    <div class="formulario py-4 my-3 mx-2 px-4 rounded-lg">
      <form action="registrar.php" method="post">

        <!-- filas de dos que tiene los inputs nombre y apellido -->
        <div class="form-row buscador">
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Nombre</label>
            <input type="text" class="form-control is-invalid w-50" id="validationServer01" placeholder="Nombre"
              value="" name="nombre" required>

            <!-- Muestra de ejemplo cuando se completa el input -->
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <label for="validationServer02">Apellido</label>
            <input type="text" class="form-control is-invalid w-50" id="validationServer02" placeholder="Apellido"
              value="" name="apellido" required>

            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
        </div>
        <!-- Filas de dos donde contiene el input del correo y la contraseña-->
        <div class="form-row">
          <div class="col-md-12 mb-3">
            <label for="validationServer01">Correo</label>
            <input type="email" class="form-control is-invalid w-50" id="validationServer01" placeholder="Correo"
              value="" name="correo" required>
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <label for="validationServer02">Contraseña</label>

            <input type="password" class="form-control is-invalid w-50" id="validationServer02" placeholder="Contraseña"
              value="" name="contrasena" required>
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
        </div>
        <!-- Clase contenedor div donde contiene el check input de aceptar terminos y condiciones, si no esta aceptado diria el mensaje "Debe estar de acuerod antes de enviar" -->
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback" name="terminos" onclick="handleClick(this)" required>
            <label class="form-check-label" for="invalidCheck3">
              Aceptar terminos y servicios
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
              Debe estar de acuerdo antes de enviar.
            </div>
          </div>
        </div>
        <!-- Boton para registrar el formulario -->
        <button class="btn btn-primary" type="submit">Registrar</button>
      </form>
    </div>
  </main>

  <?php
  include('./includes/footer.php'); /** footer */
  include('./includes/foot.php'); /** foot */
  ?>

  <script type="text/javascript">
    // Restricciones de dominio, longitud del texto
    $('input[name=nombre]').change(function () {
      if (this.value.length >= 3) {
        $('input[name=nombre]').removeClass("is-invalid");
        $('input[name=nombre]').addClass("is-valid");
      } else {
        $('input[name=nombre]').removeClass("is-valid");
        $('input[name=nombre]').addClass("is-invalid");
      }
    });
    $('input[name=apellido]').change(function () {
      if (this.value.length >= 3) {
        $('input[name=apellido]').removeClass("is-invalid");
        $('input[name=apellido]').addClass("is-valid");
      } else {
        $('input[name=apellido]').removeClass("is-valid");
        $('input[name=apellido]').addClass("is-invalid");
      }
    });
    $('input[name=correo]').change(function () {
      if (this.value.length >= 3) {
        $('input[name=correo]').removeClass("is-invalid");
        $('input[name=correo]').addClass("is-valid");
      } else {
        $('input[name=correo]').removeClass("is-valid");
        $('input[name=correo]').addClass("is-invalid");
      }
    });
    $('input[name=contrasena]').change(function () {
      if (this.value.length >= 3) {
        $('input[name=contrasena]').removeClass("is-invalid");
        $('input[name=contrasena]').addClass("is-valid");
      } else {
        $('input[name=contrasena]').removeClass("is-valid");
        $('input[name=contrasena]').addClass("is-invalid");
      }
    });

    function handleClick(cb) {
      if (cb.checked) {
        $('input[name=terminos]').removeClass("is-invalid");
        $('input[name=terminos]').addClass("is-valid");
      } else {
        $('input[name=terminos]').removeClass("is-valid");
        $('input[name=terminos]').addClass("is-invalid");
      }
    }
  </script>
</body>

</html>