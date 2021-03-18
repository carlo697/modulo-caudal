const procesoImagenes = document.querySelectorAll(".proceso-imagen");
let circuloPosiciones = [];

cargarCirculos();

function cargarCirculos () {
	cargarPosicionCirculos();

	for (let procesoImagen of procesoImagenes) {
		agregarCirculos(procesoImagen);
	}
}

function agregarCirculos(imagen) {
	const id = imagen.getAttribute("data-imagen-id");

	let conjunto = circuloPosiciones.find(item => item.id === id);

	if (!conjunto) {
		circuloPosiciones.push({
			id,
			circulos: [],
		});
	}

	conjunto = circuloPosiciones.find(item => item.id === id);

	for (var i = 0; i < conjunto.circulos.length; i++) {
		const circulo = document.createElement("div");

		circulo.classList.add("proceso-circulo");
		circulo.textContent = "x";
		circulo.setAttribute("data-padre", id);

		circulo.style.left = conjunto.circulos[i][0];
		circulo.style.top = conjunto.circulos[i][1];

		imagen.appendChild(circulo);
	}
}

function cargarPosicionCirculos() {
	const guardado = localStorage.getItem("circuloPosiciones");

	if (guardado != null) {
		circuloPosiciones = JSON.parse(guardado);
	}
}