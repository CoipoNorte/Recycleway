<!-- Contenido div que se encarga de los items del carrusel, serie de dispositivas que recorre una serie de contenido -->
<div id="myCarousel" class="carousel slide pb-5" data-interval="false">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class=""></li>
        <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
        <!-- Desactivar el carrusel de registrar tras ya tener una cuenta iniciada -->
        <?php if (!isset($_SESSION['user_id'])): ?>
            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        <?php endif; ?>
    </ol>

    <!-- Contenido div que se encarga de las tres dispositivas del carrusel -->
    <div class="carousel-inner">
        <!-- Item n°1 - carrusel -->
        <div class="carousel-item px-5">
            <div class="row featurette pt-2">
                <div class="col-md-6 text-center mt-5">
                    <h2 class="featurette-heading">Información. <span class="text-muted">Guia detallada de los
                            materiales
                            reciclables.</span></h2>
                    <p class="lead">Mediante esta sección podras informarte de los distintos materiales y su contenedor
                        correspondiente.</p>
                    <p><a class="btn btn-lg btn-primary btn-lg " href="informacion.php">Información</a></p>
                </div>
                <div class="col-12 col-md-6 pb-2">
                    <img class="mx-auto d-block w-75 h-100" src="../img/informacion.png"
                        alt="contenedores de reciclaje">
                </div>
            </div>
        </div>
        <!-- Item n°2 - carrusel -->
        <div class="carousel-item active px-5">
            <div class="row featurette pt-2">
                <div class="col-12 col-md-6 pb-2">
                    <video controls autoplay loop width="500" class="mx-auto d-block w-100 h-100">
                        <source src="./utils/juego.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="col-md-6 text-center mt-5">
                    <h2 class="featurette-heading">!!Juega Ya¡¡<span class="text-muted"> Entretención y
                            aprendizaje.</span>
                    </h2>
                    <p class="lead">Juega y diviertete, destacate entre los demas con el mejor puntaje, aprende a
                        reciclar.
                    </p>
                    <p><a class="btn btn-lg btn-primary btn-lg " href="juego.php">Jugar</a></p>
                </div>
            </div>
        </div>
        <!-- Item n°3 - carrusel -->
        <?php if (!isset($_SESSION['user_id'])): ?>
            <div class="carousel-item px-5">
                <div class="row featurette pt-2">
                    <div class="col-md-6 text-center mt-5">
                        <h2 class="featurette-heading">Registrate. <span class="text-muted">Crea una cuenta.</span></h2>
                        <p class="lead">Crea una cuenta personal para poder guardar tu progreso.</p>
                        <p><a class="btn btn-lg btn-primary btn-lg " href="registrar.php">Registrate</a></p>
                    </div>
                    <div class="col-12 col-md-6 pb-2">
                        <img class="mx-auto d-block w-75 h-100" src="../img/historial.png" alt="estadistica del jugador">
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <!-- Botones que cambian el contenido item del carrusel -->
        <button class="carousel-control-prev" type="button" data-target="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Siguiente</span>
        </button>
    </div>
</div>