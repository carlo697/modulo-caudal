// Elementos
const header = document.querySelector(".header");
const datosInputs = document.querySelectorAll(".practica-input");
const preguntasInputs = document.querySelectorAll("[preguntaId]");
const contenidoPracticas = document.querySelector("#practicasArea");
const practicasError = document.querySelector("#practicasError");
const practicasConfirmacion = document.querySelector("#practicasConfirmacion");
const esconderBoton = document.querySelector("#esconder");

const dispositivos = document.querySelector("#guias");
const informacion = document.querySelector("#informacion");
const informacionTitulo = document.querySelector("#informacionTitulo");
const informacionContenido = document.querySelector("#informacionContenido");
const botonCerrarInformacion = document.querySelector("#botonCerrarInformacion");

const menu = document.querySelector(".menu");

// Variables de pestanas
const botonesPestanas = [];
let ultimaPestana = "";

// Event listeners
eventListeners();
cargarBienvenida();

function eventListeners () {
	inicializarPestanas();
	header.addEventListener("click", clickEnMenu);

	for (let input of preguntasInputs) {
		input.addEventListener("input", alModificarInputPractica);
	}

	for (let input of datosInputs) {
		input.addEventListener("input", alModificarInputDato);
	}

	esconderBoton.addEventListener("click", esconderBienvenida);
	dispositivos.addEventListener("click", clickEnDispositivos);
	botonCerrarInformacion.addEventListener("click", clickEnCerrarInformacion);

	document.body.addEventListener("mouseover", overTooltips);

	contenidoPracticas.addEventListener("pointerdown", clickPracticas);
	botonConfirmar.addEventListener("pointerdown", clicEnConfirmar);

	for (let imagen of procesoImagenes) {
		imagen.addEventListener("pointerdown", clickEnImagenesProceso);
	}

	cargarInputs();

	// Desactivar los enlaces en los planos en dispositivos con pantallas tactiles
	if ('ontouchstart' in document.documentElement) {
		document.querySelectorAll("img.plano").forEach(plano => {
			plano.parentElement.parentElement.removeAttribute("href");
		});
	}
}

function iterarElementos (elemento, callback) {
	callback(elemento);

	const _elemento = elemento.firstElementChild;

	while (_elemento) {
		iterarElementos(elemento, callback);
		_elemento = elemento.nextElementSibling;
	}
}

const tooltipOffset = -2;

function overTooltips(e) {
	let tooltipParent;

	if (e.target.classList.contains("tooltip")) {
		tooltipParent = e.target;
	} else {
		if (e.target.parentElement.classList.contains("tooltip")) {
			tooltipParent = e.target.parentElement;
		} else {
			return;
		}
	}

	let tooltipText = tooltipParent.querySelector(".tooltip-text");

	if (tooltipText == null) {
		return;
	}

	/*
	const parentBounds = tooltipParent.getBoundingClientRect();
	const textBounds = tooltipText.getBoundingClientRect();
	*/


	if (tooltipText.tooltipWidth == undefined)
	{
		tooltipText.tooltipWidth = tooltipText.offsetWidth * 1.4;
	}

	width = tooltipText.tooltipWidth;

	tooltipText.style.width = width + "px";
	

	const xOffset = (tooltipParent.offsetWidth / 2 - tooltipText.offsetWidth / 2);
	const yOffset = tooltipText.offsetHeight;

	tooltipText.style.transform = `translate(${xOffset}px, -${yOffset}px)`;
	
}

// Funciones

function inicializarPestanas() {
	const botones = document.querySelectorAll(".pestana");

	for (let boton of botones) {
		const target = document.getElementById(boton.getAttribute("for"));

		if (target == null) {
			continue;
		}

		const type = boton.getAttribute("type");

		boton.contenedor = target;
		boton.tipo = type;
		botonesPestanas.push(boton);

		boton.addEventListener("click", function(e) {
			abrirPestana(boton);
		});
	}

	for (let boton of botonesPestanas) {
		boton.contenedor.style.display = "none";
	}
}

function abrirPestana(pestana) {
	cerrarPestana(pestana.tipo);

	if (pestana.contenedor.style.display == "none") {
		pestana.contenedor.style.display = "block";
		pestana.classList.add("on");
	}
}

function cerrarPestana(tipo) {
	for (let boton of botonesPestanas) {
		if (boton.tipo == tipo) {
			boton.classList.remove("on");
			boton.contenedor.style.display = "none";
		}
	}
}

function clickEnMenu(e) {
	const target = e.target;

	if (target.classList.contains("nav-enlace")) {
		let pestana = target.getAttribute("for");

		if (estaMenuAbierto()) {
			if (pestana == ultimaPestana) {
				cerrarMenu();
			} else {
				ultimaPestana = pestana;
			}
		} else {
			ultimaPestana = pestana;
			abrirMenu();
		}
	} else if (target.classList.contains("header") || target.classList.contains("nav-logo")) {
		toggleMenu();
	}
}

function abrirMenu(pestana) {
	if (pestana != null) {
		const boton = document.querySelector(pestana);

		abrirPestana(boton);
		ultimaPestana = boton.getAttribute("for");
	}

	header.classList.add("on");
	document.body.style.overflow = "hidden";
}

function cerrarMenu() {
	header.classList.remove("on");
	document.body.style.overflow = "auto";
}

function toggleMenu() {
	if (header.classList.contains("on")) {
		cerrarMenu();
	} else {
		abrirMenu();
	}
}

function estaMenuAbierto() {
	return header.classList.contains("on");
}

function alModificarInputPractica(e) {
	localStorage.setItem(e.target.getAttribute("preguntaId"), e.target.value);
}

function alModificarInputDato(e) {
	// Guardar en localStorage el valor.
	localStorage.setItem(e.target.getAttribute("preguntaId"), e.target.value);
	localStorage.removeItem("datos_confirmados");

	actualizarContenidoPracticas();
}

function actualizarContenidoPracticas() {
	let faltan = false;

	for (input of datosInputs) {
		if (input.value == "") {
			faltan = true;
			break;
		}
	}

	if (faltan) {
		practicasError.classList.remove("hide");
		practicasConfirmacion.classList.add("hide");
		contenidoPracticas.classList.add("hide");

		localStorage.removeItem("datos_confirmados");
	} else {
		if (localStorage.getItem("datos_confirmados")) {
			practicasError.classList.add("hide");
			practicasConfirmacion.classList.add("hide");
			contenidoPracticas.classList.remove("hide");
		} else {
			practicasError.classList.add("hide");
			practicasConfirmacion.classList.remove("hide");
			contenidoPracticas.classList.add("hide");
		}
		
	}
}

function clicEnConfirmar() {
	localStorage.setItem("datos_confirmados", true);

	actualizarContenidoPracticas();
}

function cargarInputs() {
	for (input of preguntasInputs) {
		const valor = localStorage.getItem(input.getAttribute("preguntaId"));

		if (valor != null) {
			input.value = valor;
		}
	}

	actualizarContenidoPracticas();
}


function cargarBienvenida() {
	if (!localStorage.getItem("esconderBienvenida")) {
		header.classList.add("bienvenida-on");
	}
}

function esconderBienvenida() {
	header.classList.remove("bienvenida-on");
	localStorage.setItem("esconderBienvenida", true);
}

function clickEnDispositivos(e) {
	const target = e.target;

	if (target.classList.contains("g-boton")) {
		const id = target.getAttribute("data-dispositivo");

		const dispositivo = obtenerDispositivo(id);

		if (dispositivo != null) {
			informacion.classList.remove("hide");

			informacionTitulo.textContent = dispositivo.titulo;
			informacionContenido.innerHTML = dispositivo.contenido;
		}
			
	}
}

function obtenerDispositivo(id) {
	for (let dispositivo of db) {
		if (dispositivo.id == id) {
			return dispositivo;
		}
	}

	return null;
}

function clickEnCerrarInformacion() {
	informacion.classList.add("hide");
}


let diferenciaX = 0;
let diferenciaY = 0;
let procesoMouseX = 0;
let procesoMouseY = 0;
let imagenArrastrada = null;
let procesoImagen = null;
let eliminandoProcesoImagen = false;
let imagenObjetivo = null;


function clickPracticas(e) {
	const {target} = e;

	if (target.classList.contains("agregar") && !imagenArrastrada) {
		const id = target.getAttribute("data-imagen-id");

		const contenedor = document.querySelector("#" + id);

		const circulo = document.createElement("div");

		circulo.classList.add("proceso-circulo");
		circulo.textContent = "x";
		circulo.setAttribute("data-padre", id);

		circulo.style.left = (Math.random() * 20) + "%";
		circulo.style.top = (Math.random() * 20) + "%";

		contenedor.appendChild(circulo);

		terminarEliminarCirculos(contenedor);

		guardarCirculos();
	}

	if (target.classList.contains("eliminar") && !imagenArrastrada) {
		const id = target.getAttribute("data-imagen-id");

		comenzarEliminarCirculos(document.querySelector("#" + id));
	}
}

function comenzarEliminarCirculos(contenedor) {
	if (imagenObjetivo != null) {
		imagenObjetivo.classList.remove("eliminando");
	}

	eliminandoProcesoImagen = true;
	imagenObjetivo = contenedor;
	imagenObjetivo.classList.add("eliminando");
}

function terminarEliminarCirculos(contenedor) {
	eliminandoProcesoImagen = false;
	if (imagenObjetivo != null) {
		imagenObjetivo.classList.remove("eliminando");
		imagenObjetivo = null;
	}
}

function clickEnImagenesProceso(e) {
	e.preventDefault();

	const target = e.target;

	if (target.classList.contains("proceso-circulo")) {
		if (eliminandoProcesoImagen) {
			console.log(target.parentElement)
			terminarEliminarCirculos();

			target.remove();

			guardarCirculos();
		} else {
			// Guardar la posicion del cursor.
			procesoMouseX = e.clientX;
			procesoMouseY = e.clientY;

			imagenArrastrada = target;
			procesoImagen = target.parentElement;

			target.addEventListener("pointermove", moverImagenProceso);
			target.addEventListener("pointerup", soltarImagenProceso);

			procesoImagen.addEventListener("pointermove", moverImagenProceso);
			procesoImagen.addEventListener("pointerup", soltarImagenProceso);
		}
	}
}

function soltarImagenProceso(e) {
	const target = e.target;
	target.removeEventListener("pointermove", moverImagenProceso);
	target.removeEventListener("pointerup", soltarImagenProceso);

	procesoImagen.removeEventListener("pointermove", moverImagenProceso);
	procesoImagen.removeEventListener("pointerup", soltarImagenProceso);

	imagenArrastrada = null;

	// guardar en localstorage
	guardarCirculos();
}

function guardarCirculos() {
	circuloPosiciones.forEach((item) => {
		const {id, circulos} = item;

		// obtener el contenedor y los elementos de los circulos
		const contenedor = document.querySelector("#" + id);
		const htmlCirculos = contenedor.querySelectorAll(".proceso-circulo");

		// vaciar el array de circulos
		circulos.length = 0;

		htmlCirculos.forEach((circulo) => {
			const x = circulo.style.left;
			const y = circulo.style.top;

			circulos.push([x, y]);
		});
	});

	localStorage.setItem("circuloPosiciones", JSON.stringify(circuloPosiciones));
}

function moverImagenProceso(e) {
	const target = imagenArrastrada;

	// Calcular que tanto se movio el cursor.
	diferenciaX = procesoMouseX - e.clientX;
	diferenciaY = procesoMouseY - e.clientY;

	// Guardar la posicion nueva del cursor.
	procesoMouseX = e.clientX;
	procesoMouseY = e.clientY;

	// Asignar la posicion nueva al elemento
	let newY = ((target.offsetTop - diferenciaY) / procesoImagen.offsetHeight) * 100;
	let newX = ((target.offsetLeft - diferenciaX) / procesoImagen.offsetWidth) * 100;

	target.style.top = newY + "%";
	target.style.left = newX + "%";
}

