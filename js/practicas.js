const practicas = [
    {
        id: "1",

        titulo: "IDENTIFICACION DE LOS ELEMENTOS PRESENTES EN EL MODULO",

        objetivoGeneral:
            "Conocer los componentes presentes en el del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

        objetivosEspecificos: [
            "Identificar y contabilizar cada elemento presente en el Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Conocer la función que cumple cada elemento presente en el módulo."
        ],

        teoria: `
			<p>El Módulo Didáctico de Control de Caudal de Lazo Cerrado (Figura 1) se encuentra en el laboratorio de Instrumentación y Control de la UPTValencia y brinda la posibilidad a los estudiantes de las distintas carreras impartidas en la universidad de interactuar con un proceso de control real.</p>

			<h4>Figura 1. Módulo didáctico de control de caudal Cerrado</h4>
			<img src="img/fondo.jpg" />

			<p>El proceso del módulo didáctico tiene por objeto controlar el caudal en un sistema de tuberías, llevando el valor del caudal lo más cercano a un valor establecido (conocido como set-point o punto de consigna) por el operador del proceso.</p>

			<p>A continuación se describen los distintos elementos que conforman el módulo didáctico (excluyendo a aquellos pertenecientes al tablero de control del mismo):</p>

			<p><strong>Tanque de Suministro de Agua.</strong> Un tanque de agua es un contenedor diseñado para almacenar agua para su posterior uso en un proceso o para su consumo. El módulo cuenta con un tanque de 460 litros para almacenar el agua de todo el proceso.</p>

			<p><strong>Sistema de Tuberías de Agua.</strong> El módulo consta de un sistema de tuberías de hierro y de PVC para transportar el agua almacenada en el tanque. Estas tuberías son de color verde y tienen adheridas 4 tipos de etiquetas: “Limpieza”, “Suministro”, “Decapado” y “Agua”.</p>

			<p><strong>Válvulas Tipo Bola.</strong> Una válvula de tipo bola es una clase de llave de paso y su función es regular un fluido canalizado. El módulo cuenta con múltiples válvulas de este tipo, para así cortar o permitir el flujo de agua en caso de: ser necesario desmontar un instrumento para su mantenimiento, para llenar o vaciar el tanque y/o para permitir a los estudiantes estudiar el flujo del agua.</p>

			<p><strong>Bomba Centrifuga.</strong> Una bomba centrifuga es un tipo de bomba hidráulica y su fin es de aumentar la velocidad de los fluidos para que estos puedan desplazarse a grandes distancias. El módulo cuenta con una bomba centrifuga de 2 hp que se encarga de hacer circular el agua del tanque a través del sistema de tuberías.</p>

			<p><strong>Filtro de Línea de la Bomba Centrifuga.</strong> Se trata de un filtro hidráulico que se encuentra instalado en la tubería de succión de la bomba centrifuga. Su función es de retirar impurezas del agua para que estas no alcancen a los equipos e instrumentos del módulo y evitando así que estos se deterioren.</p>

			<p><strong>Selectores de Parada de Emergencia.</strong> Estos elementos de maniobra son interruptores eléctricos de dos posiciones. El módulo cuenta con 2 de ellos (uno junto a la válvula de control y otro junto a la bomba centrifuga) y son usados para detener la bomba centrifuga inmediatamente en caso de emergencia.</p>

			<p><strong>Placa Orificio.</strong> Este dispositivo se clasifica como un elemento primario y produce una diferencia de presión en el fluido, la cual es usada por un transmisor en el proceso para medir el caudal. El módulo cuenta con dos elementos primarios incluyendo la placa orificio.</p>

			<p><strong>Tubo Venturi.</strong> Este elemento primario es un tubo con un estrechamiento en su centro. Cuando un fluido pasa por el tubo venturi se crea una diferencia de presión que es usada por el transmisor del proceso para medir el caudal. Este es el segundo elemento primario del módulo.</p>

			<p><strong>Transmisor de Presión Diferencial.</strong> Este dispositivo se clasifica como un transmisor. Los transmisores utilizan un elemento primario para medir una variable física y transmitirla en forma de una señal estándar.</p>

			<p>El transmisor de presión diferencial del módulo mide la diferencia de presión causada ya sea por la placa orificio o por el tubo venturi; así determina el caudal en el sistema de tuberías y transmite dicho valor (en forma de una señal de 4 a 20 mA) al controlador electrónico del módulo.</p>

			<p><strong>Controlador Electrónico.</strong> Este dispositivo se clasifica como un controlador. Los controladores son instrumentos encargados de comparar la variable controlada del proceso con el valor deseado para dicha variable, para generar como señal de salida una corrección que será enviada al elemento final de control. El controlador del proceso es electrónico y está instalado en el tablero de control.</p>

			<p><strong>Convertidor I/P. </strong> Un convertidor es un dispositivo que recibe como entrada una señal estándar y la transforma en otro tipo de señal estándar equivalente. El convertidor I/P (convertidor corriente a presión) del módulo recibe la señal eléctrica (de 4 a 20 mA) de salida  del controlador y la transforma en una señal de presión neumática (de 3 a 15 psi) que es usada para accionar la válvula de control del módulo.</p>

			<p><strong>Sistema de Suministro Neumático.</strong> El módulo consta de un sistema de tuberías galvanizadas para transportar aire comprimido que se necesita para la válvula de control. Estas tuberías están pintadas de color azul.</p>

			<p><strong>Válvula de control.</strong> Una válvula de control es un tipo de válvula que controla el flujo de un fluido según la señal producida por un controlador. Estas válvulas se clasifican como un elemento final de control. La válvula de control del módulo es neumática y trabaja con una señal de 3 a 15 psi proporcionada por el convertidor I/P.</p>

			<p><strong>Presostato.</strong> Un presostato es un interruptor de presión que acciona un contacto eléctrico cuando un fluido a su entrada alcanza una presión preestablecida. El módulo cuenta con un presostato para detectar la presencia de aire comprimido en el sistema de suministro neumático.</p>

			<p>Ante la falta de aire comprimido (dicha situación se denomina en el módulo como un “fallo de aire”), la válvula de control se cerrara imprevistamente y esto podría forzar la bomba centrifuga al no haber retorno del agua hacia el tanque. Esto hará que la bomba entre en proceso de cavitación, ocasionándole daños. El presostato y la válvula solenoide evitan que esto suceda.</p>

			<p><strong>Válvula Solenoide.</strong> Una válvula solenoide es una válvula electromecánica de dos posiciones: abierta y cerrada. Cuando es energizada, se conmuta y cierra o abre el paso en una tubería. El módulo cuenta con una válvula solenoide normalmente cerrada para permitir el retorno del agua al tanque durante una falla de aire. Durante dicha falla (detectada gracias al presostato), se energiza la válvula y esta abre una tubería de retorno que se encuentra adyacente a la tubería de salida de la bomba, permitiendo que el agua se retorne al tanque.</p>

			<p><strong>Rotámetro.</strong> Un rotámetro es un instrumento indicador que mide el caudal volumétrico de un fluido que circula por un tubo cerrado. El módulo cuenta con un rotámetro que permite al operador leer el caudal en el sistema de tuberías, permitiéndole comprobar que el caudal este siendo controlado por los instrumentos del módulo.</p>

			<p><strong>Manómetro.</strong> Un manómetro es un instrumento indicador usado para la medición de presión de fluidos en tanques, recipientes o en tuberías. El módulo cuenta con múltiples manómetros, algunos en el sistema de suministro de aire y otros en el sistema de tuberías de agua.</p>

			<p>De todos los manómetros del módulo, dos resaltan debido a su propósito. Están instalados juntos al transmisor y están destinados a usarse para realizar mediciones de la presión del agua en los elementos primarios.</p>
		`,

        pasos: [
            {
                texto: "Señalar en la imagen con una “X” las válvulas tipo bola presentes en el módulo. (Presione una “X” y arrástrela para moverla).",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "22"
                },

                preguntas: [
                    "¿Cuántas válvulas tipo bola se encuentran en el módulo?",
                    "¿Qué clase de dispositivo es una válvula tipo bola?",
                    "¿Qué función cumple una válvula tipo bola?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” la placa orificio presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué clase de instrumento es una placa orificio?",
                    "¿Qué función cumple una placa de orificio?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el tubo venturi presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué clase de instrumento es un tubo venturi?",
                    "¿Qué función cumple un tubo venturi?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el rotámetro presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué clase de instrumento es un rotámetro?",
                    "¿Qué función cumple un rotámetro?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” la bomba centrifuga presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué tipo de elemento es una bomba centrifuga?",
                    "¿Qué función cumple una bomba centrifuga?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” la válvula de control.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué clase de instrumento es una válvula de control?",
                    "¿Qué función cumple una válvula de control?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” la válvula solenoide.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué tipo de elemento es una válvula solenoide?",
                    "¿Qué función cumple una válvula solenoide?"
                ]
            },

            {
                texto: "Señalar en la imagen  con una “X” los selectores de parada de emergencia.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "2"
                },

                preguntas: [
                    "¿Cuántos selectores de parada de emergencia se encuentran en el módulo?",
                    "¿Qué función cumple un selector de parada de emergencia?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el presostato presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué tipo de elemento es un presostato?",
                    "¿Qué función cumple un presostato?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el filtro de línea de la bomba centrifuga.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué tipo de elemento es un filtro de línea?",
                    "¿Qué función cumple un filtro de línea?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el convertidor I/P presente en el módulo.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué clase de instrumento es un convertidor I/P?",
                    "¿Qué función cumple un convertidor I/P?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el tanque de almacenamiento de agua.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué tipo de elemento es un tanque de almacenamiento de agua?",
                    "¿Qué función cumple un tanque de almacenamiento de agua?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” los manómetros.",

                imagen: {
                    src: "img/proceso/proceso_completo.png",
                    svg: "img/proceso/proceso_completo.svg",
                    circulos: "2"
                },

                preguntas: [
                    "¿Cuántos manómetros se encuentran en el módulo?",
                    "¿Qué clase de instrumento es un manómetro?",
                    "¿Qué función realizan los manómetros?"
                ]
            }
        ]
    },

    {
        id: "2",

        titulo: "IDENTIFICACION DE LOS ELEMENTOS DE MANIOBRA EN EL TABLERO",

        objetivoGeneral:
            "Conocer los elementos que conforman el tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

        objetivosEspecificos: [
            "Identificar los elementos de maniobra presentes en el tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Reconocer los elementos de protección presentes en el tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado."
        ],

        teoria: `
			<p>El tablero de control alberga la mayoría de los dispositivos eléctricos del módulo y constituye un centro de operación desde el cual los estudiantes o los profesores pueden poner en marcha el módulo. Desde él se pueden realizar diversas tareas:</p>

			<ul>
				<li><strong>Puesta en marcha y parada de la bomba centrifuga:</strong> El tablero cuenta con un selector y botones para controlar la bomba.</li>

				<li><strong>Ajuste del controlador y del set-point:</strong> El controlador electrónico en el tablero se encarga de guiar la válvula de control para  controlar el caudal. Desde él se puede configurar el caudal deseado (el punto de consigna o set-point).</li>

				<li><strong>Inspección de fallas que puedan surgir en el módulo:</strong> como un problema en el suministro eléctrico (bajo voltaje, sobre voltaje y pérdida de fase), sobrecarga en la bomba y falla de aire.</li>
			</ul>

			<p>La Figura 1 muestra la sección superior del tablero de control, donde se pueden observar los distintos elementos de maniobra que un operador puede usar.</p>

			<h4>Figura 1. Sección superior del tablero de control</h4>
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

			<p><strong>Breaker Principal.</strong> Este breaker permite el paso de corriente a todos los dispositivos eléctricos del módulo y funciona de protección contra corrientes elevadas (como aquellas ocasionadas por un cortocircuito). Si no se activa, el módulo no se podrá encender.</p>

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
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué función cumple el botón de parada de emergencia?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el selector de modo de operación.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué función cumple el selector de modo de operación?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el pulsador luminoso de encendido.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué función cumple el pulsador luminoso de encendido?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” o con O el pulsador luminoso de apagado.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué función cumple el pulsador luminoso de apagado?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” las luces indicadoras de fallo de aire, sobrecarga, control de proceso bloqueado y válvula solenoide presentes en el tablero.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "4"
                },

                preguntas: [
                    "¿Qué función cumplen las luces indicadoras en el tablero?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el controlador Venetrol 3000 presente en el tablero de control.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: ["¿Qué función cumple el controlador Venetrol 3000?"]
            },

            {
                texto: "Señalar en la imagen con una “X” el breaker principal del tablero.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: [
                    "¿Qué función cumple el breaker principal del tablero?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” los breakers de control.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "2"
                },

                preguntas: [
                    "¿Cuántos breakers de control hay en el tablero?",
                    "¿Cuál es la función de los breakers de control?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el protector de voltaje.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: ["¿Qué función cumple el protector de voltaje?"]
            },

            {
                texto: "Señalar en la imagen con una “X” los relés presentes en el tablero de control.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "2"
                },

                preguntas: [
                    "¿Cuántos relés hay en el tablero de control?",
                    "¿Qué función cumplen los relés?"
                ]
            },

            {
                texto: "Señalar en la imagen con una “X” el contactor.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: ["¿Qué función cumple el contactor?"]
            },

            {
                texto: "Señalar en la imagen con una “X” el relé térmico.",

                imagen: {
                    src: "img/tablero_completo.png",
                    svg: "img/tablero_completo.png",
                    circulos: "1"
                },

                preguntas: ["¿Qué función cumple el relé térmico?"]
            }
        ]
    },

    {
        id: "3",

        titulo: "PUESTA EN MARCHA Y PARADA DE LA BOMBA CENTRIFUGA",

        objetivoGeneral:
            "Conocer el procedimiento para la puesta en marcha y parada de la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado y sus modos de operación.",

        objetivosEspecificos: [
            "Conocer los breakers de protección del tablero de control y usarlos para hacer funcionar el Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Entender el funcionamiento del circuito encargado de controlar la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Instruirse en el uso de los tres modos de operación de la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado."
        ],

        teoria: `
			<p>El módulo de caudal cuenta con una bomba centrifuga para hacer circular el agua almacenada en el tanque. Dicha bomba puede ser puesta en marcha y puede pararse desde el tablero de control mediante el uso de un selector y dos botones pulsadores (los cuales integran luces indicadoras para informar el estado de la bomba).</p>

			<p>Antes de poder poner en marcha la bomba centrifuga o encender cualquier elemento del módulo didáctico, el tablero de control debe energizarse, para ello el tablero cuenta con tres breakers que deben activarse para que la corriente pueda ser suministrada:</p>

			<ul>
				<li><strong>Breaker Principal:</strong> suministra corriente a todo el tablero de control y al módulo en su totalidad.</li>

				<li><strong>Breaker de Control 1:</strong> suministra corriente a la sección superior del tablero de control, donde están localizados los elementos de maniobra como botones, luces, relés, etc.</li>

				<li><strong>Breaker de Control 2:</strong> suministra corriente a la sección inferior del tablero de control, en donde están localizados el controlador y la fuente de poder del transmisor de presión diferencial.</li>
			</ul>

			<p>Estos breakers cumplen una función de protección importante: protegen el circuito del daño provocado por un exceso de corriente (causado por alguna sobrecarga o por un cortocircuito).</p>

			<p>La Figura 1 muestra una sección simplificada del diagrama de escalera del tablero de control y la Tabla 1 es la leyenda de dicho diagrama. </p>

			<h4>Figura 1. Diagrama escalera simplificado del control de la bomba centrifuga</h4>

			<img src="img/practicas/3-figura-1.png" />

			<h4>Tabla 1. Leyenda del diagrama escalera simplificado</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
			</table>

			<p>El selector de 3 posiciones en el diagrama representa al selector de modo de operación. Al colocar el selector en la posición “manual” y se procede a presionar el botón START (pulsador luminoso de encendido) se energiza la bobina del contactor K1 (el cual pone en marcha la bomba) y la luz piloto L1 (luz piloto del pulsador luminoso de encendido). El contacto normalmente abierto K1 se cierra y este mantiene energizado al contactor K1 incluso luego de soltar el pulsador. Además, el contacto normalmente cerrado K1 se abre y apaga la luz L2 (luz piloto del pulsador de apagado).</p>

			<p>Si el selector es colocado en la posición “off” o si se presiona el botón STOP (pulsador luminoso de apagado) estando la bomba en marcha en el modo manual, se cortara la corriente hacia el contactor K1 y provocara la parada de la bomba, el apagado de la luz piloto de encendido y finalmente el encendido de la luz piloto de apagado.</p>

			<p>Si el selector es colocado en la posición “automático”, se energiza directamente al contactor K1 (y a la luz de encendido), se enciende la bomba y se apaga la luz de apagado; lo mismo que ocurría al presionar el botón de encendido durante el modo manual. Note que los botones de encendido y apagado no influyen en la bomba mientras el modo automático esté en uso.</p>

			<p>La Figura 2 representa una sección sin simplificar del diagrama escalera y la Tabla 2 constituye su leyenda. </p>

			<h4>Figura 2. Diagrama escalera del control de la bomba centrifuga</h4>

			<img src="img/practicas/3-figura-2.png" />

			<h4>Tabla 2. Leyenda del diagrama de escalera</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>R1</td>
					<td>Relé del Protector de Voltaje (220 V)</td>
				</tr>
				<tr>
					<td>S1</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S2</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S3</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>OL</td>
					<td>Relé Térmico</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
			</table>

			<p>Se pueden observar los elementos de maniobra del primer diagrama escalera, más otros elementos extras: una bobina R1 que pertenece al protector de voltaje del tablero, tres interruptores (S1, S2, S3) que corresponden a los interruptores de emergencia, y el contacto OL que pertenece al relé térmico usado para proteger la bomba contra sobrecargas de corriente.</p>
		`,

        pasos: [
            {
                texto: "Colocar el breaker principal en su posición de encendido (ON).",
                preguntas: ["¿Qué sucede si no se activa este breaker?"]
            },

            {
                texto: "Colocar el breaker de control N°1 en su posición de encendido (ON).",
                preguntas: [
                    "¿Qué cambio observó en las luces de los pulsadores de encendido y apagado?",
                    "¿Qué cambio observó en el protector de voltaje?",
                    "¿Qué sucede si no se activa este breaker?"
                ]
            },

            {
                texto: "Colocar el breaker de control N°2 en su posición de encendido (ON).",
                preguntas: [
                    "¿Qué cambios observó en el controlador electrónico?",
                    "¿Contra qué protegen los breakers al circuito?"
                ]
            },

            {
                texto: "Colocar el selector en la posición “MANUAL”.",
                preguntas: [
                    "¿Qué función cumple este selector?",
                    "¿Cuál es la función del modo manual?"
                ]
            },

            {
                texto: "Accionar el pulsador luminoso de encendido.",
                preguntas: [
                    "¿Qué funciona realiza este botón pulsador?",
                    "¿Para qué sirve la luz indicadora de este pulsador?"
                ]
            },

            {
                texto: "Accionar el pulsador luminoso de apagado.",
                preguntas: [
                    "¿Qué funciona realiza este botón pulsador?",
                    "¿Para qué sirve la luz indicadora de este pulsador?"
                ]
            },

            {
                texto: "Colocar el selector en la posición “OFF”.",
                preguntas: ["¿Qué función cumple el modo de operación off?"]
            },

            {
                texto: "Colocar el selector en la posición “AUTOMATICO”.",
                preguntas: [
                    "¿Qué ocurrió con la bomba centrifuga?",
                    "¿Qué función cumple el modo automático?"
                ]
            },

            {
                texto: "Intentar accionar los pulsadores luminosos de encendido y apagado.",
                preguntas: [
                    "¿La operación de la bomba centrifuga se vio afectada de alguna forma?"
                ]
            },

            {
                texto: "Apagar el tablero de control en su totalidad de la siguiente forma: colocar el selector de modo de operación en la posición “OFF” y colocar en la posición “OFF” el breaker de control N°2, el breaker de control N°1 y finalmente el breaker principal."
            }
        ]
    },

    {
        id: "4",

        titulo: "PARADA DE EMERGENCIA DE LA BOMBA CENTRÍFUGA",

        objetivoGeneral:
            "Conocer la función de los tres interruptores de emergencia disponibles en el Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

        objetivosEspecificos: [
            "Entender el funcionamiento del circuito encargado de la parada de emergencia de la bomba centrifuga del módulo didáctico de control de caudal de lazo cerrado.",

            "Instruirse en el uso de los tres interruptores de emergencia del módulo didáctico de control de caudal de lazo cerrado."
        ],

        teoria: `

			<p>El tablero de control del módulo didáctico cuenta con un botón de parada de emergencia en su sección superior. El módulo también dispone de dos interruptores localizados a la izquierda y a la derecha. Estos tres elementos de maniobra constituyen los interruptores de emergencia del módulo y tienen la función de parar instantáneamente la bomba centrifuga en caso una emergencia.</p>

			<p>La forma en la que estos interruptores logran su función se explicara por medio de la Figura 1 (y su leyenda en la Tabla 1), que representa la sección del diagrama de control encargada de controlar la bomba centrifuga. </p>

			<h4>Figura 1. Diagrama de control de la bomba con interruptores de emergencia</h4>

			<img src="img/practicas/4-figura-1.png"/>

			<h4>Tabla 1. Leyenda del diagrama de control</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>R1</td>
					<td>Relé del Protector de Voltaje (220 V)</td>
				</tr>
				<tr>
					<td>R3</td>
					<td>Relé N°2 (Relé de Control de Proceso Bloqueado)</td>
				</tr>
				<tr>
					<td>S1</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S2</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S3</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>OL</td>
					<td>Relé Térmico</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L5</td>
					<td>Luz de Control de Proceso Bloqueado</td>
				</tr>
			</table>

			<p>Se observan los interruptores S1, S2 y S3, que representan los interruptores de parada de emergencia. El circuito hace uso de los contactos normalmente cerrados de estos interruptores en serie con los elementos que ponen en marcha la bomba. Por lo tanto, al ser accionado cualquiera de los interruptores, se cortara cualquier posible conexión al contactor K1. Esto detendrá la bomba (en caso de que se háyase en marcha) e inhabilita al selector de modo de operación y a los pulsadores. De este modo, será imposible poner en marcha la bomba hasta que el interruptor en cuestión se coloque en su posición original.</p>

			<p>Cuando ningún interruptor se halle accionado, se energizara la bobina del relé R3  y esto apagara la luz indicadora L5 (luz de control de proceso bloqueado). El accionamiento de cualquiera de los interruptores provocara la desactivación de R3 y encenderá la luz de proceso bloqueado, dando una advertencia visual al operador.</p>
		`,

        pasos: [
            {
                texto: "Colocar el breaker principal en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°1 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°2 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el selector de modo de operación en la posición “AUTOMATICO”."
            },

            {
                texto: "Accionar el botón de parada de emergencia localizado en la parte superior del tablero de control.",

                preguntas: [
                    "¿Qué cambios observó en el módulo y en el tablero?",
                    "¿Qué función cumple la luz de control de proceso bloqueado?"
                ]
            },

            {
                texto: "Colocar el tablero en el modo de operación manual e intente poner en marcha la bomba centrifuga mediante los pulsadores de encendido y apagado.",

                preguntas: [
                    "¿Por qué la bomba no puede ponerse en marcha mientras el proceso está bloqueado?"
                ]
            },

            {
                texto: "Liberar el botón de parada de emergencia que accionó en el paso numero 5.",

                preguntas: ["¿Qué cambios observó?"]
            },

            {
                texto: "Repetir los pasos 5, 6 y 7 con los dos interruptores de emergencia restantes por separado, localizados a la izquierda y derecha del módulo.",

                preguntas: [
                    "¿Explique si existe alguna diferencia o similitud entre los tres interruptores de emergencia?",

                    "¿En qué ayuda tener un sistema de parada de emergencia para la bomba?"
                ]
            },

            {
                texto: "Apagar el tablero de control en su totalidad de la siguiente forma: colocar el selector de modo de operación en la posición “OFF” y colocar en la posición “OFF” el breaker de control N°2, el breaker de control N°1 y finalmente el breaker principal."
            }
        ]
    },

    {
        id: "5",

        titulo: "FALLA DE TENSION ELÉCTRICA EN EL MODULO DIDACTICO",

        objetivoGeneral:
            "Identificar una falla de tensión eléctrica en el tablero de Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

        objetivosEspecificos: [
            "Entender el funcionamiento del circuito de control durante una falla de tensión eléctrica.",

            "Conocer el comportamiento del Módulo Didáctico de Control de Caudal de Lazo Cerrado durante una falla de tensión eléctrica."
        ],

        teoria: `

			<p>El tablero de control dispone de un protector de voltaje que desempeña una función de seguridad bastante importante porque desconecta la electricidad del tablero cada vez que se presenten los siguientes problemas con el suministro eléctrico:</p>

			<ul>
				<li>Sobretensión.</li>
				<li>Baja tensión.</li>
				<li>Perdida de fase (conocida también como falla de fase).</li>
			</ul>

			<p>Cualquiera de las situaciones anteriores podría ocasionar daños a los equipos eléctricos del tablero de control, como por ejemplo: sobrecalentamiento, reducción de la vida útil y destrucción de los mismos. Otro ejemplo es la bomba centrifuga, donde dichos problemas provocaran un exceso de corriente y como resultado sobrecalentamiento, dañando el aislamiento entre sus bobinados.</p>

			<p>El protector de voltaje es capaz de desconectar los equipos durante una falla gracias a que posee en su interior un relé, el cual se energiza cuando la tensión sea normal y se desenergiza cuando una de las fallas mencionadas se presenta.</p>

			<p>La Figura 1 muestra una versión simplificada del diagrama de control del tablero y el Tabla 1 muestra su leyenda. La bobina R1 representa al protector de voltaje y note que este es alimentado con dos líneas de 120 V desfasadas 120°, ya que esté supervisa la tensión de 240 V del módulo. El contacto R1 pertenece al relé interno del protector.</p>

			<h4>Figura 1. Diagrama de control simplificado del tablero</h4>

			<img src="img/practicas/3-figura-2.png"/>

			<h4>Tabla 1. Leyenda del diagrama de control</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>R1</td>
					<td>Relé del Protector de Voltaje (220 V)</td>
				</tr>
				<tr>
					<td>S1</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S2</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S3</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>OL</td>
					<td>Relé Térmico</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
			</table>

			<p>Cuando la tensión del suministro eléctrico se encuentra en un rango seguro, el contacto normalmente abierto R1 se cierra  (y se enciende una luz roja en protector de voltaje denominada “on”) y permite el paso de corriente al resto del circuito para que trabaje con normalidad.</p>

			<p>Cuando se presenta una falla, por ejemplo, una sobretensión, el contacto R1 se abrirá (y se apagara la luz “on” del protector) y cortara la corriente al resto del circuito. Esto apagara todos los dispositivos de maniobra y la bomba instantáneamente. </p>
		`,

        pasos: [
            {
                texto: "Colocar el breaker principal en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°1 en su posición de encendido (ON).",

                preguntas: [
                    "¿Qué cambio observo en el protector de voltaje al encender este breaker?"
                ]
            },

            {
                texto: "Colocar el breaker de control N°2 en su posición de encendido (ON)."
            },

            {
                texto: "Abrir la pestaña “Fallas” de la página y activar la casilla “Falla de tensión eléctrica” para simular una falla con la tensión eléctrica.",

                preguntas: [
                    "¿Qué cambio observo en el protector de voltaje durante la falla?",

                    "¿Por qué es importante que un tablero de control cuente con un protector de voltaje?",

                    "¿Contra qué tipo de fallas de tensión protege el protector de voltaje?"
                ]
            },

            {
                texto: "Intentar poner en marcha la bomba colocando el selector de modo de operación en la posición “AUTOMATICO”.",

                preguntas: [
                    "A nivel del circuito de control ¿Por qué la bomba no se puede poner en marcha durante una falla de tensión?",

                    "¿De qué forma puede afectar una falla de tensión a la bomba centrifuga?"
                ]
            },

            {
                texto: "Remover la falla de tensión eléctrica dirigiéndose a la pestaña “Fallas” y desactivando la casilla “Falla de tensión eléctrica”.",

                preguntas: ["¿Se encendió la bomba centrifuga esta vez?"]
            },

            {
                texto: "Activar la falla de tensión nuevamente (como en el paso 4) estando la bomba centrifuga en marcha.",

                preguntas: [
                    "¿Qué destaca en las luces del tablero de control cuando el protector de voltaje está protegiendo al módulo?",

                    "¿Cómo puede el operador percatarse en el tablero de que una falla de tensión está ocurriendo?"
                ]
            },

            {
                texto: "Desactivar la falla de tensión eléctrica como en el paso 6."
            },

            {
                texto: "Apagar el tablero de control en su totalidad de la siguiente forma: colocar el selector de modo de operación en la posición “OFF” y colocar en la posición “OFF” el breaker de control N°2, el breaker de control N°1 y finalmente el breaker principal."
            }
        ]
    },

    {
        id: "6",

        titulo: "FALLA DE SOBRECARGA DE LA BOMBA CENTRIFUGA",

        objetivoGeneral:
            "Comprender el compartimiento del tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado durante una sobrecarga de corriente en la bomba centrifuga.",

        objetivosEspecificos: [
            "Entender como un relé térmico es capaz de proteger a la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Comprender como opera el relé térmico en el circuito de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Identificar una sobrecarga en la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado."
        ],

        teoria: `

			<p>El tablero de control del módulo cuenta con un relé térmico, cuya tarea es proteger a la bomba centrifuga contra sobrecargas de corriente. Un exceso de corriente en la bomba centrífuga puede dañarla a causa del sobrecalentamiento que se produciría. Si el sobrecalentamiento es excesivo, se dañara el aislamiento de las bobinas de la bomba y se estropeara.</p>

			<p>Cuando el relé térmico detecta una sobrecarga de corriente, este se dispara y su mecanismo interno conmuta una serie de contactos eléctricos usados para parar la bomba centrifuga y evitar que se dañe. Una vez que el relé térmico se dispara, su mecanismo continuara en esta posición de disparo hasta que se sea reiniciado manualmente por un operador.</p>

			<p>La Figura 1 muestra una versión simplificada del diagrama de control del tablero (y la Tabla 1 es su leyenda). Los contactos OL pertenecen al relé térmico y son accionados cuando se produce una sobrecarga de corriente en la bomba centrifuga.</p>

			<h4>Figura 1. Diagrama de control simplificado del tablero</h4>

			<img src="img/practicas/6-figura-1.png"/>

			<h4>Tabla 1. Leyenda del diagrama de control</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>R1</td>
					<td>Relé del Protector de Voltaje (220 V)</td>
				</tr>
				<tr>
					<td>R3</td>
					<td>Relé N°2 (Relé de Control de Proceso Bloqueado)</td>
				</tr>
				<tr>
					<td>S1</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S2</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S3</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>OL</td>
					<td>Relé Térmico</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L5</td>
					<td>Luz de Control de Proceso Bloqueado</td>
				</tr>
				<tr>
					<td>L6</td>
					<td>Luz de Sobrecarga</td>
				</tr>
			</table>

			<p>El disparo del relé térmico provoca que el contacto normalmente cerrado de OL se abra, lo que desconecta la bobina del contactor K1, produciendo la parada de la bomba centrifuga y evitando que los botones y el selector de modo de operación la puedan poner en marcha.</p>

			<p>Además, el disparo del relé térmico produce el cierre del contacto normalmente abierto de OL y esto hace que se encienda la luz indicadora L6, la cual corresponde a luz de sobrecarga y le informa al operador que se ha presentando una sobrecarga en la bomba centrífuga.</p>

			<p>Si el relé térmico es reiniciado manualmente por un operador, los contactos volverán a sus posiciones normales, la luz L6 se apagara y la operación de la bomba se restaurara.</p>
		`,

        pasos: [
            {
                texto: "Colocar el breaker principal en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°1 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°2 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el selector de modo de operación en la posición “MANUAL”."
            },

            {
                texto: "Poner en marcha la bomba centrífuga accionando el pulsador luminoso de encendido."
            },

            {
                texto: "Abrir la pestaña “Fallas” de la página y activar la casilla llamada “Sobrecarga en la bomba centrífuga” para simular una sobrecarga en la bomba centrífuga.",

                preguntas: [
                    "¿Qué cambios observó en el tablero de control y en el módulo?",
                    "¿Qué es una sobrecarga en la bomba centrífuga?"
                ]
            },

            {
                texto: "Intentar poner en marcha la bomba presionando el pulsador de encendido.",

                preguntas: [
                    "A nivel del circuito de control ¿Por qué no es posible poner en marcha la bomba?"
                ]
            },

            {
                texto: "Reiniciar el relé térmico haciendo clic sobre él.",

                preguntas: ["¿Para qué debe reiniciarse el relé térmico?"]
            },

            {
                texto: "Intentar poner en marcha la bomba presionando el pulsador luminoso de encendido.",

                preguntas: [
                    "¿Por qué esta vez la bomba si pudo ser puesta en marcha?",
                    "¿Qué función cumple el relé térmico a nivel de protección?"
                ]
            },

            {
                texto: "Apagar el tablero de control en su totalidad de la siguiente forma: colocar el selector de modo de operación en la posición “OFF” y colocar en la posición “OFF” el breaker de control N°2, el breaker de control N°1 y finalmente el breaker principal."
            }
        ]
    },

    {
        id: "7",

        titulo: "FALLA DE SUMINISTRO NEUMÁTICO",

        objetivoGeneral:
            "Identificar una falla de suministro neumático desde el tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

        objetivosEspecificos: [
            "Comprender como puede una falla en el suministro neumático perjudicar a la bomba centrifuga del Módulo Didáctico de Control de Caudal de Lazo Cerrado.",

            "Entender el comportamiento del circuito de control del tablero durante una falla de suministro neumático.",

            "Identificar la presencia de una falla de suministro neumático mediante las luces indicadoras del tablero de control del Módulo Didáctico de Control de Caudal de Lazo Cerrado"
        ],

        teoria: `

			<p>El módulo didáctico utiliza aire comprimido para accionar la válvula de control y así poder controlar el caudal. Este aire comprimido es producido por un compresor de aire lejos del laboratorio y es transportado por medio de tuberías de color azul hasta el módulo.</p>

			<p>La válvula de control del módulo es de acción inversa, es decir, la válvula se encuentra normalmente cerrada y se abrirá al inyectarle aire comprimido (observe la Figura 1 para diferenciar sus posiciones). Como consecuencia, la válvula se cerrara si por algún motivo el módulo deja de recibir aire comprimido. Esto crea una situación peligrosa en la que si la bomba centrífuga se encuentra en marcha y a la vez ocurre la mencionada situación (falla de suministro neumático), la válvula de control se cerrara y no existirá retorno del agua hacia el tanque y la bomba trabajara forzada y entrara en proceso de cavitación.</p>

			<h4>Figura 1. Posiciones de la válvula de control</h4>

			<img src="img/practicas/7-figura-1.png"/>

			<p>El módulo didáctico lidia con esta falla gracias a la válvula solenoide normalmente cerrada que se muestra en la Figura 2. Cuando esta válvula se acciona, abre un retorno para el agua y la bomba no correrá riesgos. El módulo cuenta con un presostato para detectar la presencia de aire en el suministro neumático.</p>

			<h4>Figura 2. Válvula solenoide del módulo didáctico</h4>

			<img src="img/practicas/7-figura-2.png"/>

			<p>La Figura 3 muestra el diagrama de control del tablero en su totalidad y la Tabla 1 muestra su leyenda. La sección que se encarga de la falla de aire está constituida por las luces indicadoras L3 (luz de válvula solenoide) y L4 (luz de fallo de aire); la bobina del relé R2 (que energiza la válvula solenoide); el contacto normalmente abierto R2 y el contactor normalmente cerrado K2 del presostato.</p>

			<h4>Figura 3. Diagrama de control del módulo didáctico de caudal de lazo cerrado</h4>

			<img src="img/practicas/7-figura-3.png"/>

			<h4>Tabla 1. Leyenda del diagrama de control</h4>

			<table>
				<tr>
					<th>Símbolo</th>
					<th>Significado</th>
				</tr>
				<tr>
					<td>L1</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Fase de 120 V</td>
				</tr>
				<tr>
					<td>N</td>
					<td>Neutro</td>
				</tr>
				<tr>
					<td>R1</td>
					<td>Relé del Protector de Voltaje (220 V)</td>
				</tr>
				<tr>
					<td>R2</td>
					<td>Relé N°1 (Relé de Control de la Válvula Solenoide)</td>
				</tr>
				<tr>
					<td>R3</td>
					<td>Relé N°2 (Relé de Control de Proceso Bloqueado)</td>
				</tr>
				<tr>
					<td>S1</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S2</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>S3</td>
					<td>Interruptor de Emergencia</td>
				</tr>
				<tr>
					<td>Selector</td>
					<td>Selector de Modo de Operación</td>
				</tr>
				<tr>
					<td>STOP</td>
					<td>Pulsador de Apagado</td>
				</tr>
				<tr>
					<td>START</td>
					<td>Pulsador de Encendido</td>
				</tr>
				<tr>
					<td>K1</td>
					<td>Contactor de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>OL</td>
					<td>Relé Térmico</td>
				</tr>
				<tr>
					<td>L1</td>
					<td>Luz Piloto de Encendido de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L2</td>
					<td>Luz Piloto de Apagado de la Bomba Centrifuga</td>
				</tr>
				<tr>
					<td>L3</td>
					<td>Luz de Válvula Solenoide</td>
				</tr>
				<tr>
					<td>L4</td>
					<td>Luz de Fallo de Aire</td>
				</tr>
				<tr>
					<td>L5</td>
					<td>Luz de Control de Proceso Bloqueado</td>
				</tr>
				<tr>
					<td>L6</td>
					<td>Luz de Sobrecarga</td>
				</tr>
			</table>

			<p>Ante la presencia de aire en el suministro neumático, el módulo trabaja correctamente y el presostato K1 se acciona (ya que detecta la presión del aire). Esto abre el contacto normalmente abierto K2 del presostato. Como resultado, queda aislada la sección del relé R2 y la válvula solenoide no se accionara y ninguna de las luces L3 y L4 se encenderá.</p>

			<p>Durante una falla de suministro neumático, la falta de presión hace que el presostato se desactive, por lo tanto, su contacto K2 vuelve a su posición normalmente cerrado y se enciende L4 (luz de fallo de aire) para dar una advertencia visual al operador.</p>

			<p>En caso de que la bomba centrífuga se encuentre en marcha o se ponga en marcha durante la falla de suministro de aire, el contacto normalmente cerrado K1 del contactor se encuentra cerrado y se energiza la bobina del relé R2. El contacto normalmente abierto R2 se cierra y energiza la válvula solenoide (permitiendo el retorno del agua desde la bomba hacia el tanque) y se enciende la luz indicadora L3 (luz de válvula solenoide) dando una advertencia visual al operador.</p>
		`,

        pasos: [
            {
                texto: "Colocar el breaker principal en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°1 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el breaker de control N°2 en su posición de encendido (ON)."
            },

            {
                texto: "Colocar el selector de modo de operación en la posición “MANUAL”."
            },

            {
                texto: "Poner en marcha la bomba centrífuga accionando el pulsador luminoso de encendido.",

                preguntas: [
                    "¿Está accionada la válvula solenoide?",
                    "¿En qué posición se encuentra la válvula de control?"
                ]
            },

            {
                texto: "Abrir la pestaña “Fallas” en el menú lateral de la página y activar la casilla “Falla de suministro de aire”.",

                preguntas: [
                    "¿En qué posición se encuentra la válvula de control durante una falla de suministro de aire?",

                    "¿Qué indica la luz de falla de aire?",

                    "¿Qué indica la luz de la válvula solenoide?",

                    "¿Por dónde se retorna el agua al tanque durante una falla de aire?"
                ]
            },

            {
                texto: "Detener la bomba accionando el pulsador de apagado.",

                preguntas: [
                    "¿Por qué se apaga la válvula solenoide al apagar la bomba centrifuga?",

                    "¿Por qué se cierra la válvula de control durante una falla de suministro de aire?",

                    "¿Por qué se necesita un retorno para el agua durante una falla de suministro de aire?"
                ]
            },

            {
                texto: "Remover la falla de suministro de aire dirigiéndose a la pestaña “Fallas” y desactivando la casilla “Falla de suministro de aire”."
            },

            {
                texto: "Apagar el tablero de control en su totalidad de la siguiente forma: colocar el selector de modo de operación en la posición “OFF” y colocar en la posición “OFF” el breaker de control N°2, el breaker de control N°1 y finalmente el breaker principal."
            }
        ]
    }
];
