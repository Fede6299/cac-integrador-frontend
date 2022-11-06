let descEstudiante	= 0.2;
let descTrainee	= 0.5;
let descjunior 	= 0.85;
let precio = 0;
const btnNumber 		= document.getElementById('cantidad');
const btnResumen		= document.getElementById('resumen');
const btnrestablecer 	= document.getElementById('borrar')
const optionCategoria	= document.getElementById('categoria');

btnNumber.addEventListener("click", final);
btnResumen.addEventListener("click", resumen);
btnrestablecer.addEventListener("click", restablecer);


function final(){

	if (optionCategoria.value == 'Estudiante') {
		precio = (200 * descEstudiante) * btnNumber.value;
	} else if (optionCategoria.value == 'Trainee') {
		precio = (200 * descTrainee) * btnNumber.value;
	} else {
		precio = (200 * descjunior) * btnNumber.value;
	}
	return precio;
}

function restablecer(){
	document.getElementById("totalAPagar").innerHTML = '0.00';
}

function resumen(){
	document.getElementById("totalAPagar").innerHTML = final()}