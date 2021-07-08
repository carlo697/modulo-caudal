const procesoImagenes = Array.from(
    document.querySelectorAll(".proceso-imagen-padre")
);
let circuloPosiciones = [];

const procesoImg = new Image();
procesoImg.src = "./img/proceso/proceso_completo.png";

cargarCirculos();

window.addEventListener("resize", () => {
    renderizarCirculos();
});

function cargarCirculos() {
    cargarPosicionCirculos();
    renderizarCirculos();
}

function getConjuntoCirculos(id) {
    return circuloPosiciones.find((item) => item.id === id);
}

function renderizarCirculos() {
    procesoImagenes.forEach((padre) => {
        renderizarImagenPadre(padre);
    });
}

function renderizarImagenPadre(padre) {
    const id = padre.getAttribute("data-imagen-id");
    const canvas = padre.querySelector(".proceso-imagen");
    const context = canvas.getContext("2d");

    let conjunto = getConjuntoCirculos(id);

    if (!conjunto) {
        circuloPosiciones.push({
            id,
            circulos: [],
        });
    }

    conjunto = getConjuntoCirculos(id);
    conjunto.padre = padre;
    conjunto.canvas = canvas;
    conjunto.context = context;

    const ancho = tienePantallaTactil
        ? canvas.offsetWidth < 1500
            ? 1500
            : canvas.offsetWidth
        : canvas.offsetWidth;

    canvas.width = ancho;
    canvas.height = ancho / 2;

    context.drawImage(procesoImg, 0, 0, canvas.width, canvas.height);

    renderizarCanvasPadre(padre, context);
}

function eliminarCirculo(conjunto, circulo) {}

function renderizarCanvasPadre(padre, context, offsetX = 0, offsetY = 0, scale = 1) {
    const id = padre.getAttribute("data-imagen-id");

    let conjunto = getConjuntoCirculos(id);
    const canvas = context.canvas;

    context.strokeStyle = "red";
    context.lineWidth = 3;

    // Eliminar los circulos viejos
    if (tienePantallaTactil) {
        const circulos = Array.from(
            padre.querySelectorAll('[data-padre="imagen_practica1_0"]')
        );
        circulos.forEach((circulo) => circulo.remove());
    }

    conjunto.circulos.forEach((circulo) => {
        if (tienePantallaTactil) {
            // Crear un circulo nuevo
            const circuloHTML = document.createElement("div");
            circuloHTML.classList.add("proceso-circulo");
            circuloHTML.textContent = "x";
            circuloHTML.setAttribute("data-padre", id);
            circuloHTML.style.left = circulo[0] * 100 + "%";
            circuloHTML.style.top = circulo[1] * 100 + "%";
            padre.appendChild(circuloHTML);
        } else {
            const x = circulo[0] * canvas.width * scale + offsetX - 10;
            const y = circulo[1] * canvas.height * scale + offsetY - 10;
            dibujarX(context, x, y, 20, 20);
        }
    });
}

function cargarPosicionCirculos() {
    const guardado = localStorage.getItem("circuloPosiciones");

    if (guardado != null) {
        circuloPosiciones = JSON.parse(guardado);
    }
}

function dibujarX(context, x, y, sizeX, sizeY) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + sizeX, y + sizeY);
    context.stroke();

    context.beginPath();
    context.moveTo(x + sizeX, y);
    context.lineTo(x, y + sizeY);
    context.stroke();
}

function dibujarCruz(context, x, y, sizeX, sizeY) {
    let horizontal = x + sizeX / 2;
    context.beginPath();
    context.moveTo(horizontal, y);
    context.lineTo(horizontal, y + sizeY);
    context.stroke();

    let vertical = y + sizeY / 2;
    context.beginPath();
    context.moveTo(x, vertical);
    context.lineTo(x + sizeX, vertical);
    context.stroke();
}

function guardarCirculos() {
    // circuloPosiciones.forEach((item) => {
    //     const { id, circulos } = item;

    //     // obtener el contenedor y los elementos de los circulos
    //     const contenedor = document.getElementById(id);
    //     const htmlCirculos = contenedor.querySelectorAll(".proceso-circulo");

    //     // vaciar el array de circulos
    //     circulos.length = 0;

    //     htmlCirculos.forEach((circulo) => {
    //         const x = circulo.style.left;
    //         const y = circulo.style.top;

    //         circulos.push([x, y]);
    //     });
    // });

    localStorage.setItem(
        "circuloPosiciones",
        JSON.stringify(circuloPosiciones)
    );
}

function construirConjuntoConHTML(conjunto) {
    // obtener el contenedor y los elementos de los circulos
    const htmlCirculos = conjunto.padre.querySelectorAll(".proceso-circulo");

    // vaciar el array de circulos
    conjunto.circulos.length = 0;

    htmlCirculos.forEach((circulo) => {
        conjunto.circulos.push([
            parseFloat(circulo.style.left) / 100,
            parseFloat(circulo.style.top) / 100,
        ]);
    });

    guardarCirculos();
}
