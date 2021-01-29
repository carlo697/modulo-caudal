/*				Clases 				*/

class Dispositivo {
	constructor(element, initialState = false) {
		this.element = element;
		this.state = initialState;

		this.updateState();
	}

	updateState() {
		if (this.state) {
			this.element.classList.add("on");
			this.element.classList.remove("off");
		} else {
			this.element.classList.add("off");
			this.element.classList.remove("on");
		}
	}

	setState(value) {
		if (this.state == value) {
			return;
		}

		this.state = value;
		this.updateState();

		const audio = this.element.querySelector("audio");
		if (audio != null) {

			if (audio.hasAttribute("playWhileOn")) {
				if (value) {
					audio.currentTime = 0;
					audio.play();
				} else {
					audio.pause();
				}
			} else {
				audio.play();
			}
		}

		this.playSound();
	}

	getState(value) {
		return this.state;
	}

	setSound(url, loop) {
		this.audio = new Audio(url);
	}

	playSound() {
		if (this.audio != null) {
			this.audio.currentTime = 0;
			this.audio.play();
		}
	}

	stopSound() {
		this.audio.pause();
	}
}

class Interruptor extends Dispositivo {

	constructor(element, initialState = false, targetElement = null) {
		super(element, initialState);

		this.enable = true;
		this.updateStateCallback = null;

		this.targetElement = targetElement;
		this.element.addEventListener("click", e => {
			e.preventDefault();

			if (!this.enable || e.target.classList.contains("ayuda-overlay")) {
				return;
			}

			this.onClickEvent(e)
		});
		this.updateState();
	}

	onClickEvent(e) {
		this.setState(!this.getState());
	}

	updateState() {
		super.updateState();

		if (this.targetElement != null) {
			if (this.state) {
				this.targetElement.classList.add("on");
				this.targetElement.classList.remove("off");
			} else {
				this.targetElement.classList.add("off");
				this.targetElement.classList.remove("on");
			}
		}

		if (this.updateStateCallback != null) {
			this.updateStateCallback(this);
		}
	}
}

class Termico extends Interruptor {
	onClickEvent(e) {
		super.onClickEvent(e);

		if (this.state == false) {
			this.enable = false;
		}
	}
}

const botonManual = document.getElementById("BotonManual");
const botonOff = document.getElementById("BotonOff");
const botonAutomatico = document.getElementById("BotonAutomatico");
const selector = document.getElementById("selector");
const log = document.getElementById("log");

const emergencia1 = new Interruptor(document.getElementById("stopPulsador"));
emergencia1.setSound("sound/emergencia.mp3", false);

const emergencia2 = new Interruptor(document.getElementById("emergencia2"));
emergencia2.setSound("sound/emergencia.mp3", false);

const emergencia3 = new Interruptor(document.getElementById("emergencia3"));
emergencia3.setSound("sound/emergencia.mp3", false);

const breaker = new Interruptor(document.getElementById("breaker"));
breaker.setSound("sound/breaker.mp3", false);

const interruptor1 = new Interruptor(document.getElementById("interruptor1"));
interruptor1.setSound("sound/interruptor.mp3");

const interruptor2 = new Interruptor(document.getElementById("interruptor2"));
interruptor2.setSound("sound/interruptor.mp3");

const controlador = new Dispositivo(document.getElementById("controlador"));

const contactor = new Dispositivo(document.getElementById("contactor"));
contactor.setSound("sound/rele.mp3", false);

const termico = new Termico(document.getElementById("termico"));
termico.enable = false;
termico.setSound("sound/rele.mp3", false);

const protector = new Dispositivo(document.getElementById("protector"));
protector.setSound("sound/rele.mp3", false);

const rele1 = new Dispositivo(document.getElementById("rele1"));
rele1.setSound("sound/rele.mp3", false);

const rele2 = new Dispositivo(document.getElementById("rele2"));
rele2.setSound("sound/rele.mp3", false);

const luzStart = new Dispositivo(document.getElementById("botonStart"));
const luzStop = new Dispositivo(document.getElementById("botonStop"));
const luzFalloAire = new Dispositivo(document.getElementById("luzFalloAire"));
const luzSobrecarga = new Dispositivo(document.getElementById("luzSobrecarga"));
const luzProcesoBloqueado = new Dispositivo(document.getElementById("luzProcesoBloqueado"));
const luzSolenoide = new Dispositivo(document.getElementById("luzSolenoide"));
const vastago = document.getElementById("vastago");

const bomba = new Dispositivo(document.getElementById("bomba"));

selector.state = parseInt(selector.getAttribute("state"), 10);

document.body.addEventListener("click", clickGlobal);
document.body.addEventListener("mousedown", mousedownGlobal);
document.body.addEventListener("touchstart", mousedownGlobal);

document.body.addEventListener("mouseup", mouseupGlobal);
document.body.addEventListener("touchend", mouseupGlobal);
document.body.addEventListener("change", changeGlobal);

let ultimoHightlight = null;
let usandoAyuda = false;

function clickGlobal(e) {
	if (usandoAyuda) {
		if (e.target.id == "textoAyuda" || e.target.classList.contains("ayuda-overlay")) {
			e.stopPropagation();

			usandoAyuda = false;
			document.getElementById("textoAyuda").style.display = "none";

			if (e.target.classList.contains("ayuda-overlay") && e.target.helpTarget != null) {
				abrirMenu("#botonFuncionamiento");
				e.target.helpTarget.scrollIntoView(true);
			}

			let elementos = document.querySelectorAll(".ayuda-overlay");

			for (let elemento of elementos) {
				elemento.remove();
			}
		}
	} else {
		if (e.target.id == "botonAyuda") {
			usandoAyuda = true;

			document.getElementById("textoAyuda").style.display = "block";

			const elementos = document.querySelectorAll("[helpTarget]");
			let styles;

			for (let elemento of elementos) {
				styles = getComputedStyle(elemento);

				if (styles.position == "static") {
					elemento.ultimoPosition = styles.position;
					elemento.style.position = "relative";
				}

				const overlay = document.createElement("div");
				overlay.classList = "ayuda-overlay";
				overlay.helpTarget = document.getElementById(elemento.getAttribute("helpTarget"));
				elemento.appendChild(overlay);
			}
		}

		if (e.target.id == "botonManual") {
			selector.setAttribute("state", "0");
			selector.state = 0;
			_contactor = false;

			e.target.querySelector("audio").play();
		} else if (e.target.id == "botonOff") {
			selector.setAttribute("state", "1");
			selector.state = 1;

			e.target.querySelector("audio").play();
		} else if (e.target.id == "botonAutomatico") {
			selector.setAttribute("state", "2");
			selector.state = 2;

			e.target.querySelector("audio").play();
		}
	}

	const element = e.target;

	if (element.hasAttribute("hightlightTarget")) {
		const target = document.getElementById(element.getAttribute("hightlightTarget"));

		cerrarMenu();

		if (ultimoHightlight != null) {
			ultimoHightlight.remove();
		}

		const hightlight = document.createElement("div");
		hightlight.className = "hightlight-overlay";

		target.appendChild(hightlight);
		hightlight.scrollIntoView(false);
		ultimoHightlight = hightlight;

		setTimeout( () => {
			hightlight.remove();
		}, 8000);
	}
}

function mousedownGlobal(e) {
	let boton = false;

	if (e.target.id == "botonStart") {
		presionadoStart = true;
		boton = true;
	} else if (e.target.id == "botonStop") {
		presionadoStop = true;
		boton = true;
	}

	if (boton) {
		e.target.querySelector("audio").play();
	}
}

function mouseupGlobal(e) {
	if (e.target.id == "botonStart") {
		presionadoStart = false;
	} else if (e.target.id == "botonStop") {
		presionadoStop = false;
	}
}

termico.updateStateCallback = (element) => {
	if (!element.state) {
		document.getElementById("sobreCarga").checked = false;
	}
};

function changeGlobal(e) {
	const id = e.target.id;
	const target = e.target;

	if (id == "fallaAire") {
		fallaAire = target.checked;
	} else if (id == "sobreVoltaje") {
		sobreVoltaje = target.checked;
	} else if (id == "sobreCarga") {
		sobreCarga = target.checked;

		termico.setState(true);
		termico.enable = true;
	}
}


let activarChorro1 = false;
const chorro1 = document.querySelector("#chorro1");

setInterval( () => {
	if (activarChorro1) {
		const particula = document.createElement("div");
		particula.classList.add("particula-agua1");

		chorro1.appendChild(particula);

		setTimeout( () => {
			particula.remove();
		}, 500);
	}
}, 200);


let activarChorro2 = false;
const chorro2 = document.querySelector("#chorro2");

setInterval( () => {
	if (activarChorro2) {
		const particula = document.createElement("div");
		particula.classList.add("particula-agua2");

		chorro2.appendChild(particula);

		setTimeout( () => {
			particula.remove();
		}, 500);
	}
}, 200);


var presionadoStart = false;
var presionadoStop = false;

let _contactor = false;

// Fallas
let fallaAire = false;
let sobreVoltaje = false;
let sobreCarga = false;

let vastagoPosicionActual = 0;

let tiempoSobrecarga = 0;

function update(deltaTime) {
	const elapsedTime = document.getElementById("ElapsedTime");
	elapsedTime.innerHTML = (performance.now() / 1000).toFixed(2);

	let _breaker = breaker.getState();
	let _interruptor1 = interruptor1.getState();
	let _interruptor2 = interruptor2.getState();

	let _emergencia1 = emergencia1.getState();
	let _emergencia2 = emergencia2.getState();
	let _emergencia3 = emergencia3.getState();

	let _selectorPosicion = parseInt(selector.getAttribute("state"));
	
	let _termico = termico.getState();

	let _protector = false;
	let _rele1 = false;
	let _rele2 = false;
	let _presostato = !fallaAire;

	let _luzStart = false;
	let _luzStop = false;
	let _luzFalloAire = false;
	let _luzSobrecarga = false;
	let _luzProcesoBloqueado = false;
	let _luzSolenoide = false;


	let _bomba = false;
	let _solenoide = false;

	let _controlador = false;

	if (_breaker && _interruptor1) {
		_protector = !sobreVoltaje;
	}

	if (_protector &&_breaker && _interruptor1) {
		_luzSobrecarga = _termico;
	}
	
	if (_breaker && _interruptor2 && _interruptor1) {
		_controlador = true;
	}

	if (_protector && _breaker && _interruptor1) {
		// Contactor y luz de start
		if (!_emergencia1 && !_emergencia2 && !_emergencia3) {
			_rele2 = true;

			if (!_termico) {
				if (_selectorPosicion == 2) {
					_contactor = true;
				} else if (_selectorPosicion == 0) {
					if (presionadoStart) {
						presionadoStart = false;
						_contactor = true;
					} else if (presionadoStop) {
						presionadoStop = false;
						_contactor = false;
					}
				} else {
					_contactor = false;
				}
			} else {
				_contactor = false;
			}
			
		} else {
			_contactor = false;
		}

		_luzStop = !_contactor;

		// Luz de proceso bloqueado
		if (!_rele2) {
			_luzProcesoBloqueado = true;
		}

		// Rele 1, valvula solenoide, luz de valvula solenoide, luz de falla de aire
		if (!_presostato) {
			_luzFalloAire = true;

			if (_contactor) {
				_rele1 = true;
				_luzSolenoide = true;
			}
		}

	} else {
		_contactor = false;
	}

	if (_contactor && !_luzFalloAire && _controlador) {
		activarChorro1 = true;
	} else {
		activarChorro1 = false;
	}

	if (_luzSolenoide) {
		activarChorro2 = true;
	} else {
		activarChorro2 = false;
	}

	// Activar termico cuando la bomba esta en marcha sin encender el controlador
	if (_contactor && !_luzFalloAire && !_controlador) {
		tiempoSobrecarga += deltaTime;

		if (tiempoSobrecarga > 10000) {
			termico.setState(true);
			termico.enable = true;
			document.getElementById("sobreCarga").checked = true;
			tiempoSobrecarga = 0;
		}

	} else {
		tiempoSobrecarga = 0;
	}

	_luzStart = _contactor;

	controlador.setState(_controlador);
	contactor.setState(_contactor);
	//termico.setState(_termico);
	protector.setState(_protector);
	rele1.setState(_rele1);
	rele2.setState(_rele2);
	luzStop.setState(_luzStop);
	luzStart.setState(_luzStart);
	luzFalloAire.setState(_luzFalloAire);
	luzSobrecarga.setState(_luzSobrecarga);
	luzProcesoBloqueado.setState(_luzProcesoBloqueado);
	luzSolenoide.setState(_luzSolenoide);

	bomba.setState(_contactor);

	let _vastagoAbierto = _controlador && !fallaAire;

	vastagoPosicionActual += _vastagoAbierto ? (0.0005 * deltaTime) : (-0.0005 * deltaTime);
	vastagoPosicionActual = Math.min(0.5, vastagoPosicionActual);
	vastagoPosicionActual = Math.max(0, vastagoPosicionActual);

	vastagoPosicionActual += Math.sin((performance.now() / 300)) * 0.012 * vastagoPosicionActual;

	vastago.style.transform = `translate(0, -${vastagoPosicionActual}em)`;
}

function loop(time) {
	var deltaTime = time - lastRenderTime;

	update(deltaTime);

	lastRenderTime = time;
	window.requestAnimationFrame(loop);
}

var lastRenderTime = 0;
window.requestAnimationFrame(loop);