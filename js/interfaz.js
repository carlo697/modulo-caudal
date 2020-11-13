// Elementos
const header = document.querySelector(".header");

// Variables de pestanas
const botonesPestanas = [];
let ultimaPestana = "";

// Event listeners
eventListeners();

function eventListeners () {
	inicializarPestanas();
	header.addEventListener("click", clickEnMenu);
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
}

function cerrarMenu() {
	header.classList.remove("on");
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