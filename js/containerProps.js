const getContainer = (type) => {

    const birds = [
        {
            name: 'Contenedor Rojo',
            texturecontainer: "./img/contenedor rojo.png",
            type: "rojo"
        },
        {
            name: 'Contenedor Beige',
            texturecontainer: "./img/contenedor cafe claro.png",
            type: "beige"
        },
        {
            name: 'Contenedor Amarillo',
            texturecontainer: "./img/contenedor amarillo.png",
            type: "amarillo"
        },
        {
            name: 'Contenedor Azul',
            texturecontainer: "./img/contenedor azul.png",
            type: "azul"
        },
        {
            name: 'Contenedor Cafe',
            texturecontainer: "./img/contenedor cafe.png",
            type: "cafe"
        },
        {
            name: 'Contenedor Gris Claro',
            texturecontainer: "./img/contenedor gris claro.png",
            type: "gris_claro"
        },
        {
            name: 'Contenedor Gris Oscuro',
            texturecontainer: "./img/contenedor gris oscuro.png",
            type: "gris_oscuro"
        },
        {
            name: 'Contenedor Burdeo',
            texturecontainer: "./img/contenedor purpura.png",
            type: "burdeo"
        },
        {
            name: 'Contenedor Verde',
            texturecontainer: "./img/contenedor verde.png",
            type: "verde"
        },
        {
            name: 'Contenedor De Plastico',
            texturecontainer: "./img/contenedor-de-plastico.png",
            type: "plastico"
        }
    ]
    const filteredContainers = birds.filter(container => container.type === type);
    return (filteredContainers[0])
}