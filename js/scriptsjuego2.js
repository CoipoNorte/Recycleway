// Modulos de Matter.js, es muy delicado asi que puede que tengas que reinciar el servidor
// si pasa algun cambio.
const { Render, Runner, Engine, Bodies, Composite, Composites, Constraint, Mouse, MouseConstraint, Events, Body } = Matter

// Parametros de fisicas para el residuo, esta en birdProps.js
let { name, posX, posY, radius, physics, type, maxGrow, textureresidue } = getRandomResidue()
characterName.textContent = name

// Distribucion del juego
let puntajeMax = 0;
// gameSize se refiere al tamaño de la ventana del navegador, en este caso se utilizara
// para el tamaño del juego
const gameSize = { w: window.innerWidth, h: window.innerHeight };
// baseposX e baseposY seran las direccion de la base que sostiene el contenedor,  la base es la parte
// estatica que sostenera el contenedor. Como tiene que ser aleatorio, se utiliza Math.random multiplicado
// con la distancia del tamaño de juego menos 500 para que este en un punto medio de la generacion, 
// luego se suma 250 en la posicion X para que no esta tan cerca del tirachinas, lo mismo que en basePosY.
let basePosX = Math.random() * (gameSize.w - 500) + 250;
let basePosY = Math.random() * (gameSize.h - 200) + 200;
// Existe probabilidad de que aun este cerca del tirachinas (como que el random de 0), daria
// problemas en la pos x, asi que en caso de que pase eso el valor se repite hasta que salga
// un valor mayor que 200 y menor que 700.
while (basePosX >= 200 && basePosX <= 700) {
  basePosX = Math.random() * (gameSize.w - 500) + 250;
}

var audioCorrect = new Audio('./audio/correct.wav');
var audioIncorrect = new Audio('./audio/incorrect.wav');
// var audioLose = new Audio('./audio/lose.wav');
let vidas = 3;
vidaJuego.textContent = vidas;
let vidaRestada = false;

let pVidas = document.getElementById('vidas');
let imagenVidaSrc = './img/corazonImg.png';
let tamanoImagen = 30;

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

verVidas();

// Parametros de la base
const baseProps = { w: 100, h: 20, posX: basePosX, posY: basePosY }

// console.log(gameSize.w, gameSize.h);

// Parametros de los Contenedores
const containerProps = { w: baseProps.w / 4, h: 30, posX: baseProps.posX, posY: basePosY - 60, cols: 1, rows: 1 }

// Engine se encarga de simular interacciones fisicas entre objetos
const engine = Engine.create()


// Render crea un renderizador para representar visualmente lo que esta pasando en el canva. Tomara la parte body del html
// y el tamaño del juego.
const render = Render.create({
  element: document.body,
  engine: engine,
  options: { width: gameSize.w, height: gameSize.h, wireframes: false, background: 'transparent' }
})

// la barrera
let base = Bodies.rectangle(baseProps.posX, baseProps.posY, baseProps.w, baseProps.h, {
  render: {
    sprite: {
      texture: "./img/table.png",
      xScale: 1,
    }
  },
  isStatic: true
})
console.log(baseProps.posX, baseProps.posY)

// Contenedor
getContainer(type);
console.log(getContainer(type))
console.log(getContainer(type).texturecontainer)
const container = Bodies.rectangle(containerProps.posX, containerProps.posY, containerProps.w, containerProps.h, {
  render: {
    sprite: {
      texture: getContainer(type).texturecontainer,
      xScale: 1,
      yScale: 1
    }
  },
  isStatic: true
})

// Composite es un contrutor que permite crear metodos para fisicas y sirve para agregar, eliminar, o restringir cuerpos
// Nosotros lo vamos a agregar primero para eliminar tras hacer colision con el residuo.
// Pero luego se debe agregar para todos para que se apliquen las fisicas.
const compositecontainer = Composite.create();
Composite.add(compositecontainer, container);

// Residuo
let residue = Bodies.polygon(posX, posY, 8, radius, {
  render: {
    sprite: {
      texture: textureresidue,
      xScale: 0.1,
      yScale: 0.1
    }
  },
});
let previousResidue = residue;

// Constraint en matter.js significa dar comportacion de fuerza en un cuerpo
// point A sera la fuerza del punto que se va a tomar, bodyB sera el objeto que se le va a otorgar a A
const shooter = Constraint.create({
  pointA: { x: posX, y: posY },
  bodyB: residue
})

// mouse hara que funcione el puntero, y sera renderizado por cada frame, con constraint le estamos dando fuerza y sera reflejada por click o accion.
let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create(engine,
  {
    mouse: mouse,
  }
)
render.mouse = mouse;
Composite.add(engine.world, mouseConstraint);
let nextType = null;
let isFiring = false;
function resume() {
  // console.log(nextType);
  getContainer(nextType);
  // console.log(getContainer(nextType))
  // console.log(getContainer(nextType).texturecontainer)
  let basePosX = Math.random() * (gameSize.w - 500) + 250;
  let basePosY = Math.random() * (gameSize.h - 300) + 200;
  while (basePosX >= 200 && basePosX <= 700) {
    basePosX = Math.random() * (gameSize.w - 500) + 250;
  }
  const baseProps = { w: 250, h: 20, posX: basePosX, posY: basePosY }
  Body.setPosition(base, { x: basePosX, y: basePosY });
  const containerProps = { w: baseProps.w / 4, h: 30, posX: baseProps.posX, posY: basePosY - 60, cols: 1, rows: 1 }
  container.render.sprite.texture = getContainer(nextType).texturecontainer;
  // Reiniciar la posición del contenedor
  Body.setPosition(container, { x: containerProps.posX, y: containerProps.posY });
  Body.setStatic(container, true);
  Composite.add(compositecontainer, container);
}

// Event se encarga de hacer eventos, 'endrdrag' significa escuchar el finalizacion de un arrastre del objeto
Events.on(mouseConstraint, 'enddrag', function (event) {
  if (event.body === residue) {
    isFiring = true;
    console.log("tafuncioando")
  }
})
Events.on(engine, 'afterUpdate', () => {
  if (residue && previousResidue.position.y > gameSize.h && vidaRestada == false) {
    if (vidas > 0) {
      vidas--;
      console.log(vidas);
      vidaJuego.textContent--;
      vidaRestada = true;
      container.render.sprite.texture = getContainer(nextType).texturecontainer;
      audioIncorrect.play();
      verVidas();
    }
    if (vidas <= 0) {
      actualizarPuntajeMax(puntajeMax)
      mostrarPerdiste()
      console.log("¡Perdiste!")
    }
  }
  if (isFiring) {
    vidaRestada = false;
    if (isFiring && mouseConstraint.mouse.button === -1 && (residue.position.x > posX || residue.position.y < posY)) {
      previousResidue = residue
      let { name, posX, posY, radius, physics, type, textureresidue } = getRandomResidue()
      nextType = type;
      // console.log(nextType);
      characterName.textContent = name;
      residue = Bodies.polygon(posX, posY, 8, radius, {
        render: {
          sprite: {
            texture: textureresidue,
            xScale: 0.1,
            yScale: 0.1
          }
        },
      });
      Body.setStatic(residue, true);
      setTimeout(() => {
        Body.setStatic(residue, false);
      }, 500);
      Composite.add(engine.world, residue);



      shooter.bodyB = residue;
      Body.setPosition(residue, { x: posX, y: posY });
      Body.setVelocity(residue, { x: 0, y: 0 });
      Body.setAngularVelocity(residue, 0);
      isFiring = false;
    }
  }
})
// Collision se encarga de detectar una colision entre objetos, pairs se encarga de encontrar
// eventos de colision de dos cuerpos y los guarda en un arreglo. Si una de estas colisiones
// son el residuo y contenedor se agregara puntaje y eliminara el contenedor.

Events.on(engine, 'collisionStart', (event) => {
  const pairs = event.pairs;
  pairs.forEach((pair) => {
    const { bodyA, bodyB } = pair;
    if (bodyA === compositecontainer && previousResidue.bodies.includes(bodyB)) {
      // Incrementa el puntaje
      score.textContent++;
      puntajeMax++;
      audioCorrect.play();
      // Elimina el contenedor del array
      Composite.remove(compositecontainer, bodyB);
      // Elimina el residuo del array
      Composite.remove(compositecontainer, bodyA);
      World.remove(engine.world, previousResidue);
      console.log(bodyA, bodyB)
      resume();
    } else if (bodyB === previousResidue && compositecontainer.bodies.includes(bodyA)) {
      console.log(bodyA, bodyB)
      // Incrementa el puntaje
      score.textContent++;
      puntajeMax++;
      audioCorrect.play();
      // Elimina el contenedor del array
      Composite.remove(compositecontainer, bodyA);
      // Elimina el residuo del array
      Composite.remove(compositecontainer, bodyB);
      Composite.remove(engine.world, previousResidue);
      console.log(bodyA, bodyB)
      resume();
    }
  });
});


// Se transforma todos en Composite para que se apliquen las fisicas
Composite.add(engine.world, [base, compositecontainer, residue, shooter, mouseConstraint])

//Corre el programa en modo loop. Osea se renderiza con los modulos de Matter.js
Runner.run(engine)
Render.run(render)