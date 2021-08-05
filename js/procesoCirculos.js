const procesoImagenes = Array.from(
    document.querySelectorAll(".proceso-imagen-padre")
);
let circuloPosiciones = [];

const imagenes = {};
let cantidadImagenesCargadas = 0;
let cargadas = false;

practicas.forEach((practica) => {
    practica.pasos.forEach((paso) => {
        const { imagen } = paso;

        if (imagen) {
            if (!(imagen.src in imagenes)) {
                const img = new Image();
                img.src = imagen.src;

                img.onload = function () {
                    cantidadImagenesCargadas++;

                    if (
                        cantidadImagenesCargadas ===
                        Object.keys(imagenes).length
                    ) {
                        cargadas = true;

                        cargarCirculos();
                    }
                };

                imagenes[imagen.src] = {
                    img: img,
                };
            }
        }
    });
});

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
    let conjunto = getConjuntoCirculos(id);

    if (!conjunto) {
        circuloPosiciones.push({
            id,
            circulos: [],
        });
    }

    conjunto = getConjuntoCirculos(id);
    conjunto.padre = padre;

    let context = null;

    if (!usarImg) {
        const canvas = padre.querySelector(".proceso-imagen");
        conjunto.canvas = canvas;

        context =
            conjunto.context != null && conjunto.context.canvas
                ? conjunto.context
                : canvas.getContext("2d");

        conjunto.context = context;

        const ancho =
            tienePantallaTactil || imprimiendo
                ? canvas.offsetWidth < 1500
                    ? 1500
                    : canvas.offsetWidth
                : canvas.offsetWidth;

        canvas.width = ancho;
        canvas.height = ancho / 2;

        // Renderizar la imagen del proceso
        const img = new Image();
        context.drawImage(
            imagenes[canvas.getAttribute("data-imagen-src")].img,
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Renderizar el texto "Cantidad de X colocadas:"
        if (pestanasContenedor) {
            context.font = "20px serif";
        } else {
            context.font = "40px serif";
        }

        context.fillStyle = "black";
        const text = "Cantidad de X colocadas: ";
        const measure = context.measureText(text);
        context.fillText(text, 10, measure.actualBoundingBoxAscent + 10);

        // Renderizar el numero de X
        context.fillStyle = "blue";
        context.fillText(
            conjunto.circulos.length,
            measure.width + 10,
            measure.actualBoundingBoxAscent + 10
        );
    }

    renderizarCanvasPadre(padre, context);
}

function renderizarCanvasPadre(
    padre,
    context,
    offsetX = 0,
    offsetY = 0,
    scale = 1
) {
    const id = padre.getAttribute("data-imagen-id");
    let conjunto = getConjuntoCirculos(id);

    if (usarImg) {
        // Eliminar los circulos viejos
        const circulos = Array.from(
            padre.querySelectorAll('[data-padre="imagen_practica1_0"]')
        );
        circulos.forEach((circulo) => circulo.remove());

        conjunto.circulos.forEach((circulo) => {
            // Crear un circulo nuevo
            const circuloHTML = document.createElement("div");
            circuloHTML.classList.add("proceso-circulo");
            circuloHTML.textContent = "x";
            circuloHTML.setAttribute("data-padre", id);
            circuloHTML.style.left = circulo[0] * 100 + "%";
            circuloHTML.style.top = circulo[1] * 100 + "%";
            padre.appendChild(circuloHTML);
        });

        padre.querySelector(".x-numero").innerHTML = conjunto.circulos.length;
    } else {
        conjunto.circulos.forEach((circulo) => {
            const canvas = context.canvas;

            context.strokeStyle = "red";
            context.lineWidth = 3;
            const x = circulo[0] * canvas.width * scale + offsetX - 10;
            const y = circulo[1] * canvas.height * scale + offsetY - 10;
            dibujarX(context, x, y, 20, 20);
        });
    }
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
