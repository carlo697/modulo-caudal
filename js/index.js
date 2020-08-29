class Interruptor {
	constructor(element, initialState = false, targetElement = null) {
		this.element = element;
		this.targetElement = targetElement;
		this.setState(initialState);

		this.element.addEventListener("click", e => this.onClickEvent(e));
	}

	setState(state) {
		this.element.setAttribute("state", state == true ? "1" : "0");

		if (state) {
			this.element.classList.add("on");
			this.element.classList.remove("off");
		} else {
			this.element.classList.add("off");
			this.element.classList.remove("on");
		}

		if (this.targetElement != null) {
			if (state) {
				this.targetElement.classList.add("on");
				this.targetElement.classList.remove("off");
			} else {
				this.targetElement.classList.add("off");
				this.targetElement.classList.remove("on");
			}
		}
	}

	getState() {
		return (this.element.getAttribute("state") == "1") ? true : false;
	}

	onClickEvent(e) {
		this.setState(!this.getState());
	}
}

class Dispositivo {
	constructor(element, initialState = false) {
		this.element = element;
		this.setState(initialState);
	}

	setState(state) {
		this.element.setAttribute("state", state == true ? "1" : "0");

		if (state) {
			this.element.classList.add("on");
			this.element.classList.remove("off");
		} else {
			this.element.classList.add("off");
			this.element.classList.remove("on");
		}
	}

	getState() {
		return (this.element.getAttribute("state") == "1") ? true : false;
	}
}

const botonManual = document.getElementById("BotonManual");
const botonOff = document.getElementById("BotonOff");
const botonAutomatico = document.getElementById("BotonAutomatico");
const selector = document.getElementById("selector");
const log = document.getElementById("log");

botonManual.onclick = seleccionarManual;
botonOff.onclick = seleccionarOff;
botonAutomatico.onclick = seleccionarAutomatico;

selector.state = parseInt(selector.getAttribute("state"), 10);

document.body.addEventListener("click", clickGlobal);
document.body.addEventListener("mousedown", mousedownGlobal);
document.body.addEventListener("touchstart", mousedownGlobal);

document.body.addEventListener("mouseup", mouseupGlobal);
document.body.addEventListener("touchend", mouseupGlobal);
document.body.addEventListener("change", changeGlobal);

function seleccionarManual() {
	selector.setAttribute("state", "0");
	selector.state = 0;
	_contactor = false;
}

function seleccionarOff() {
	selector.setAttribute("state", "1");
	selector.state = 1;
}

function seleccionarAutomatico() {
	selector.setAttribute("state", "2");
	selector.state = 2;
}

let ultimoHightlight = null;

function clickGlobal(e) {
	const element = e.target;

	if (element.hasAttribute("hightlightTarget")) {
		const target = document.getElementById(element.getAttribute("hightlightTarget"));

		menuBoton.setState(false);

		/*
		const oldHightlight = target.querySelector(".hightlight-overlay");

		if (oldHightlight != null) {
			oldHightlight.remove();
		}
		*/

		if (ultimoHightlight != null) {
			ultimoHightlight.remove();
		}

		const hightlight = document.createElement("div");
		hightlight.className = "hightlight-overlay";

		target.appendChild(hightlight);
		hightlight.scrollIntoView();
		ultimoHightlight = hightlight;

		setTimeout( () => {
			hightlight.remove();
		}, 8000);
	}
}

function mousedownGlobal(e) {
	if (e.target.id == "botonStart") {
		presionadoStart = true;
	} else if (e.target.id == "botonStop") {
		presionadoStop = true;
	}
}

function mouseupGlobal(e) {
	if (e.target.id == "botonStart") {
		presionadoStart = false;
	} else if (e.target.id == "botonStop") {
		presionadoStop = false;
	}
}

function changeGlobal(e) {
	const id = e.target.id;
	const target = e.target;

	if (id == "fallaAire") {
		fallaAire = target.checked;
	} else if (id == "sobreVoltaje") {
		sobreVoltaje = target.checked;
	} else if (id == "sobreCarga") {
		sobreCarga = target.checked;
	}
}


const _pestañaBotones = document.querySelectorAll(".pestaña");

const botonesPestañas = [];

for (let boton of _pestañaBotones) {
	const target = document.getElementById(boton.getAttribute("for"));

	if (target == null) {
		continue;
	}

	boton.contenedor = target;
	botonesPestañas.push(boton);

	boton.addEventListener("click", function(e) {
		for (let boton of botonesPestañas) {
			boton.classList.remove("on");
			boton.contenedor.style.display = "none";
		}

		if (target.style.display == "none") {
			target.style.display = "block";
			boton.classList.add("on");
		}
	});
}

for (let boton of botonesPestañas) {
	boton.contenedor.style.display = "none";
}

const menuBoton = new Interruptor(
	document.getElementById("menuBoton"),
	false,
	document.getElementById("menuLateral")
);

const emergencia1 = new Interruptor(document.getElementById("stopPulsador"));
const breaker = new Interruptor(document.getElementById("breaker"));
const interruptor1 = new Interruptor(document.getElementById("interruptor1"));
const interruptor2 = new Interruptor(document.getElementById("interruptor2"));
const controlador = new Dispositivo(document.getElementById("controlador"));
const contactor = new Dispositivo(document.getElementById("contactor"));
const termico = new Dispositivo(document.getElementById("termico"));
const protector = new Dispositivo(document.getElementById("protector"));
const rele1 = new Dispositivo(document.getElementById("rele1"));
const rele2 = new Dispositivo(document.getElementById("rele2"));
const luzStart = new Dispositivo(document.getElementById("botonStart"));
const luzStop = new Dispositivo(document.getElementById("botonStop"));
const luzFalloAire = new Dispositivo(document.getElementById("luzFalloAire"));
const luzSobrecarga = new Dispositivo(document.getElementById("luzSobrecarga"));
const luzProcesoBloqueado = new Dispositivo(document.getElementById("luzProcesoBloqueado"));
const luzSolenoide = new Dispositivo(document.getElementById("luzSolenoide"));


var presionadoStart = false;
var presionadoStop = false;

let _contactor = false;

// Fallas
let fallaAire = false;
let sobreVoltaje = false;
let sobreCarga = false;

function update(deltaTime) {
	const elapsedTime = document.getElementById("ElapsedTime");
	elapsedTime.innerHTML = (performance.now() / 1000).toFixed(2);

	let _breaker = breaker.getState();
	let _interruptor1 = interruptor1.getState();
	let _interruptor2 = interruptor2.getState();

	let _emergencia1 = emergencia1.getState();
	let _emergencia2 = false;
	let _emergencia3 = false;

	let _selectorPosicion = parseInt(selector.getAttribute("state"));

	
	let _termico = sobreCarga;

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

	_luzStart = _contactor;

	controlador.setState(_controlador);
	contactor.setState(_contactor);
	termico.setState(_termico);
	protector.setState(_protector);
	rele1.setState(_rele1);
	rele2.setState(_rele2);
	luzStop.setState(_luzStop);
	luzStart.setState(_luzStart);
	luzFalloAire.setState(_luzFalloAire);
	luzSobrecarga.setState(_luzSobrecarga);
	luzProcesoBloqueado.setState(_luzProcesoBloqueado);
	luzSolenoide.setState(_luzSolenoide);

	log.textContent = `breaker: ${_breaker}
interruptor1: ${_interruptor1}
interruptor2: ${_interruptor2}
emergencia1: ${_emergencia1}
emergencia2: ${_emergencia2}
emergencia3: ${_emergencia3}
selectorPosicion: ${_selectorPosicion}
start: ${presionadoStart}
stop: ${presionadoStop}
contactor: ${_contactor}
termico: ${_termico}
protector: ${_protector}
rele1: ${_rele1}
rele2: ${_rele2}
presostato: ${_presostato}
luzStart: ${_luzStart}
luzStop: ${_luzStop}
luzFalloAire: ${_luzFalloAire}
luzSobrecarga: ${_luzSobrecarga}
luzProcesoBloqueado: ${_luzProcesoBloqueado}
luzSolenoide: ${_luzSolenoide}
bomba: ${_bomba}
solenoide: ${_solenoide}
controlador: ${_controlador}
	`;

}

function loop(time) {
	var deltaTime = time - lastRenderTime;

	update(deltaTime);

	lastRenderTime = time;
	window.requestAnimationFrame(loop);
}

var lastRenderTime = 0;
window.requestAnimationFrame(loop);