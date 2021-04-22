const db = [
	{
		id: "tanque",
		titulo: "Tanque de Suministro de Agua",
		contenido: `
			<p>El proceso del modulo didáctico consta de tuberías de hierro y de PVC para transportar agua y el caudal es controlado por medio de distintos instrumentos instalados en el modulo.</p>
			<p>El Tanque de Suministro de Agua (Figura 1) tiene la tarea de almacenar toda el agua usada en el proceso y posee una capacidad de 460 litros. La Bomba Centrífuga no debe ser puesta en marcha si el tanque esta vacio. El llenado de este tanque es un procedimiento manual y se realiza con la tubería etiquetada con el texto “Suministro”.</p>
			<p>Para llenar este tanque se remueve su tapa superior para observar su nivel y se procede a abrir las válvulas tipo bola que se encuentran en la tubería de suministro de tal modo que permitan circular el agua hacia el tanque. Cuando se observe que el agua ha llegado a un nivel apropiado, se cierran las válvulas y se finaliza el llenado.</p>
			<p><strong>Figura 1. Tanque de 460 litros del modulo didáctico</strong></p>
			<img src="img/informacion/tanque_1.jpg">
		`
	},
	{
		id: "bomba",
		titulo: "Bomba Centrifuga",
		contenido: `
			<p>Esta Bomba Centrifuga (Figura 1) transporta el agua almacenada en el Tanque de Suministro de Agua a través del sistema de tuberías del modulo didáctico. El agua es succionada por la bomba centrifuga y luego de recorrer todo el proceso, es retornada al tanque, donde nuevamente es succionada por la bomba y el ciclo se repite continuamente.</p>
			<p>La tubería de succión de la bomba posee un filtro de línea de 1 ¼’’ para evitar que impurezas en el agua lleguen al proceso e interfieran con los distintos instrumentos instalados en él.</p>
			<p>Esta bomba es monofásica y trabaja con una tensión de 220 V AC suministrada por dos líneas de 110 V AC desfasadas 120°. Estas líneas y una conexión a tierra (Figura 2) llegan a la bomba a través de tubos conduit galvanizada de ¾’’ de color negro.</p>
			<p><strong>Figura 1. Bomba Centrifuga de 2 hp</strong></p>
			<img src="img/informacion/bomba_1.jpg">
			<p><strong>Figura 2. Cables eléctricos de la bomba centrifuga</strong></p>
			<img src="img/informacion/bomba_2.jpg">
			<p>La Tabla 1 muestras varias características de la bomba centrífuga.</p>
			<table>
				<tr>
					<td>Marca</td>
					<td>Malmedi Hidrobloc</td>
				</tr>
				<tr>
					<td>Modelo</td>
					<td>AZF-25-140A</td>
				</tr>
				<tr>
					<td>Diámetro de entrada</td>
					<td>1 ¼’’</td>
				</tr>
				<tr>
					<td>Diámetro de salida</td>
					<td>1’’</td>
				</tr>
				<tr>
					<td>Potencia</td>
					<td>2 hp</td>
				</tr>
				<tr>
					<td>Tensión</td>
					<td>110 V / 220 V</td>
				</tr>
				<tr>
					<td>l/s</td>
					<td>2,5</td>
				</tr>
				<tr>
					<td>l/m</td>
					<td>150</td>
				</tr>
				<tr>
					<td>rpm</td>
					<td>3500</td>
				</tr>
			</table>
		`
	},
	{
		id: "transmisor",
		titulo: "Transmisor de Presión Diferencial",
		contenido: `
			<p>Todo sistema de control de lazo cerrado requiere de un elemento de medición para conocer el valor de la variable a controlar (en este caso: caudal). En el proceso del modulo didáctico, el elemento de medición está constituido por un transmisor y por un elemento primario (este puede ser el Tubo Venturi o la Placa Orificio del proceso).</p>
			<p>El Transmisor de Presión Diferencial mide la diferencia de presión causada por el tubo venturi o por la placa orificio del proceso y así determina el caudal que circula a través de ellos; a su vez, transmite el valor de caudal en forma de una señal eléctrica estándar de 4-20 mA hacia el controlador del proceso.</p>
			<p>Este transmisor (Figura 1) es el modelo LD301 de la compañía “smar”. Para funcionar, el transmisor requiere una fuente de tensión de 30 V ubicada en la parte inferior del tablero de control. Este transmisor no posee botones o elementos que permitan configurarlo, para ello se debe utilizar un configurador de protocolo HART.</p>
			<p><strong>Figura 1. Transmisor de presión diferencial del modulo didáctico</strong></p>
			<img src="img/informacion/transmisor_2.jpg">
		`
	},
	{
		id: "placaOrificio",
		titulo: "Placa Orificio",
		contenido: `
			<p>La Placa Orificio es un disco con un orificio en el centro, que se instala en una tubería con el propósito de medir el caudal. Cuando el fluido atraviesa el orificio, aumenta su velocidad y a la vez se reduce su presión, creando una diferencia de presión que permite medir el caudal según el teorema de Bernoulli. La Figura 1 es una animación que muestra como se mueve un fluido a través de una placa orificio.</p>
			<p><strong>Figura 1. Animación del movimiento de un fluido al pasar por una placa orificio</strong></p>
			<img src="img/informacion/placa_orificio_1.gif">
			<p>La diferencia de presión ocasionada por la placa orificio del proceso (Figura 2) es medida por el Transmisor de Presión Diferencial para así determinar el caudal en la tubería donde se halla instalada la placa orificio. La placa orificio se halla instalada entre dos bridas (Figura 3), lo que permite el fácil desmontaje de la placa orificio en caso de mantenimiento.</p>
			<p>El proceso cuenta con un segundo elemento primario: un Tubo Venturi, de este modo, es posible cambiar el elemento primario a usar cambiando las conexiones del Transmisor de Presión Diferencial y ajustando las válvulas tipo bola instaladas junto a los elementos primarios. </p>
			<p><strong>Figura 2. Placa orificio del modulo didáctico</strong></p>
			<img src="img/informacion/placa_orificio_2.jpg">
			<p><strong>Figura 3. Bridas para instalar la placa orificio del modulo didáctico</strong></p>
			<img src="img/informacion/placa_orificio_3.jpg">
		`
	},
	{
		id: "venturi",
		titulo: "Tubo Venturi",
		contenido: `
			<p>El Tubo Venturi (Figura 1) es un tubo con un estrechamiento en su centro (denominado garganta). Cuando un fluido pasa por la garganta aumenta su velocidad y a la vez se reduce su presión, por lo tanto, se crea una diferencia de presión entre la sección de entrada y la garganta. Si esta diferencia de presión se mide es posible calcular el caudal según el teorema de Bernoulli.</p>
			<p>Para que la diferencia de presión pueda ser medida, el Tubo Venturi cuenta con dos tomas: una toma de alta presión en la sección de entrada y una toma de baja presión en la garganta.</p>
			<p><strong>Figura 1. Forma y secciones de un Tubo Venturi</strong></p>
			<img src="img/informacion/venturi_1.jpg">
			<p>La Figura 2 muestra el Tubo Venturi del modulo didáctico, en la imagen se pueden observar las tomas de alta y baja presión. La Figura 3 muestra el tubo venturi instalado en el modulo junto con dos uniones universales para fácil desmontaje en caso de mantenimiento y dos válvulas tipo bola en las tomas de presión. </p>
			<p>La diferencia de presión ocasionada por el tubo venturi del modulo didáctico es medida por el Transmisor de Presión Diferencial para así determinar el caudal en la tubería donde se halla instalado el tubo venturi.</p>
			<p>El proceso cuenta con un segundo elemento primario: una Placa Orificio, de este modo, es posible cambiar el elemento primario a usar cambiando las conexiones del Transmisor de Presión Diferencial y ajustando las válvulas tipo bola instaladas junto a los elementos primarios.</p>
			<p><strong>Figura 2. Tubo Venturi del modulo didáctico</strong></p>
			<img src="img/informacion/venturi_2.jpg">
			<p><strong>Figura 3. Tubo Venturi instalado en el modulo didáctico</strong></p>
			<img src="img/informacion/venturi_3.jpg">
		`
	},
	{
		id: "convertidor",
		titulo: "Convertidor I/P",
		contenido: `
			<p>Para que el modulo didáctico pueda controlar el caudal exitosamente, es necesario que el sistema de control accione la Válvula de Control del proceso, sin embargo, esta ultima requiere una señal neumática de 3 a 15 psi para trabajar y el controlador del proceso produce una señal eléctrica de 4 a 20 mA.</p>
			<p>El trabajo del Convertidor I/P es de llevar la señal eléctrica de 4 a 20 mA proveniente del controlador a una señal neumática equivalente de 3 a 15 psi, permitiendo al controlador poder accionar la válvula de control.</p>
			<p>El convertidor I/P del proceso es el modelo “Type 1000” de la empresa “MARSH BELLOFRAM”. La Figura 1 muestra un equipo nuevo, mientras que la Figura 2 muestra el equipo usado en el modulo didáctico.</p>
			<p style="color:red">El modulo didáctico en la actualidad no cuenta con este instrumento, lo que impide el control de caudal. La Figura 3 y la Figura 4 muestran donde originalmente se hallaba instalado: un cajetín localizado debajo de la válvula de control, sujeto a la estructura de soporte de color amarillo de esta última.</p>
			<p><strong>Figura 1. Convertidor I/P</strong></p>
			<img src="img/informacion/convertidor_1.jpg">
			<p><strong>Figura 2. Convertidor I/P del modulo didáctico</strong></p>
			<img src="img/informacion/convertidor_2.jpg">
			<p><strong>Figura 3. Cajetín del convertidor I/P</strong></p>
			<img src="img/informacion/convertidor_3.jpg">
			<p><strong>Figura 4. Cajetín del convertidor I/P</strong></p>
			<img src="img/informacion/convertidor_4.jpg">
		`
	},
	{
		id: "valvulaControl",
		titulo: "Válvula de Control",
		contenido: `
			<p>Cada sistema de control necesita un elemento final de control, que se encarga de modificar la variable a controlar para así mantenerla en el valor deseado, denominado punto de consigna o set-point. En un sistema de control de lazo cerrado el elemento final de control actuara dependiendo de la señal que reciba del controlador.</p>
			<p>El modulo didáctico cuenta con una Válvula de Control neumática (Figura 1) como elemento final de control, permitiendo al sistema de control de lazo cerrado alterar el caudal que fluye a través del sistema de tuberías.</p>
			<p>El Controlador del proceso gobierna la posición de esta válvula, sin embargo, para ser accionada la válvula requiere de una señal estándar neumática de 3 a 15 psi y la señal de salida del controlador es una señal estándar eléctrica de 4 a 20 mA, así que una conexión directa entre el controlador y la válvula es imposible. Esto se soluciona por medio del Convertidor I/P del proceso, que convierte la señal eléctrica de salida del controlador en una señal neumática de 3 a 15 psi para accionar la válvula de control.</p>
			<p><strong>Figura 1. Válvula de control neumático del modulo didáctico</strong></p>
			<img src="img/informacion/valvula_control_1.jpg">
			<p>La Tabla 1 muestra varias características de esta válvula de control.</p>
			<p><strong>Tabla 1. Características de la válvula de control</strong></p>
			<table>
				<tr>
					<td>Marca</td>
					<td>Mec-Rela</td>
				</tr>
				<tr>
					<td>Modelo</td>
					<td>L-20</td>
				</tr>
				<tr>
					<td>Diámetro Nominal</td>
					<td>1’’ o 25 mm</td>
				</tr>
				<tr>
					<td>Tipo de Válvula</td>
					<td>Globo</td>
				</tr>
				<tr>
					<td>Obturador</td>
					<td>Isoporcentual (%)</td>
				</tr>
				<tr>
					<td>Actuador</td>
					<td>Acción Inversa</td>
				</tr>
				<tr>
					<td>Rangeabilidad</td>
					<td>1/50</td>
				</tr>
				<tr>
					<td>Margen de Compresión</td>
					<td>3 a 15 psi (0,2 – 1 bar)</td>
				</tr>
			</table>
			<p>Esta válvula es de acción inversa, por lo tanto, se cerrara sin presión neumática. Esto crea un problema: en caso de que el modulo deje de recibir aire comprimido la válvula se cerrara y provocara que no exista un retorno para el agua. Si la bomba se hallara en marcha durante esta situación trabajaría forzada y entraría en proceso de cavitación.</p>
			<p>El proceso lidia con el problema anterior gracias a dos dispositivos: el Presostato y la Válvula Solenoide. El presostato detecta cuando no existe presión en el sistema de tuberías del suministro neumático y accionara la válvula solenoide, de este modo se abre un retorno para que el agua regrese al tanque.</p>
			<p>La Figura 2 muestra la estructura y las tuberías sobre las cuales está instalada la válvula de control. En paralelo a la tubería de la válvula se halla una tubería by-pass para ser usada en caso de realizar mantenimiento. Estas tuberías además cuentan con válvulas tipo bola y uniones universales para realizar también mantenimiento.</p>

			<p><strong>Figura 2. Estructura de soporte y tuberías de la válvula de control</strong></p>
			<img src="img/informacion/valvula_control_2.jpg">
		`
	},
	{
		id: "solenoide",
		titulo: "Válvula Solenoide",
		contenido: `
			<p>Esta Válvula Solenoide (Figura 1) es un dispositivo que al ser energizado se abre y permite el paso del agua. Esta válvula es normalmente cerrada, por lo que se cierra e impide el paso del agua cuando no reciba suministro eléctrico. En el proceso, tiene la función de crear un retorno del agua hacia el tanque durante una falla de suministro de aire. Dicha falla ocasionara que la Válvula de Control se cierre, impidiendo que el agua tenga un camino de regreso al tanque y fuerce la Bomba Centrifuga. Esto se resuelve gracias al retorno que crea la válvula solenoide al abrirse.</p>
			<p><strong>Figura 1. Válvula solenoide del proceso</strong></p>
			<img src="img/informacion/solenoide_1.jpg">
			<p>La Figura 2 muestra la tubería verde de 1’’ en la cual está instalada la válvula solenoide. Su posición permite que el agua se retorno hacia al tanque. Esta válvula funciona con una tensión de 110 V AC y sus conductores pasan a través de una tubería conduit galvanizada de ½’’ de color negro proveniente del tablero de control del modulo didáctico.</p>
			<p><strong>Figura 2. Tubería de la Válvula Solenoide</strong></p>
			<img src="img/informacion/solenoide_2.jpg">
		`
	},
	{
		id: "presostato",
		titulo: "Presostato",
		contenido: `
			<p>Este dispositivo posee dos posiciones: encendido y apagado. Un presostato mide la presión en la tubería donde se instala y cuando la presión alcanza un valor definido, el presostato se acciona y alterna sus contactos eléctricos.</p>
			<p>El Presostato (Figura 1) usado en el proceso del modulo didáctico es de la marca “Honeywell” y es el modelo “L404”. Este presostato supervisa la presión del aire en la tubería de suministro de aire comprimido (estas tuberías son de color azul y están etiquetadas con la palabra “Aire”).</p>
			<p>Cuando hay un fallo con el suministro de aire el presostato alternara sus contactos, esto activara un relé que suministrara corriente a la Válvula Solenoide del proceso, haciendo que está pase de su posición normalmente cerrada a su posición abierta. Esto se hace con el propósito de darle un retorno al agua del proceso, porque cuando no existe suministro de aire comprimido la Válvula de Control se cierra. Con la válvula de control cerrada, no existirá retorno para el agua y la Bomba Centrifuga trabajara forzada y entrara en proceso de cavitación.</p>
			<p><strong>Figura 1. Presostato del modulo didáctico</strong></p>
			<img src="img/informacion/presostato_1.jpg">
			<p>El presostato está ubicado en la tubería de suministro neumático junto a la tubería en donde se halla instalada la válvula de control. Esto se puede apreciar en la Figura 2 y en la Figura 3.</p>
			<p><strong>Figura 2. Presostato junto a la Válvula de Control</strong></p>
			<img src="img/informacion/presostato_2.jpg">
			<p><strong>Figura 2. Presostato del proceso.</strong></p>
			<img src="img/informacion/presostato_3.jpg">
		`
	},



	{
		id: "breaker",
		titulo: "Breaker Principal",
		contenido: `
			<p style="color:green;">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para accionarlo.</p>
			<p>Un breaker (también conocido como interruptor magnetotérmico) es un dispositivo de seguridad que interrumpe el paso de corriente cuando ésta supera un valor límite máximo, cuando sucede, el breaker abre sus contactos e impide que la corriente siga circulando, protegiendo al sistema de sobrecargas y cortocircuitos.</p>
			<p>El Breaker Principal del tablero de control del modulo didáctico soporta una corriente máxima de 32 A antes de abrirse para proteger el circuito. Este breaker permite el paso de corriente a todos los dispositivos eléctricos del modulo. Si no se activa (colocando su palanca hacia arriba, en la posición “on”), el modulo no se podrá encender.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el breaker principal.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "interruptor1",
		titulo: "Breaker de Control 1",
		contenido: `
			<p style="color:green;">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para accionarlo.</p>
			<p>Un breaker (también conocido como interruptor magnetotérmico) es un dispositivo de seguridad que interrumpe el paso de corriente cuando ésta supera un valor límite máximo, cuando sucede, el breaker abre sus contactos e impide que la corriente siga circulando, protegiendo al sistema de sobrecargas y cortocircuitos.</p>
			<p>El Breaker de Control 1 del tablero de control soporta una corriente máxima de 3 A antes de abrirse para proteger al circuito. Este breaker permite el paso de corriente a todos los dispositivos de la sección superior del tablero de control y solo llegara corriente a este breaker si se activa el Breaker Principal.</p>
			<p>De no activarse el breaker de control 1 (colocando su palanca hacia arriba, en la posición “on”) los dispositivos como luces indicadoras, selectores y botones no funcionaran.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el breaker de control 1.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "interruptor2",
		titulo: "Breaker de control N°2",
		contenido: `
			<p style="color:green;">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para accionarlo.</p>
			<p>Un breaker (también conocido como interruptor magnetotérmico) es un dispositivo de seguridad que interrumpe el paso de corriente cuando ésta supera un valor límite máximo, cuando sucede, el breaker abre sus contactos e impide que la corriente siga circulando, protegiendo al sistema de sobrecargas y cortocircuitos.</p>
			<p>El Breaker de Control 2 del tablero de control soporta una corriente máxima de 2 A antes de abrirse para proteger al circuito. Este breaker permite el paso de corriente a la sección inferior del tablero de control y solo llegara corriente a este breaker si se activa el Breaker Principal y el Breaker de Control 1.</p>
			<p>De no activarse el breaker de control 2, no se suministrara corriente al Controlador Electrónico, a la fuente de 30 V DC del Transmisor de Presión Diferencial y al Convertidor I/P.</p>
			<p>La Figura 1 muestra una foto del interior de la sección inferior del tablero de control donde se puede observar el breaker de control 2.</p>
			<p><strong>Figura 1. Elementos del interior de la sección inferior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_inferior.jpg">
		`
	},
	{
		id: "controlador",
		titulo: "Controlador Electrónico",
		contenido: `
			<p>Los controladores son instrumentos encargados de comparar la variable controlada del proceso para generar como señal de salida una corrección que será enviada al elemento final de control, de tal forma que este último se encargue de corregir la variable medida para acercarla lo más posible al valor deseado.</p>
			<p>El Controlador Electrónico (Figura 1) del modulo didáctico es el modelo “Control 3000” de la empresa “Venetrol”. Este controlador lee la señal estándar de 4 a 20 mA proveniente del Transmisor de Presión Diferencial y produce como salida una señal estándar de 4 a 20 mA que se envía al Convertidor I/P. Este último traduce esta señal en una señal neumática de 3 a 15 psi para así accionar la Válvula de Control.</p>
			<p>Este controlador funciona con 120 V AC, así que su suministro eléctrico requiere una línea de 120 V AC y un cable neutro, estas líneas vienen del Breaker de Control 2, por consiguiente, este breaker debe ser accionado para encender el controlador.</p>
			<p><strong>Figura 1. Controlador Venetrol del modulo didáctico</strong></p>
			<img src="img/informacion/controlador_1.jpg">
			<p>La pantalla del controlador y sus botones permiten al operador cambiar el punto de consigna (este procedimiento debe buscarse en su manual de operación). El controlador compara la señal del transmisor con el punto de consigna para así producir la señal de salida que controlara a la válvula de control.</p>
			<p style="color:red">El modulo didáctico en la actualidad no cuenta con este instrumento, lo que impide el control de caudal. La Figura 2 muestra donde originalmente se hallaba instalado: la sección inferior del tablero de control.</p>
			<p><strong>Figura 2. Sección inferior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/controlador_2.jpg">
		`
	},
	{
		id: "selector",
		titulo: "Selector de Modo de Operación",
		contenido: `
			<p style="color:green">Este dispositivo es un elemento interactivo del aula virtual. Para cambiar la posición del selector debe presionar alguna de las etiquetas “MANUAL”, “OFF” o “AUTOMATICO” que se hallan arriba del selector.</p>
			<p>Este selector permite que el operador seleccione el modo en el que operara la Bomba Centrifuga del proceso. Cuenta con tres posibles posiciones:</p>
			<ul>
				<li><strong>Modo manual:</strong> En este modo la bomba solo se podrá poner en marcha al presionar el Pulsador Luminoso de Encendido y una vez encendida, se podrá detener presionando el Pulsador Luminoso de Apagado.</li>
				<li><strong>Modo Apagado (OFF):</strong> La bomba se mantendrá apagada en todo momento y ningún elemento del tablero podrá ponerla en marcha.</li>
				<li><strong>Modo automático:</strong> La bomba se pondrá en marcha automáticamente al colocarse el selector en esta posición. La bomba se mantendrá en marcha en todo momento y ningún pulsador podrá detenerla.</li>
			</ul>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
		`
	},
	{
		id: "botonStart",
		titulo: "Pulsador Luminoso de Encendido",
		contenido: `
			<p style="color:green">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para accionarlo.</p>
			<p>Cuando el Selector de Modo de Operación se halla en el modo manual, el operador del modulo didáctico puede poner en marcha y parar la Bomba Centrifuga a voluntad.</p>
			<p>El Pulsador Luminoso de Encendido es usado para poner en marcha la bomba centrifuga en el modo manual y además cuenta con una luz de color verde que se encenderá siempre que la bomba este en marcha (sin importar el modo de operación seleccionado).</p>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
		`
	},
	{
		id: "botonStop",
		titulo: "Pulsador Luminoso de Apagado",
		contenido: `
			<p style="color:green">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para accionarlo.</p>
			<p>Cuando el Selector de Modo de Operación se halla en el modo manual, el operador del modulo didáctico puede poner en marcha y parar la Bomba Centrifuga a voluntad.</p>
			<p>El Pulsador Luminoso de Apagado es usado para parar la bomba centrifuga en el modo manual y además cuenta con una luz de color rojo que se encenderá siempre que la bomba centrifuga este detenida (sin importar el modo de operación seleccionado).</p>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
		`
	},
	{
		id: "luzFalloAire",
		titulo: "Luz de Fallo de Aire",
		contenido: `
			<p>La Luz de Fallo de Aire es una luz indicadora de color amarillo que informa cuando se presenta una falla con el suministro neumático, es decir, cuando no haya aire comprimido en circulación a través de las tuberías azules etiquetadas con la palabra “Aire”. Esta situación es riesgosa puesto a que si no se cuenta con suministro neumático, la válvula de control regresara a su posición cerrada provocando que no exista retorno para el agua hacia el tanque.</p>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
		`
	},
	{
		id: "luzSobrecarga",
		titulo: "Luz de Sobrecarga",
		contenido: `
			<p>La Luz de Sobrecarga es una luz indicadora que informa cuando el Relé Térmico se ha accionado debido a una sobrecarga en la Bomba Centrifuga. Cuando esto sucede se debe averiguar la causa de la sobrecarga y será imposible poner en marcha la bomba nuevamente sin antes reiniciar manualmente el relé térmico.</p>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
			<p>La Figura 2 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el relé térmico. </p>
			<p><strong>Figura 2. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "luzProcesoBloqueado",
		titulo: "Luz de Control de Proceso Bloqueado",
		contenido: `
			<p>La Luz de Control de Proceso Bloqueado es una luz indicadora que informa cuando cualquiera de los tres Interruptores de Emergencia del modulo ha sido accionado, provocando la parada inmediata de la Bomba Centrifuga. Además, la bomba tampoco podrá ser puesta en marcha mientras alguno de los interruptores este accionado.</p>
			<p>La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
		`
	},
	{
		id: "luzSolenoide",
		titulo: "Luz de Válvula Solenoide",
		contenido: `
			<p>La Luz de Válvula Solenoide es una luz indicadora que se encenderá siempre que la  válvula solenoide del proceso sea accionada. La Figura 1 muestra todos los dispositivos del exterior de la sección superior del tablero de control.</p>
			<p>Cuando se presente una falla con el suministro de aire comprimido, la Válvula de Control se cerrara y provocara una situación riesgosa en la que el agua no tendrá un retorno hacia el tanque. Este problema se soluciona activando una Válvula Solenoide (Figura 2) que abre un retorno para el agua. Esta válvula solenoide solo se activara estando la bomba en marcha durante una falla con el suministro de aire.</p>
			<p><strong>Figura 1. Dispositivos de la sección superior del tablero de control</strong></p>
			<img src="img/informacion/tablero_exterior_superior.jpg">
			<p><strong>Figura 2. Válvula solenoide del proceso</strong></p>
			<img src="img/informacion/solenoide_2.jpg">
		`
	},



	{
		id: "protector",
		titulo: "Protector de Voltaje",
		contenido: `
			<p>El tablero del modulo didáctico cuenta con un Protector de Voltaje, este dispositivo posee en su interior un relé que se activara cuando la tensión en las líneas de suministro eléctrico no presenten fallas, y dicho relé se desactivara siempre que se presenten las siguientes situaciones por más de tres segundos:</p>
			<ul>
				<li>Sobretensión.</li>
				<li>Baja tensión.</li>
				<li>Perdida de fase (conocida también como falla de fase).</li>
			</ul>
			<p>Cuando el protector detecte que alguna de las irregularidades con la tensión haya finalizado, el relé se volverá a activar luego de 0.5 segundos.</p>
			<p>El protector de voltaje desempeña una función de seguridad importante, ya que cualquiera de las situaciones anteriores podría ocasionar daños a los dispositivos eléctricos del tablero de control, a los instrumentos electrónicos y/o a la Bomba Centrífuga.</p>
			<p>Este protector de voltaje es el modelo “VP-002” de la marca “Camsco”. Este protector supervisa la tensión de 220 V del tablero de control proveniente de dos líneas de 120 V desfasadas 120°.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el protector de voltaje. </p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "termico",
		titulo: "Relé Térmico",
		contenido: `
			<p style="color:green">Este dispositivo es un elemento interactivo del aula virtual. Puede hacer clic sobre él con el ratón (o tocar con su dedo, en caso de estar en un dispositivo móvil) para reiniciarlo luego de una sobrecarga en la bomba.</p>
			<p>Una sobrecarga de corriente en la Bomba Centrifuga puede averiarla gravemente, principalmente porque una corriente alta produce recalentamiento que causa daño al aislamiento de sus bobinas, produciendo que partes del bobinado puedan cortocircuitarse.</p>
			<p>Debido a lo anterior, una protección contra una sobrecarga es de gran importancia al momento de usar motores eléctricos. El Relé Térmico logra esta tarea, ya que supervisa la corriente usada por la bomba centrífuga y se dispara cuando ésta corriente supera un límite de 13 amperios. Al dispararse, desconecta el Contactor y por ende a la bomba centrífuga, además, se encenderá también la Luz de Sobrecarga del tablero.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el relé térmico acoplado debajo del contactor.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},



	{
		id: "contactor",
		titulo: "Contactor",
		contenido: `
			<p>Este es un Contactor trifásico que habilita o interrumpe el suministro eléctrico de la Bomba Centrífuga. La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el contactor.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "rele1",
		titulo: "Relé 1",
		contenido: `
			<p>Los relés son dispositivos electromecánicos que actúan como interruptores, cuyo accionamiento se logra por medio de la energización de un electroimán en su interior para lograr la conmutación de sus contactos.</p>
			<p>El Relé 1 es usado por el circuito de control del tablero para suministrar corriente a la válvula solenoide y a la Luz de Válvula Solenoide durante una falla de suministro neumático.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el relé 1.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
	{
		id: "rele2",
		titulo: "Relé 2",
		contenido: `
			<p>Los relés son dispositivos electromecánicos que actúan como interruptores, cuyo accionamiento se logra por medio de la energización de un electroimán en su interior para lograr la conmutación de sus contactos.</p>
			<p>El Relé 2 es usado por el circuito de control del tablero para encender la Luz de Control de Proceso Bloqueado cuando alguno de los Interruptores de Emergencia se accione.</p>
			<p>La Figura 1 muestra una foto del interior de la sección superior del tablero de control donde se puede observar el relé 2.</p>
			<p><strong>Figura 1. Elementos del interior de la sección superior del tablero de control del modulo didáctico</strong></p>
			<img src="img/informacion/tablero_interior_superior.jpg">
		`
	},
];