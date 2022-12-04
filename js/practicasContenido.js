const pestanasContenedor = document.querySelector("#practicasArea .pestanas");
const practicasContenedor = document.querySelector(".practica-centro");

let imprimiendo = !pestanasContenedor;
let usarImg = (!imprimiendo && tienePantallaTactil) || imprimiendo;

if (pestanasContenedor) {
  inicializarPestanas();
} else {
  imprimiendo = true;

  const contenedor = document.querySelector("#practicaContenido");
  const parametrosURL = new URLSearchParams(window.location.search);
  const id = parametrosURL.get("id");
  const practica = practicas.find((valor) => valor.id === id);
  mostrarPractica(practica, contenedor);
}

function inicializarPestanas() {
  let isFirst = false;

  practicas.forEach((practica) => {
    const { id } = practica;

    const idCompleto = `practica${id}`;

    // Crear pestana
    if (pestanasContenedor != null) {
      const pestana = document.createElement("button");

      pestana.textContent = `Práctica ${id}`;
      pestana.classList.add("pestana", "boton");
      pestana.setAttribute("for", idCompleto);
      pestana.setAttribute("type", "practicas");
      pestana.setAttribute("data-pregunta-id", id);
      pestanasContenedor.appendChild(pestana);

      // Mostrar la primera pestaña por defecto
      if (!isFirst) {
        pestana.setAttribute("default", true);
        isFirst = true;
      }
    }

    const contenido = document.createElement("div");
    contenido.id = idCompleto;

    mostrarPractica(practica, contenido);
  });
}

function mostrarPractica(practica, contenido) {
  const { id, titulo, objetivoGeneral, objetivosEspecificos, teoria, pasos } =
    practica;

  const idCompleto = `practica${id}`;

  contenido.id = idCompleto;

  // 			Rellenar informacion

  // Titulo
  contenido.innerHTML += `
		<h2>Práctica N°${id} ${titulo}</h2>
		<br>
	`;

  // Objetivo general
  contenido.innerHTML += `
		<h3>Objetivo General</h3>

		<p>${objetivoGeneral}</p>
	`;

  // Objetivos especificos
  contenido.innerHTML += `
		<h3>Objetivos Específicos</h3>

		<ol>
			${objetivosEspecificos
        .map((texto) => {
          return `<li>${texto}</li>`;
        })
        .join("")}
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
  lista.style.marginLeft = "0";

  pasos.forEach((paso, pasoIndice) => {
    const { texto, preguntas, imagen } = paso;

    // Crear un elemento de lista
    const li = document.createElement("li");
    li.textContent = texto;

    // Crear una sublista para las preguntas
    const subLista = document.createElement("ol");

    // Crear imagen del proceso si se requiere
    if (imagen) {
      const { src, svg, circulos } = imagen;

      const imagenId = `imagen_${idCompleto}_${pasoIndice}`;
      const imagenUrl =
        (tienePantallaTactil && pestanasContenedor && svg) || src;

      let html = `
				<div class="pregunta-img-contendor">
	    	`;

      if (pestanasContenedor && tienePantallaTactil) {
        html += `
		    		<div>
						<button
							class="boton agregar"
							data-imagen-id="${imagenId}"
						>
							Agregar X
						</button>
						<button
							class="boton eliminar"
							data-imagen-id="${imagenId}"
						>
							Eliminar X
						</button>
					</div>
		    	`;
      }

      html += `
					<div
						id="${imagenId}"
						class="proceso-imagen-padre"
						data-imagen-id="${imagenId}"
						${circulos ? `data-cantidad="${circulos}"` : ""}
                        data-imagen-src="${imagenUrl}"
					>
                        ${
                          !usarImg
                            ? '<canvas class="proceso-imagen-zoom"></canvas>'
                            : ""
                        }

                        ${
                          usarImg
                            ? `<img src="${imagenUrl}" class="proceso-imagen" data-imagen-src="${imagenUrl}">
                                <span class="x-colocadas">Cantidad de X colocadas: <span class="x-numero">0</span></span>`
                            : `<canvas class="proceso-imagen" data-imagen-src="${imagenUrl}">`
                        }
                        
			    		
			    	</div>
		    	</div>
	    	`;

      li.innerHTML += html;
    }

    if (preguntas) {
      // Crear las preguntas
      preguntas.forEach((pregunta, preguntaIndice) => {
        // Crear un elemento de lista para la pregunta
        const li = document.createElement("li");
        li.textContent = pregunta;

        // Crear el textarea para la pregunta
        const textarea = document.createElement(
          pestanasContenedor ? "textarea" : "p"
        );
        if (!pestanasContenedor) {
          textarea.classList.add("respuesta");
        }
        textarea.setAttribute("placeholder", "Escriba su respuesta aquí…");
        textarea.setAttribute(
          "preguntaId",
          `${idCompleto}_${pasoIndice}_${preguntaIndice}`
        );
        textarea.setAttribute("data-pregunta-id", id);

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
			<div data-practica-id=${id} data-practica-incompleta class="card bg-danger">
				<p class="text-center">Debe responder todas las preguntas de la práctica para poder imprimirla.</p>
			</div>

			<div data-practica-id=${id} data-practica-completa class="hide">
				<p>A continuación puede guardar o imprimir los resultados escritos en la práctica.</p>
				<div class="boton-imprimir-padre">
					<a class="boton-imprimir boton" href="practica.html?id=${id}" target="_blank">Imprimir</a>
				</div>
			</div>
		`;
  }

  if (practicasContenedor) {
    practicasContenedor.appendChild(contenido);
  }
}
