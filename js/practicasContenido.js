const pestanasContenedor = document.querySelector("#practicasArea .pestanas");
const practicasContenedor = document.querySelector(".practica-contenido");

if (pestanasContenedor) {
	inicializarPestanas();
} else {
	const contenedor = document.querySelector("#practicaContenido");
	const parametrosURL = new URLSearchParams(window.location.search);
	const id = parametrosURL.get("id");
	const practica = practicas.find(valor => valor.id === id);
	mostrarPractica(practica, contenedor);
}

function inicializarPestanas() {
	practicas.forEach(practica => {
		const {
			id
		} = practica;

		const idCompleto = `practica${id}`;

		// Crear pestana
		if (pestanasContenedor != null) {
			const pestana = document.createElement("button");

			pestana.textContent = `Practica ${id}`;
			pestana.classList.add("pestana", "boton");
			pestana.setAttribute("for", idCompleto);
			pestana.setAttribute("type", "practicas");
			pestanasContenedor.appendChild(pestana);
		}

		const contenido = document.createElement("div");
		contenido.id = idCompleto;

		mostrarPractica(practica, contenido);

	});
}

function mostrarPractica(practica, contenido) {
	const {
			id,
			titulo,
			objetivoGeneral,
			objetivosEspecificos,
			teoria,
			pasos
		} = practica;

	const idCompleto = `practica${id}`;

	contenido.id = idCompleto;

	// 			Rellenar informacion

	// Titulo
	contenido.innerHTML += `
		<h2>Practica N°${id} ${titulo}</h2>
		<br>
	`;

	// Objetivo general
	contenido.innerHTML += `
		<h3>Objetivo General</h3>

		<p>${objetivoGeneral}</p>
	`;

	// Objetivos especificos
	contenido.innerHTML += `
		<h3>Objetivo General</h3>

		<ol>
			${
				objetivosEspecificos.map(texto => {
					return `<li>${texto}</li>`;
				}).join("")
			}
		</ol>
	`;

	// Teoria
	if (pestanasContenedor) {
		contenido.innerHTML += `
			<h3>Teoría</h3>

			${teoria}
		`;
	}

	// Procedimiento
	contenido.innerHTML += `
		<h3>Preguntas</h3>
	`;

	const lista = document.createElement("ol");

	pasos.forEach((paso, pasoIndice) => {
		const { texto, preguntas, imagen } = paso;

		// Crear un elemento de lista
		const li = document.createElement("li");
		li.textContent = texto;

		// Crear una sublista para las preguntas
		const subLista = document.createElement("ol");

		// Crear imagen del proceso si se requiere
		if (imagen) {
			const { src, circulos } = imagen;

			li.innerHTML += `
			<div
				class="proceso-imagen"
				data-imagen-id="${idCompleto}_${pasoIndice}"
				${circulos ? `data-cantidad="${circulos}"` : ""}
			">
	    		<img src="${src}" alt="">
	    	</div>`;
		}

		if (preguntas) {
			// Crear las preguntas
			preguntas.forEach((pregunta, preguntaIndice) => {
				// Crear un elemento de lista para la pregunta
				const li = document.createElement("li");
				li.textContent = pregunta;

				// Crear el textarea para la pregunta
				const textarea = document.createElement(pestanasContenedor ? "textarea" : "p");
				if (!pestanasContenedor) {
					textarea.classList.add("respuesta");
				}
				textarea.setAttribute("placeholder", "Escriba su respuesta aquí…");
				textarea.setAttribute("preguntaId", `${idCompleto}_${pasoIndice}_${preguntaIndice}`);

				// Cargar input
				const valor = localStorage.getItem(idCompleto);

				if (valor != null) {
					textarea.value = valor;
				}

				li.appendChild(textarea);
				subLista.appendChild(li);
			});
		}

		li.appendChild(subLista);
		lista.appendChild(li);
	});

	contenido.appendChild(lista);

	if (pestanasContenedor) {
		const footer = document.createElement("footer");

		contenido.innerHTML += `
			<br>

			<h3>Finalizar</h3>
			<p>A continuación puede guardar o imprimir los resultados escritos en la práctica.</p>

			<div class="boton-imprimir-padre">
				<a class="boton-imprimir boton" href="practica.html?id=${id}" target="_blank">Imprimir</a>
			</div>
		`;
	}
	
	if (practicasContenedor) {
		practicasContenedor.appendChild(contenido);
	}
}