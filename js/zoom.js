const fondo = document.querySelector("#procedoFondo");
const contenedor = document.querySelector("#zoomContenedor");
const botonAumentar = document.querySelector("#aumentar");
const botonDisminuir = document.querySelector("#disminuir");

const centroContenedor = document.querySelector("#zoomCentro");

const fondoAncho = 1200;
let completeScale = 0;
let currentScale = 1.0;

const minimo = 1;
const maximo = 7;
const paso = 1;

eventListeners();

alCambiarTamano();

function eventListeners() {
	window.addEventListener("resize", alCambiarTamano);

	botonAumentar.addEventListener("click", clickEnAumentar);
	botonDisminuir.addEventListener("click", clickEnDisminuir);
}

function alCambiarTamano() {
	var w = document.body.clientWidth;

	completeScale = (w * 0.95)/fondoAncho;

	actualizarTamano(true);
}

function posicionRelativa (a, b) {
	const bPos = b.getBoundingClientRect();
    const aPos = a.getBoundingClientRect();
    const obj = { };

    obj.top = aPos.top - bPos.top;
    obj.left = aPos.left - bPos.left;

    return obj;
}

function getSize(element) {
	const elementRect = element.getBoundingClientRect();
	const size = { };

    size.x = elementRect.width;
    size.y = elementRect.height;

    return size;
}

function getNormalizedRelativePosition (a, b) {
	const bPos = b.getBoundingClientRect();
    const aPos = a.getBoundingClientRect();
    const obj = { };

    obj.y = (aPos.top - bPos.top) / bPos.height;
    obj.x = (aPos.left - bPos.left)  / bPos.width;

    return obj;
}

function actualizarTamano(rendimensionado) {
	// La posicion normalizada del centro con respecto al fondo.
	let posicionInicialNormalizada = getNormalizedRelativePosition(centroContenedor, fondo);

	// Tamano inicial del fondo.
	let tamanoInicial = getSize(fondo);

	// La posicion del centro con respecto al fondo en px.
	const xInicial = posicionInicialNormalizada.x * tamanoInicial.x;
	const yInicial = posicionInicialNormalizada.y * tamanoInicial.y;

	if (rendimensionado) {
		currentScale = 1;
	}

	// Agrandar el fondo.
	fondo.style.transform = `scale(${completeScale * currentScale})`;

	// Tamano final luego de agrandar.
	const tamanoFinal = getSize(fondo);

	// Posicion final en px de donde estaria el centro luego de agrandar.
	const xFinal = posicionInicialNormalizada.x * tamanoFinal.x;
	const yFinal = posicionInicialNormalizada.y * tamanoFinal.y;

	// Diferencia en px de la posicion inicial del centro y la posicion final,
	// todo con respecto al fondo.
	const xDif = xFinal - xInicial;
	const yDif = yFinal - yInicial;

	const estilos = getComputedStyle(fondo);

	let y = parseInt(estilos.top, 10) - yDif;
	let x = parseInt(estilos.left, 10) - xDif;

	// La primera vez que se ajusta el tamano, no se quiere realizar el ajuste de posicion.
	if (rendimensionado) {
		x = 0;
		y = 0;
	}
	
	fondo.style.left = x + "px";
	fondo.style.top = y + "px";
}

function clickEnAumentar() {
	currentScale += paso;
	currentScale = Math.min(currentScale, maximo);
	currentScale = Math.max(currentScale, minimo);

	actualizarTamano();
}

function clickEnDisminuir() {
	currentScale -= paso;
	currentScale = Math.min(currentScale, maximo);
	currentScale = Math.max(currentScale, minimo);

	actualizarTamano();
}




let pos1 = 0;
let pos2 = 0;
let pos3 = 0;
let pos4 = 0;

fondo.onpointerdown = alHacerClick;

function alHacerClick(e) {
	e = e || window.event;
	e.preventDefault();

	// Guardar la posicion del cursor.
	pos3 = e.clientX;
	pos4 = e.clientY;

	document.onpointerup = terminarMovimiento;
	document.onpointermove = elementDrag;
}

function elementDrag(e) {
	e = e || window.event;
	e.preventDefault();

	// Calcular que tanto se movio el cursor.
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;

	// Guardar la posicion nueva del cursor.
	pos3 = e.clientX;
	pos4 = e.clientY;

	// Asignar la posicion nueva al elemento
	let newX = (fondo.offsetTop - pos2);
	let newY = (fondo.offsetLeft - pos1);
	fondo.style.top = newX + "px";
	fondo.style.left = newY + "px";
}

function terminarMovimiento() {
	document.onpointerup = null;
	document.onpointermove = null;
}