
class Img {
    constructor(xpos, ypos, width, height, src) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
    }
    draw(context) {
        context.drawImage(this.img, this.xpos, this.ypos, this.width, this.height);
    }
}
class Contenedor {
    constructor(xpos, ypos, width, height, src, tipo, nombre) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
        this.tipo = tipo;
        this.nombre = nombre;
    }
    draw(context) {
        context.drawImage(this.img, this.xpos, this.ypos, this.width, this.height);
    }
}
class Elemento {
    constructor(xpos, ypos, width, height, src, tipo, dy, nombre) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
        this.dy = dy;
        this.tipo = tipo;
        this.nombre = nombre;
    }
    draw(context) {
        context.drawImage(this.img, this.xpos, this.ypos, this.width, this.height);
        //context.drawImage(this.llama,this.xpos,this.ypos-50,this.width,this.height);
    }
    update(context) {
        //context.clearRect(0,0,window_width,window_height);
        this.draw(context);
        if ((this.ypos + this.height) > window_height) {
            this.dy = -this.dy;
            jugando = false;
        }
        if (this.ypos < 140) {
            this.dy = -this.dy;
        }
        this.ypos += this.dy;
    }
}

class Factor {
    constructor(xpos, ypos, width, height, src) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
        this.dy = 1;
        this.dx = 1;
    }
    draw(context) {
        context.drawImage(this.img, this.xpos, this.ypos, this.width, this.height);
    }
    update(context) {
        this.draw(context);

        if ((this.ypos + this.height) > window_height) {
            this.dy = -this.dy;
        }
        if (this.ypos < 140) {
            this.dy = -this.dy;
        }

        if ((this.xpos + this.width) > window_width) {
            this.dx = -this.dx;
        }
        if (this.xpos < 0) {
            this.dx = -this.dx;
        }
        this.ypos += this.dy;
        this.xpos += this.dx;
    }
}
function obtenerValorRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function eliminarEnemigo(array, elemento) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }
    }
    resultado.push(new Factor(obtenerValorRandom(0, window_width - 100), obtenerValorRandom(140, window_height - 100), 100, 100, srcEnemigos[obtenerValorRandom(0, srcEnemigos.length)]));
    return resultado;
}

function eliminarPlus(array, elemento) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

function eliminarEfecto(array, elemento) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== elemento) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

function addResiduo() {
    var vRandom = obtenerValorRandom(0, jsonElementos.length);
    elementos.push(new Elemento(window_width / 2, 140, 50, 50, jsonElementos[vRandom].src, jsonElementos[vRandom].tipo, 1, jsonElementos[vRandom].nombre));
    sumarFrecuencia(jsonElementos[vRandom].nombre);

    plus = []
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
}

function verVidas() {
    // Limpia el contenido actual del elemento 'vidas'
    pVidas.innerHTML = '';
    // Agrega imágenes de vida al elemento 'vidas'
    for (var i = 0; i < vidas; i++) {
        var imagenVida = document.createElement('img');
        imagenVida.src = imagenVidaSrc;
        imagenVida.alt = '♥';
        imagenVida.style.width = tamanoImagen + 'px';  // Establece el tamaño de la imagen
        imagenVida.style.height = tamanoImagen + 'px';
        pVidas.appendChild(imagenVida);
    }
}

function verPuntaje() {
    pPuntaje.textContent = `PS: ${puntaje} | ${puntajeMaxT}`;
}

function colision(img1, img2) {
    var xpos1 = img1.xpos;
    var ypos1 = img1.ypos;
    var width1 = img1.width;
    var height1 = img1.height;

    var xpos2 = img2.xpos;
    var ypos2 = img2.ypos;
    var width2 = img2.width;
    var heigh2 = img2.height;

    if (xpos1 < xpos2 + width2 &&
        xpos1 + width1 > xpos2 &&
        ypos1 < ypos2 + heigh2 &&
        ypos1 + height1 > ypos2) {

        elementos.pop();
        if (img1.tipo != img2.tipo) {
            puntaje = 0;
            verPuntaje();

            addResiduo();
            vidas--;
            verVidas();
            if (vidas < 1) {
                for (co of contenedores) {
                    if (co.tipo == img1.tipo) {
                        pComentarios.textContent = `!!comentarios: El residuo ${img1.nombre} no va en ${img2.nombre}. Debe ir en ${co.nombre}¡¡`;
                    }
                }
                jugando = false;
            }
            audioLose.play();
            sumarFallo(img1.nombre);
            return true;
        } else {
            puntaje++;
            actualizarPuntajeMax(puntaje);
            verPuntaje();

            audioCorrect.play();
            efectoPuntaje.push(new EfectoPuntaje(50, window_height / 2, 2, "+1", true));

            addResiduo();
        }
    }
    return false;
}
function colisionEnemigo(img1, img2) {
    var xpos1 = img1.xpos;
    var ypos1 = img1.ypos;
    var width1 = img1.width;
    var height1 = img1.height;

    var xpos2 = img2.xpos;
    var ypos2 = img2.ypos;
    var width2 = img2.width;
    var heigh2 = img2.height;

    if (xpos1 < xpos2 + width2 &&
        xpos1 + width1 > xpos2 &&
        ypos1 < ypos2 + heigh2 &&
        ypos1 + height1 > ypos2) {

        if (puntaje > 0) {
            audioIncorrect.play();
            puntaje--;
            verPuntaje();


            efectoPuntaje.push(new EfectoPuntaje(50, window_height / 2, 2, "-1", false));
        }
        return true;
    }
    return false;
}

function colisionPlus(img1, img2) {
    var xpos1 = img1.xpos;
    var ypos1 = img1.ypos;
    var width1 = img1.width;
    var height1 = img1.height;

    var xpos2 = img2.xpos;
    var ypos2 = img2.ypos;
    var width2 = img2.width;
    var heigh2 = img2.height;

    if (xpos1 < xpos2 + width2 &&
        xpos1 + width1 > xpos2 &&
        ypos1 < ypos2 + heigh2 &&
        ypos1 + height1 > ypos2) {

        audioCorrect.play();
        puntaje++;
        actualizarPuntajeMax(puntaje);
        verPuntaje();


        efectoPuntaje.push(new EfectoPuntaje(50, window_height / 2, 2, "+1", true));

        return true;
    }
    return false;
}

function alertaPerder(ctx) {
    ctx.fillStyle = "#20b2aa";
    ctx.fillRect((window_width / 2) - 200, (window_height / 2) - 100, 400, 150);
    ctx.fillStyle = "black";
    ctx.font = "60px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Perdiste", window_width / 2, window_height / 2);

}


class EfectoPuntaje {
    constructor(xpos, ypos, dy, puntaje, sumar) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.dy = dy;
        this.puntaje = puntaje;
        this.fin = false;
        this.sumar = sumar;
    }
    draw(context) {
        if (this.sumar) {
            context.fillStyle = "#00b347";
            context.font = "60px monospace";
            context.textAlign = "center";
            context.fillText(this.puntaje, this.xpos, this.ypos);
        } else {
            context.fillStyle = "red";
            context.font = "60px monospace";
            context.textAlign = "center";
            context.fillText(this.puntaje, this.xpos, this.ypos);

        }
    }
    update(context) {
        this.draw(context);
        if (this.ypos < 50) {
            this.fin = true;
        }
        this.ypos -= this.dy;
    }
}