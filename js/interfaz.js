
const _pestañaBotones = document.querySelectorAll(".pestaña");

const botonesPestañas = [];

for (let boton of _pestañaBotones) {
	const target = document.getElementById(boton.getAttribute("for"));

	if (target == null) {
		continue;
	}

	const type = boton.getAttribute("type");

	boton.contenedor = target;
	boton.tipo = type;
	botonesPestañas.push(boton);

	boton.addEventListener("click", function(e) {
		abrirPestaña(boton);
	});
}

for (let boton of botonesPestañas) {
	boton.contenedor.style.display = "none";
}

function abrirPestaña(pestaña) {
	for (let boton of botonesPestañas) {
		if (boton.tipo == pestaña.tipo) {
			boton.classList.remove("on");
			boton.contenedor.style.display = "none";
		}
	}

	if (pestaña.contenedor.style.display == "none") {
		pestaña.contenedor.style.display = "block";
		pestaña.classList.add("on");
	}
}





const header = document.querySelector(".header");

let ultimaPestaña = "";

eventListeners();

function eventListeners () {
	header.addEventListener("click", clickEnMenu);
}

function clickEnMenu(e) {
	const target = e.target;

	if (target.classList.contains("nav-enlace")) {
		let pestana = target.getAttribute("for");

		if (pestana != ultimaPestaña) {
			ultimaPestaña = pestana;
			header.classList.add("on");
		} else {
			target.classList.toggle("on");
			header.classList.toggle("on");
		}
	} else if (target.classList.contains("header") || target.classList.contains("nav-logo")) {
		header.classList.toggle("on");
	}
}