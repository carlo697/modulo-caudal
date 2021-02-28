const preguntas = document.querySelectorAll("[preguntaId]");
const fecha = document.querySelector("#fecha");

cargarDatos();
actualizarFecha();

function cargarDatos() {
	for (input of preguntas) {
		const valor = localStorage.getItem(input.getAttribute("preguntaId"));

		if (valor != null) {
			input.textContent = valor;
		}

		if (!valor) {
			input.textContent = "Esta pregunta no fue respondida.";
			input.classList.add("alerta");
		}
	}
}

function actualizarFecha() {
	const date = new Date();

	const dia = date.getDate();
	let mes = date.getMonth() + 1;
	if (mes < 10) {
		mes = "0" + mes;
	}
	const year = date.getFullYear();
	
	fecha.textContent = `${dia}-${mes}-${year}`;
}

window.onload = () => {
	print();
}