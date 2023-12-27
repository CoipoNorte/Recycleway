<!-- Implementacion php sobre el inicio de sesion, conexion.php -->
<?php
  session_start();

  require './database/conexion.php';

  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT idUsuario, puntajeMax FROM puntajes p INNER JOIN usuarios u on p.idUsuario = u.id  and correo = :correo');
    $records->bindParam(':correo', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
      $user = $results;
    }
  }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilosJuego2.css">
    <link rel="icon" href="favicon.ico">
        <!-- Estilos de fontawesome, cargado con todos los estilos-->
        <link href="fontawesome/css/all.css" rel="stylesheet">
        <script defer src="fontawesome/js/all.js"></script>
    <title>Recicla</title>
</head>

<body>
    <div id="instrucciones">
        <h1> Instrucciones </h1>
        <img src="img/Instrucciones.png" alt="Instrucciones" width="500px">
        <button type="submit"> Cerrar </button>
    </div>
    <div id="perder">
        <h1> ¡Perdiste! </h1>
    </div>
    <?php if (isset($_SESSION['user_id'])): ?>
    <div id="contenedor">
        <div>
            <a class="navbar-brand" href="index.php" name="inicio"><img class="logo" src="img/logobeta1.png" alt="logo de la pagina" width="300px"></a>
            <section id="info">
                <p>Disparando <span style="color:cyan" id="characterName"></span></p>
                <p>Vidas: <span style="color:cyan" id="vidaJuego"></span></p>
                <p><span id="vidas"></span></p>
            </section>
        </div>
        <p id="puntaje">Puntaje: <b><span id="score"></span> </b> <b><span> / <?=$user['puntajeMax']?> </span></b> </p> 
        <div id="reproductor2">
            <!-- Proporciona informacion en el navegador para cambiar de musica cuando el jugador da click en los botones del reproductor -->
            <audio id="player" autoplay ontimeupdate="updateProgress();">
            <source  id="source">   
            Audio no soportado  
            </audio>
            <div id="controls">
                <!-- Duracion de la musica -->
                <div class="timer" id="timer">
                    &nbsp;
                </div>
                <div class="volumen">
                    Vol: 
                    <i class="fas fa-volume-down"></i> 
                    <input type="range" name="volumen" id="volumen" min="0" max="1" step="0.01" value="0.75"> 
                    <i class="fas fa-volume-up"></i>
                </div>
                <!-- Iconos de musica del reproductor, al darles click activara sus funciones de la anterior musica,
                activar/pausar musica y siguiente musica -->
                <i class="fas fa-backward fa-2x" onclick="prevMusic();"></i>
                <i class="far fa-play-circle fa-2x" onclick="togglePlay();" id="iconPlay"></i> 
                <i class="fas fa-forward fa-2x" onclick="nextMusic();"></i>
                <br>
                <!-- Nombre de la musica que se esta escuchando actualmente -->
                <span id="currentPlay"></span><br>
                <progress id="progress" value="0" max="100" ></progress>
            </div>
        </div>
    <button onclick="location.reload()">Jugar</button>
    <!-- <section id="info">
        <p>Disparando a <span id="characterName"></span></p>
    </section> -->
    
</div>
    <!-- <section id="info">
        <h1>Tirachinas Reciclaje</h1>
        <p>Disparando a <span id="characterName"></span></p>
        <hr>
        <p> Puntaje: <b><span id="score"></span> </b></p>
        <button onclick="location.reload()">Volver a jugar</button>
    </section> -->
    <script>
        const instruccionesContainer = document.getElementById('instrucciones');
        // const gameContainer = document.getElementById('container');
        const closeButton = document.querySelector('button');
      
        closeButton.addEventListener('click', function(event) {
          event.preventDefault();
          instruccionesContainer.style.display = 'none';
        //   gameContainer.style.display = 'block';
        });

        const alertaPerderContainer = document.getElementById('perder');
        function mostrarPerdiste() {
            document.getElementById('perder').style.display = 'block';
            // gameContainer.style.display = 'block';
            }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/reproductor2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.18.0/matter.min.js"></script>
    <script src="js/matter-attractors.js"></script>
    <script src="js/residueProps.js"></script>
    <script src="js/containerProps.js"></script>
    <script src="js/scriptsjuego2.js"></script>
    <script type="text/javascript">
    var idUsuario="<?=$user['idUsuario']?>";
    var puntajeMaxT="<?=$user['puntajeMax']?>";
    function actualizarPuntajeMax(puntajeMax){    
    if(puntajeMaxT<puntajeMax){
        puntajeMaxT=puntajeMax;
        $.post('actualizarPuntaje.php',{idUsuario: idUsuario, puntajeMax:puntajeMax});
        
    }
    }
    </script>
    <!-- Aviso que debe tener una sesion para iniciar el videojuego-->
    <?php else:?>
        <div id="contenedor">
            <a class="navbar-brand" href="index.php" name="inicio"><img class="logo" src="img/logobeta1.png" alt="logo de la pagina" width="300px"></a>
            <p class="aviso">Inicia sesión primero</p>      
        </div>
    <?php endif; ?>  
</body>

</html>