const preguntas = document.querySelectorAll("[preguntaId]");

for (input of preguntas) {
	const valor = localStorage.getItem(input.getAttribute("preguntaId"));

	if (valor != null) {
		input.textContent = valor;
	}
}

const fecha = document.querySelector("#fecha");
const date = new Date();

const dia = date.getDate();
let mes = date.getMonth() + 1;
if (mes < 10) {
	mes = "0" + mes;
}
const year = date.getFullYear();

fecha.textContent = `${dia}-${mes}-${year}`;


print();

console.log(date)