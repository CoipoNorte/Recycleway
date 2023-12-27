<?php $filename = basename($_SERVER['PHP_SELF']); ?>
<!--Parte del Header, este contendra la barra de navegacion, al clickear el logo se devolvera a la pagina principal
    Tendra 4 links de navegacion, "Jugar ahora", "Informacion", "Registrarse" y "Historial" donde se muestra si se inicio sesion
    Tambien una seccion para que el usuario pueda ingresar a su cuenta
!-->
<header class="header pb-md-0 borde-header mb-2">
    <nav class="navbar navbar-expand-md navbar-light bg-light rounded-lg">
        <!-- Logo de la pagina -->
        <a class="navbar-brand" href="main.php" name="inicio"><img class="logo" src="../img/logobeta1.png"
                alt="logo de la pagina"></a>
        <!-- Opcion que entrega otra barra de navegacion cuando si tenga una distancia de pantalla menor a la pagina -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Contenido del div, donde involucra los links de navegacion -->
        <div class="navbar-collapse collapse show" id="navbarCollapse">
            <!-- Lista no ordenada que contiene los links -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="seleccionJuego.php">Jugar ahora<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="informacion.php">Información</a>
                </li>
                <!-- Si esta activa la sesion -->
                <?php if (!isset($_SESSION['user_id'])): ?>
                    <li class="nav-item">
                        <a class="nav-link" href="registrar.php">Registrate</a>
                    </li>
                <?php endif; ?>
                <li class="nav-item">
                    <a class="nav-link" href="historial.php">Historial</a>
                </li>
            </ul>
        </div>
        <!-- Formulario para iniciar sesion -->
        <?php if (!isset($_SESSION['user_id']) && $filename != "registrar.php"): ?>
            <div class="form-login">
                <form class="form-inline my-1 mr-md-2 mt-sm-0" action="<?php echo $filename; ?>" method="post"
                    autocomplete="off">
                    <div class="row">
                        <div class="col">
                            <i class="bi bi-file-earmark-person icono"></i>
                            <input type="email" class="form-control my-1 w-md-25 w-sm-50" placeholder="Correo"
                                name="correo">
                            <i class="bi bi-lock-fill icono"></i>
                            <input type="password" class="form-control my-1 w-md-25 w-sm-50" placeholder="Contraseña"
                                name="contrasena">
                            <button class="btn btn-outline-success my-1 mr-sm-2" type="submit">Acceder</button>
                        </div>
                    </div>
                </form>
            </div>
        <?php elseif ($filename != "registrar.php"): ?>
            <i class="bi bi-file-earmark-person icono mx-2"></i>
            <?= $user['correo']; ?>
            <a href="<?php echo $filename; ?>?logout=true">
                <button class="btn btn-outline-success mx-4 my-1 mr-sm-2">Cerrar sesión</button>
            </a>
        <?php endif; ?>
    </nav>
</header>