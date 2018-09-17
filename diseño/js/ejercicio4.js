(function () {
	const stop = document.getElementById("stop");
	const slow = document.getElementById("slow");
	const go = document.getElementById("go");

	//Run Semaforo
	console.log('Iniciando Semaforo');

	//Stop
	stop.addEventListener("click", () => {
		validate("stopLight", "stop");
	});

	// Slow
	slow.addEventListener("click", () => {
		validate("slowLight", "slow");
	});

	// Go
	go.addEventListener("click", () => {
		validate("goLight", "go");
	});

	// Validate
	const validate = (type, status) => {
		if (document.getElementById(type).classList.toggle(status)) {
			console.log("Entrando al boton "+status.capitalize());
		} else {
			console.log("Saliendo del boton "+status.capitalize());
		}
	};

	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}

})();