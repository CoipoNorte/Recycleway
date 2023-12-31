var jugando = false;
var pPuntaje = document.getElementById('puntaje');
var pComentarios = document.getElementById('comentarios');
var efectoPuntaje = []
var efectoAsacar;
var sacarEfecto = false;

var puntaje = 0;
var puntajeMax = 0;

var audioCorrect = new Audio('./audio/correct.wav');
var audioIncorrect = new Audio('./audio/incorrect.wav');
var audioLose = new Audio('./audio/lose.wav');

var pVidas = document.getElementById('vidas');
var vidas = 3;
var imagenVidaSrc = './img/corazonImg.png';
var tamanoImagen = 50;

var btnJugar = document.getElementById('jugar');
btnJugar.onclick = function () {
    vidas = 5;
    verPuntaje();
    if (!jugando) {
        verVidas();
        enemigos = []
        plus = []
        jugando = true;
        elementos = [];
        pComentarios.textContent = " ";
        var vRandom = obtenerValorRandom(0, jsonElementos.length);
        elementos.push(new Elemento(window_width / 2, 140, 50, 50, jsonElementos[vRandom].src, jsonElementos[vRandom].tipo, 1, jsonElementos[vRandom].nombre));
        sumarFrecuencia(jsonElementos[vRandom].nombre);

        for (let i = 0; i < nEnemigos; i++) {
            enemigos.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcEnemigos[obtenerValorRandom(0, srcEnemigos.length)]));
        }

        switch (jsonElementos[vRandom].tipo) {
            case 'azul': {
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[1]));
                break;
            }
            case 'verde': {
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[0]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[2]));
                break;
            }
            case 'amarillo': {
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[0]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[1]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[2]));
                break;
            }
            case 'cafe claro': {
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[0]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[1]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[2]));
                break;
            }
            case 'gris claro': {
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[0]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[1]));
                plus.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcPlus[2]));
                break;
            }
            default: { break; }

        }
        game();
    }
}


var jsonElementos = [];
var elementos = [];
var contenedores = [];

var srcEnemigos = ['./img/basura en mar.png', './img/calentamiento global.png', './img/co2.png', './img/reloj.png'];
var enemigos = [];
var nEnemigos = 3;
var sacarEnemigo = false;
var enemigoASacar;

var srcPlus = ['./img/secarResiduo.png', './img/reducirResiduo.png', './img/desinfectarResiduo.png'];
var plus = [];
var nPlus = 3;
var sacarPlus = false;
var plusASacar;


let canvas = document.getElementById("canvas");
var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;
var ctx = canvas.getContext("2d");

function move(event) {
    if (elementos.length > 0) {
        var el = elementos[elementos.length - 1];
        if (event.keyCode == '39' && (el.width + el.xpos) < window_width) {
            el.xpos += 10;
        }
        if (event.keyCode == '37' && el.xpos > 0) {
            el.xpos -= 10;
        }
        if (event.keyCode == '40' && (el.height + el.ypos) < window_height) {
            el.ypos += 30;
        }
        if (event.keyCode == '65') {
            el.ypos = window_height - 150;
        }
    }

}
peticion_http = new XMLHttpRequest();
peticion_http.onreadystatechange = agregarContenedores;
peticion_http.open('GET', 'contenedores.json', false);
peticion_http.send(null);

function agregarContenedores() {
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            var dataJson = peticion_http.responseText;
            var dataParsed = JSON.parse(dataJson);

            var espacio = 0;
            for (el of dataParsed) {

                contenedores.push(new Contenedor(espacio, window_height - 100, 100, 100, el.src, el.tipo, el.nombre));
                espacio += window_width / dataParsed.length;
            }
        }
    }
}
peticion_http2 = new XMLHttpRequest();
peticion_http2.onreadystatechange = agregarElementos;
peticion_http2.open('GET', 'elementos.json', false);
peticion_http2.send(null);

function agregarElementos() {
    if (peticion_http2.readyState == 4) {
        if (peticion_http2.status == 200) {
            var dataJson = peticion_http2.responseText;
            var dataParsed = JSON.parse(dataJson);
            jsonElementos = dataParsed;
        }
    }
}
var instrucciones = new Img(window_width - 400, window_height / 2, 400, 200, './img/botones.png');





function game() {
    ctx.clearRect(0, 0, window_width, window_height);

    if (jugando) {
        requestAnimationFrame(game);
    }
    instrucciones.draw(ctx);

    for (en of enemigos) {
        en.update(ctx);
    }

    for (pl of plus) {
        pl.update(ctx);
    }


    for (el of elementos) {
        el.update(ctx);
    }
    for (co of contenedores) {
        co.draw(ctx);
    }
    for (el of elementos) {
        for (co of contenedores) {
            if (colision(el, co)) { return; }
        }
        for (en of enemigos) {
            if (colisionEnemigo(el, en)) { sacarEnemigo = true; enemigoASacar = en; }
        }

        for (pl of plus) {
            if (colisionPlus(el, pl)) { sacarPlus = true; plusASacar = pl; }
        }


        if (sacarEnemigo) {
            enemigos = eliminarEnemigo(enemigos, enemigoASacar); sacarEnemigo = false;
        }
        if (sacarPlus) {
            plus = eliminarPlus(plus, plusASacar); sacarPlus = false;
        }

    }
    for (pun of efectoPuntaje) {
        pun.update(ctx);
        if (pun.fin) {
            sacarEfecto = true; efectoAsacar = pun;
        }
    }
    if (sacarEfecto) {
        efectoPuntaje = eliminarEfecto(efectoPuntaje, efectoAsacar); sacarEfecto = false;
    }

    if (!jugando) {
        alertaPerder(ctx);
    }

}
