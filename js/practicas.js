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

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "22"
				},

				preguntas: [
					"¿Cuántas válvulas tipo bola se encuentran en el modulo?",
					"¿Qué clase de dispositivo es una válvula tipo bola?",
					"¿Qué función cumple una válvula tipo bola?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la placa orificio presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué clase de instrumento es una placa orificio?",
					"¿Qué función cumple una placa de orificio?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el tubo venturi presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué clase de instrumento es un tubo venturi?",
					"¿Qué función cumple un tubo venturi?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el rotámetro presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué clase de instrumento es un rotámetro?",
					"¿Qué función cumple un rotámetro?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la bomba centrifuga presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué tipo de elemento es una bomba centrifuga?",
					"¿Qué función cumple una bomba centrifuga?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la válvula de control.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué clase de instrumento es una válvula de control?",
					"¿Qué función cumple una válvula de control?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” la válvula solenoide.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué tipo de elemento es una válvula solenoide?",
					"¿Qué función cumple una válvula solenoide?",
				],
			},

			{
				texto: "Señalar en la imagen  con una “X” los selectores de parada de emergencia.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "2"
				},

				preguntas: [
					"¿Cuántos selectores de parada de emergencia se encuentran en el modulo?",
					"¿Qué función cumple un selector de parada de emergencia?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el presostato presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué tipo de elemento es un presostato?",
					"¿Qué función cumple un presostato?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el filtro de línea de la bomba centrifuga.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué tipo de elemento es un filtro de línea?",
					"¿Qué función cumple un filtro de línea?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el convertidor I/P presente en el modulo.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué clase de instrumento es un convertidor I/P?",
					"¿Qué función cumple un convertidor I/P?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el tanque de almacenamiento de agua.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué tipo de elemento es un tanque de almacenamiento de agua?",
					"¿Qué función cumple un tanque de almacenamiento de agua?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” los manómetros.",

				imagen: {
					src: "img/proceso/proceso_completo.png",
					circulos: "2"
				},

				preguntas: [
					"¿Cuántos manómetros se encuentran en el módulo?",
					"¿Qué clase de instrumento es un manómetro?",
					"¿Qué función realizan los manómetros?",
				],
			},
		],
	},


	{
		id: "2",

		titulo: "IDENTIFICACION DE LOS ELEMENTOS DE MANIOBRA EN EL TABLERO",

		objetivoGeneral: "Conocer los elementos que conforman el tablero de control del Modulo Didáctico de Control de Caudal de Lazo Cerrado.",

		objetivosEspecificos: [
			"Identificar los elementos de maniobra presentes en el tablero de control del Modulo Didáctico de Control de Caudal de Lazo Cerrado.",

			"Reconocer los elementos de protección presentes en el tablero de control del Modulo Didáctico de Control de Caudal de Lazo Cerrado.",
		],

		teoria: `
			<p>El tablero de control alberga la mayoría de los dispositivos eléctricos del modulo y constituye un centro de operación desde el cual los estudiantes o los profesores pueden poner en marcha el modulo. Desde él se pueden realizar diversas tareas:</p>

			<ul>
				<li><strong>Puesta en marcha y parada de la bomba centrifuga:</strong> El tablero cuenta con un selector y botones para controlar la bomba.</li>

				<li><strong>Ajuste del controlador y del set-point:</strong> El controlador electrónico en el tablero se encarga de guiar la válvula de control para  controlar el caudal. Desde él se puede configurar el caudal deseado (el punto de consigna o set-point).</li>

				<li><strong>Inspección de fallas que puedan surgir en el modulo:</strong> como un problema en el suministro eléctrico (bajo voltaje, sobre voltaje y pérdida de fase), sobrecarga en la bomba y falla de aire.</li>
			</ul>

			<p>La Figura 1 muestra la sección superior del tablero de control, donde se pueden observar los distintos elementos de maniobra que un operador puede usar.</p>

			<h4>Figura 1. Sección superior del tablero de control.</h4>
			<img src="img/informacion/tablero_exterior_superior.jpg" />

			<p>A continuación se explican todos los elementos que constituyen el tablero de control:</p>

			<p><strong>Botón de parada de emergencia.</strong> Este botón cumple la misma función que los selectores de parada de emergencia. Este botón es un elemento de maniobra usado para parar la bomba centrifuga inmediatamente en caso de que se presente una emergencia.</p>

			<p><strong>Selector de Modo de Operación.</strong> Este selector es un elemento de maniobra y permite que el operador seleccione el modo en el que opera la bomba centrifuga. Existen tres modos de operación:</p>

			<ul>
				<li><strong>Modo Manual:</strong> En este modo la bomba se pondrá en marcha al accionar el pulsador luminoso de encendido y una vez en marcha se podrá parar accionando el pulsador luminoso de apagado.</li>

				<li><strong>Modo Apagado (OFF):</strong> La bomba se mantendrá apagada en todo momento y ningún elemento del tablero podrá ponerla en marcha.</li>

				<li><strong>Modo Automático:</strong> La bomba se pondrá en marcha automáticamente, es decir, la bomba se mantendrá en marcha en todo momento y ningún pulsador podrá detenerla.</li>
			</ul>

			<p><strong>Pulsador Luminoso de Encendido.</strong> Este pulsador es usado para poner en marcha la bomba centrifuga (cuando esta seleccionado el modo manual) y además cuenta con una luz de color verde que se encenderá siempre que la bomba este en marcha.</p>

			<p><strong>Pulsador Luminoso de Apagado.</strong> Este pulsador es usado para parar la bomba centrifuga (cuando esta seleccionado el modo manual) y además cuenta con una luz de color rojo que se encenderá siempre que la bomba centrifuga este detenida.</p>

			<p><strong>Luz de Fallo de Aire.</strong> Esta luz indicadora de color amarillo informa cuando se presenta una falla de aire, lo cual representa una situación riesgosa que provocara el cierre de la válvula de control del proceso.</p>

			<p><strong>Luz de Sobrecarga.</strong> Esta luz indicadora de color rojo informa cuando el relé térmico se ha accionado debido a un exceso de corriente en la bomba centrifuga. Cuando se presenta esta situación es imposible poner en marcha la bomba nuevamente sin antes reiniciar manualmente el relé térmico (con su botón “reset”).</p>

			<p><strong>Luz de Control de Proceso Bloqueado.</strong> Es una luz indicadora de color blanco que informa el accionamiento de cualquiera de los tres interruptores de emergencia, lo cual produce la parada inmediata de la bomba centrifuga. La bomba no podrá ser puesta en marcha mientras alguno de los interruptores este accionado.</p>

			<p><strong>Luz de Válvula Solenoide.</strong> Esta luz indicadora de color amarillo se encenderá siempre que la válvula solenoide del proceso sea accionada durante una falla de aire y a la vez estando la bomba centrífuga en marcha.</p>

			<p><strong>Controlador Electrónico.</strong> La pantalla del controlador y sus botones permiten al operador cambiar el set-point (este procedimiento debe buscarse en su manual de operación). El controlador compara la señal del transmisor (que representa el caudal actual) con el set-point asignado (el caudal deseado) para así producir una señal de salida que accionara la válvula de control, haciendo que el caudal se acerca lo más posible al set-point.</p>

			<p><strong>Breaker Principal.</strong> Este breaker permite el paso de corriente a todos los dispositivos eléctricos del modulo y funciona de protección contra corrientes elevadas (como aquellas ocasionadas por un cortocircuito). Si no se activa, el modulo no se podrá encender.</p>

			<p><strong>Breaker de Control N°1.</strong> Este breaker permite el paso de corriente a todos los dispositivos de la sección superior del tablero. Si no se activa, no se podrá poner en marcha la bomba centrifuga y tampoco funcionaran las luces y botones del tablero.</p>

			<p><strong>Breaker de Control N°2.</strong> Este breaker permite el paso de corriente a la sección inferior del tablero de control. De no activarse, no se suministrara corriente al controlador electrónico, a la fuente de 30 V DC del transmisor de presión diferencial ni al convertidor I/P.</p>

			<p><strong>Protector de Voltaje.</strong> Este dispositivo protege el tablero de control contra fallas con el suministro eléctrico, específicamente en caso de una sobretensión, una baja tensión o una pérdida de fase.</p>

			<p><strong>Relé N°1.</strong> Este relé es usado por el circuito de control del tablero para suministrar corriente a la válvula solenoide y a la luz de la válvula solenoide durante una falla de suministro neumático.</p>

			<p><strong>Relé N°2.</strong> Es usado por el circuito de control del tablero para encender la luz de control de proceso bloqueado cuando alguno de los interruptores de emergencia se accione.</p>

			<p><strong>Contactor.</strong> Este elemento de maniobra es un contactor trifásico que permite o interrumpe el suministro eléctrico a la bomba centrífuga. El circuito de control del tablero gobierna la activación de este contactor.</p>

			<p><strong>Relé Térmico.</strong> Este dispositivo protege a la bomba centrifuga contra sobrecargas de corriente. Al dispararse el rete térmico, desconecta la bomba centrífuga y se enciende la luz de sobrecarga del tablero.</p>

			<p>Un exceso de corriente en la bomba puede dañarla a causa del sobrecalentamiento que se produciría, dañando el aislamiento entre sus bobinados. </p>
		`,

		pasos: [
			{
				texto: "Señalar en la imagen con una “X” el botón de parada de emergencia presente en el tablero de control.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el botón de parada de emergencia?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el selector de modo de operación.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el selector de modo de operación?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el pulsador luminoso de encendido.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el pulsador luminoso de encendido?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” o con O el pulsador luminoso de apagado.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el pulsador luminoso de apagado?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” las luces indicadoras de fallo de aire, sobrecarga, control de proceso bloqueado y válvula solenoide presentes en el tablero.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "4"
				},

				preguntas: [
					"¿Qué función cumplen las luces indicadoras en el tablero?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el controlador Venetrol 3000 presente en el tablero de control.",

				imagen: {
					src: "img/tablero_exterior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el controlador Venetrol 3000?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el breaker principal del tablero.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el breaker principal del tablero?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” los breakers de control.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "2"
				},

				preguntas: [
					"¿Cuántos breakers de control hay en el tablero?",
					"¿Cuál es la función de los breakers de control?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el protector de voltaje.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el protector de voltaje?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” los relés presentes en el tablero de control.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "2"
				},

				preguntas: [
					"¿Cuántos relés hay en el tablero de control?",
					"¿Qué función cumplen los relés?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el contactor.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el contactor?",
				],
			},

			{
				texto: "Señalar en la imagen con una “X” el relé térmico.",

				imagen: {
					src: "img/tablero_interior.png",
					circulos: "1"
				},

				preguntas: [
					"¿Qué función cumple el relé térmico?",
				],
			},



		],
	},
];