const botonManual = document.getElementById("BotonManual");
const botonOff = document.getElementById("BotonOff");
const botonAutomatico = document.getElementById("BotonAutomatico");
const selector = document.getElementById("Selector");

botonManual.onclick = seleccionarManual;
botonOff.onclick = seleccionarOff;
botonAutomatico.onclick = seleccionarAutomatico;

selector.state = parseInt(selector.getAttribute("state"), 10);


function seleccionarManual() {
	selector.setAttribute("state", "0");
	selector.state = 0;
}

function seleccionarOff() {
	selector.setAttribute("state", "1");
	selector.state = 1;
}

function seleccionarAutomatico() {
	selector.setAttribute("state", "2");
	selector.state = 2;
}

function update(deltaTime) {
	const elapsedTime = document.getElementById("ElapsedTime");
	elapsedTime.innerHTML = (performance.now() / 1000).toFixed(2);
}

function draw(deltaTime) {

}

function loop(time) {
	var deltaTime = time - lastRenderTime;

	update(deltaTime);
	draw(deltaTime);

	lastRenderTime = time;
	window.requestAnimationFrame(loop);
}

var lastRenderTime = 0;
window.requestAnimationFrame(loop);