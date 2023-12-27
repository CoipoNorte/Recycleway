const getRandomResidue = () => {

    const birds = [
        {
            name: 'Pila',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "rojo",
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/pilas.png"
            // textureresidue: "./aceite.png"
        },
        {
            name: 'Aceite',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "rojo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            // textureresidue: "https://opengameart.org/sites/default/files/ball.png"
            textureresidue: "./img/aceite.png"
        },
        {
            name: 'Bateria',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "rojo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/bateria.png"
        },
        {
            name: 'Medicamentos',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "rojo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/medicamentos.png"
        },
        {
            name: 'Medicamentos 2',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "rojo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/medicamentos 2.png"
        },
        {
            name: 'Tetrapack leche',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "beige",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/tetrapack leche.png"
        },
        {
            name: 'Tetrapack leche 2',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "beige",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/tetrapack leche 2.png"
        },
        {
            name: 'Tetrapack jugo',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "beige",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/tetrapack jugo.png"
        },
        {
            name: 'Tetrapack general',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "beige",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/tetrapack desconocido.png"
        },
        {
            name: 'Bolsa plastico',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "amarillo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/bolsa plastico.png"
        },
        {
            name: 'Envase de plastico agua',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "amarillo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/envase de plastico agua.png"
        },
        {
            name: 'Envase plastico comida',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "amarillo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/envase plastico comida.png"
        },
        {
            name: 'Vasos plasticos',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "amarillo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/vasos plasticos.png"
        },
        {
            name: 'Caja',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/caja.png"
        },
        {
            name: 'Envase carton',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/envase carton.png"
        },
        {
            name: 'Folleto',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/folleto.png"
        },
        {
            name: 'Papel',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/papel.png"
        },
        {
            name: 'Papel de colores',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/papel de colores.png"
        },
        {
            name: 'Periodico',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "azul",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/periodico.png"
        },
        {
            name: 'Cascara de huevo',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "cafe",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/cascara huevo.png"
        },
        {
            name: 'Espina pescado',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "cafe",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/espina pescado.png"
        },
        {
            name: 'Manzana',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "cafe",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/manzana.png"
        },
        {
            name: 'Servilleta',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "cafe",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/servilleta.png"
        },
        {
            name: 'Lata conserva',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_claro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/lata conserva.png"
        },
        {
            name: 'Lata de cerveza',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_claro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/lata de cerveza.png"
        },
        {
            name: 'Lata de atun',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_claro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/lata de atun.png"
        },
        {
            name: 'Lata de bebida',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_claro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/lata de bebida.png"
        },
        {
            name: 'Arena de mascota',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/arena de mascota.png"
        },
        {
            name: 'Ceramica',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/ceramica.png"
        },
        {
            name: 'Colilla cigarro',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/colilla cigarro.png"
        },
        {
            name: 'Envoltorios',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/envoltorios.png"
        },
        {
            name: 'Mascarilla',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/mascarilla.png"
        },
        {
            name: 'Pañal',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "gris_oscuro",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/pañal.png"
        },
        {
            name: 'Celular',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "burdeo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/celular.png"
        },
        {
            name: 'Laptop',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "burdeo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/laptop.png"
        },
        {
            name: 'Parlante bluetooth',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "burdeo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/parlante bluetooth.png"
        },
        {
            name: 'Teclado',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "burdeo",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/teclado.png"
        },
        {
            name: 'Botella de vidrio',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "verde",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/botella de vidrio.png"
        },
        {
            name: 'Botella de vidrio bebida',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "verde",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/botella de vidrio bebida.png"
        },
        {
            name: 'Botella vino',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "verde",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/botella vino.png"
        },
        {
            name: 'Envases de vidrio',
            radius: 20,
            posX: 300,
            posY: 400,
            type: "verde",
            // grow: 1.1,
            // maxGrow: 30,
            physics: {
                density: 0.01,
                frictionAir: 0.01
            },
            textureresidue: "./img/envases de vidrio.png"
        }

    ]

    return birds[Math.floor(Math.random() * birds.length)]
}