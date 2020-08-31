const preguntas = document.querySelectorAll("[preguntaId]");

for (input of preguntas) {
	const valor = localStorage.getItem(input.getAttribute("preguntaId"));

	if (valor != null) {
		input.textContent = valor;
	}
}

print();