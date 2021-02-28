const practicas = [
	{
		id: "1",

		titulo: "IDENTIFICACION DE LOS ELEMENTOS PRESENTES EN EL MODULO",

		objetivoGeneral: "Conocer los componentes presentes en el del Modulo Didáctico de Control de Caudal de Lazo Cerrado.",

		objetivosEspecificos: [
			"Identificar y contabilizar cada elemento presente en el Modulo Didáctico de Control de Caudal de Lazo Cerrado.",

			"Conocer la función que cumple cada elemento presente en el modulo.",
		],

		teoria: `
			<p>El Modulo Didáctico de Control de Caudal de Lazo Cerrado (Figura 1) se encuentra en el laboratorio de Instrumentación y Control de la UPTValencia y brinda la posibilidad a los estudiantes de las distintas carreras impartidas en la universidad de interactuar con un proceso de control real.</p>

			<h4>Figura 1. Modulo didáctico de control de caudal Cerrado.</h4>
			<img src="img/fondo.jpg" />

			<p>El proceso del modulo didáctico tiene por objeto controlar el caudal en un sistema de tuberías, llevando el valor del caudal lo más cercano a un valor establecido (conocido como set-point o punto de consigna) por el operador del proceso.</p>

			<p>A continuación se describen los distintos elementos que conforman el modulo didáctico (excluyendo a aquellos pertenecientes al tablero de control del mismo):</p>

			<p><strong>Tanque de Suministro de Agua.</strong> Un tanque de agua es un contenedor diseñado para almacenar agua para su posterior uso en un proceso o para su consumo. El modulo cuenta con un tanque de 460 litros para almacenar el agua de todo el proceso.</p>

			<p><strong>Sistema de Tuberías de Agua.</strong> El modulo consta de un sistema de tuberías de hierro y de PVC para transportar el agua almacenada en el tanque. Estas tuberías son de color verde y tienen adheridas 4 tipos de etiquetas: “Limpieza”, “Suministro”, “Decapado” y “Agua”.</p>

			<p><strong>Válvulas Tipo Bola.</strong> Una válvula de tipo bola es una clase de llave de paso y su función es regular un fluido canalizado. El modulo cuenta con múltiples válvulas de este tipo, para así cortar o permitir el flujo de agua en caso de: ser necesario desmontar un instrumento para su mantenimiento, para llenar o vaciar el tanque y/o para permitir a los estudiantes estudiar el flujo del agua.</p>

			<p><strong>Bomba Centrifuga.</strong> Una bomba centrifuga es un tipo de bomba hidráulica y su fin es de aumentar la velocidad de los fluidos para que estos puedan desplazarse a grandes distancias. El modulo cuenta con una bomba centrifuga de 2 hp que se encarga de hacer circular el agua del tanque a través del sistema de tuberías.</p>

			<p><strong>Filtro de Línea de la Bomba Centrifuga.</strong> Se trata de un filtro hidráulico que se encuentra instalado en la tubería de succión de la bomba centrifuga. Su función es de retirar impurezas del agua para que estas no alcancen a los equipos e instrumentos del modulo y evitando así que estos se deterioren.</p>

			<p><strong>Selectores de Parada de Emergencia.</strong> Estos elementos de maniobra son interruptores eléctricos de dos posiciones. El modulo cuenta con 2 de ellos (uno junto a la válvula de control y otro junto a la bomba centrifuga) y son usados para detener la bomba centrifuga inmediatamente en caso de emergencia.</p>

			<p><strong>Placa Orificio.</strong> Este dispositivo se clasifica como un elemento primario y produce una diferencia de presión en el fluido, la cual es usada por un transmisor en el proceso para medir el caudal. El modulo cuenta con dos elementos primarios incluyendo la placa orificio.</p>

			<p><strong>Tubo Venturi.</strong> Este elemento primario es un tubo con un estrechamiento en su centro. Cuando un fluido pasa por el tubo venturi se crea una diferencia de presión que es usada por el transmisor del proceso para medir el caudal. Este es el segundo elemento primario del modulo.</p>

			<p><strong>Transmisor de Presión Diferencial.</strong> Este dispositivo se clasifica como un transmisor. Los transmisores utilizan un elemento primario para medir una variable física y transmitirla en forma de una señal estándar.</p>

			<p>El transmisor de presión diferencial del modulo mide la diferencia de presión causada ya sea por la placa orificio o por el tubo venturi; así determina el caudal en el sistema de tuberías y transmite dicho valor (en forma de una señal de 4 a 20 mA) al controlador electrónico del modulo.</p>

			<p><strong>Controlador Electrónico.</strong> Este dispositivo se clasifica como un controlador. Los controladores son instrumentos encargados de comparar la variable controlada del proceso con el valor deseado para dicha variable, para generar como señal de salida una corrección que será enviada al elemento final de control. El controlador del proceso es electrónico y está instalado en el tablero de control.</p>

			<p><strong>Convertidor I/P. </strong> Un convertidor es un dispositivo que recibe como entrada una señal estándar y la transforma en otro tipo de señal estándar equivalente. El convertidor I/P (convertidor corriente a presión) del modulo recibe la señal eléctrica (de 4 a 20 mA) de salida  del controlador y la transforma en una señal de presión neumática (de 3 a 15 psi) que es usada para accionar la válvula de control del modulo.</p>

			<p><strong>Sistema de Suministro Neumático.</strong> El modulo consta de un sistema de tuberías galvanizadas para transportar aire comprimido que se necesita para la válvula de control. Estas tuberías están pintadas de color azul.</p>

			<p><strong>Válvula de control.</strong> Una válvula de control es un tipo de válvula que controla el flujo de un fluido según la señal producida por un controlador. Estas válvulas se clasifican como un elemento final de control. La válvula de control del modulo es neumática y trabaja con una señal de 3 a 15 psi proporcionada por el convertidor I/P.</p>

			<p><strong>Presostato.</strong> Un presostato es un interruptor de presión que acciona un contacto eléctrico cuando un fluido a su entrada alcanza una presión preestablecida. El modulo cuenta con un presostato para detectar la presencia de aire comprimido en el sistema de suministro neumático.</p>

			<p>Ante la falta de aire comprimido (dicha situación se denomina en el modulo como un “fallo de aire”), la válvula de control se cerrara imprevistamente y esto podría forzar la bomba centrifuga al no haber retorno del agua hacia el tanque. Esto hará que la bomba entre en proceso de cavitación, ocasionándole daños. El presostato y la válvula solenoide evitan que esto suceda.</p>

			<p><strong>Válvula Solenoide.</strong> Una válvula solenoide es una válvula electromecánica de dos posiciones: abierta y cerrada. Cuando es energizada, se conmuta y cierra o abre el paso en una tubería. El modulo cuenta con una válvula solenoide normalmente cerrada para permitir el retorno del agua al tanque durante una falla de aire. Durante dicha falla (detectada gracias al presostato), se energiza la válvula y esta abre una tubería de retorno que se encuentra adyacente a la tubería de salida de la bomba, permitiendo que el agua se retorne al tanque.</p>

			<p><strong>Rotámetro.</strong> Un rotámetro es un instrumento indicador que mide el caudal volumétrico de un fluido que circula por un tubo cerrado. El modulo cuenta con un rotámetro que permite al operador leer el caudal en el sistema de tuberías, permitiéndole comprobar que el caudal este siendo controlado por los instrumentos del modulo.</p>

			<p><strong>Manómetro.</strong> Un manómetro es un instrumento indicador usado para la medición de presión de fluidos en tanques, recipientes o en tuberías. El modulo cuenta con múltiples manómetros, algunos en el sistema de suministro de aire y otros en el sistema de tuberías de agua.</p>

			<p>De todos los manómetros del modulo, dos resaltan debido a su propósito. Están instalados juntos al transmisor y están destinados a usarse para realizar mediciones de la presión del agua en los elementos primarios.</p>
		`,

		pasos: [
			{
				texto: "Señalar en la imagen con una “X” las válvulas tipo bola presentes en el modulo. (Presione una “X” y arrástrela para moverla).",

				procesoCirculos: "22",

				preguntas: [
					"¿Cuántas válvulas tipo bola se encuentran en el modulo?",
					"¿Qué clase de dispositivo es una válvula tipo bola?",
					"¿Qué función cumple una válvula tipo bola?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la placa orificio presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué clase de instrumento es una placa orificio?",
					"¿Qué función cumple una placa de orificio?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el tubo venturi presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué clase de instrumento es un tubo venturi?",
					"¿Qué función cumple un tubo venturi?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el rotámetro presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué clase de instrumento es un rotámetro?",
					"¿Qué función cumple un rotámetro?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la bomba centrifuga presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué tipo de elemento es una bomba centrifuga?",
					"¿Qué función cumple una bomba centrifuga?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la válvula de control.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué clase de instrumento es una válvula de control?",
					"¿Qué función cumple una válvula de control?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la válvula solenoide.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué tipo de elemento es una válvula solenoide?",
					"¿Qué función cumple una válvula solenoide?",
				],
			},

			{
				texto: "Señalar en la imagen  con una “X” los selectores de parada de emergencia.",

				procesoCirculos: "2",

				preguntas: [
					"¿Cuántos selectores de parada de emergencia se encuentran en el modulo?",
					"¿Qué función cumple un selector de parada de emergencia?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el presostato presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué tipo de elemento es un presostato?",
					"¿Qué función cumple un presostato?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el filtro de línea de la bomba centrifuga.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué tipo de elemento es un filtro de línea?",
					"¿Qué función cumple un filtro de línea?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el convertidor I/P presente en el modulo.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué clase de instrumento es un convertidor I/P?",
					"¿Qué función cumple un convertidor I/P?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el tanque de almacenamiento de agua.",

				procesoCirculos: "1",

				preguntas: [
					"¿Qué tipo de elemento es un tanque de almacenamiento de agua?",
					"¿Qué función cumple un tanque de almacenamiento de agua?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” los manómetros.",

				procesoCirculos: "2",

				preguntas: [
					"¿Cuántos manómetros se encuentran en el módulo?",
					"¿Qué clase de instrumento es un manómetro?",
					"¿Qué función realizan los manómetros?",
				],
			},
		],
	},
];