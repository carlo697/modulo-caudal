const procesoImagenes = document.querySelectorAll(".proceso-imagen");
let circuloPosiciones = {};

cargarCirculos();

function cargarCirculos () {
	cargarPosicionCirculos();

	for (let procesoImagen of procesoImagenes) {
		agregarCirculos(procesoImagen);
	}

	console.log("circulos agregados")
}

function agregarCirculos(imagen) {
	if (!imagen.hasAttribute("data-cantidad")) {
		return;
	}

	const id = imagen.getAttribute("data-imagen-id");

	if (!circuloPosiciones.hasOwnProperty(id)) {
		circuloPosiciones[id] = [];
	}

	const cantidad = parseInt(imagen.getAttribute("data-cantidad"));

	for (var i = 0; i < cantidad; i++) {
		const circulo = document.createElement("div");

		circulo.classList.add("proceso-circulo");
		circulo.innerHTML = "x";
		circulo.setAttribute("data-indice", i);
		circulo.setAttribute("data-padre", id);

		if (i > circuloPosiciones[id].length - 1) {
			const x = (Math.random() * 20) + "%";
			const y = (Math.random() * 20) + "%";

			circuloPosiciones[id].push([x, y]);
		}

		circulo.style.left = circuloPosiciones[id][i][0];
		circulo.style.top = circuloPosiciones[id][i][1];

		imagen.appendChild(circulo);
	}
}

function cargarPosicionCirculos() {
	const guardado = localStorage.getItem("circuloPosiciones");

	if (guardado != null) {
		circuloPosiciones = JSON.parse(guardado);
	}
}