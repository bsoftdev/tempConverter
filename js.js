function converter_temperatura() {
	const temperatura = document.getElementById('temperatura').value;
	const opcoes = document.getElementById('opcoes').value;
	let resultado;

	if (opcoes === 'ceusius') {
		resultado = temperatura+"ºC";
	}else if(opcoes === 'kelvin'){
		resultado = temperatura*9/5+32+"ºK";
	}else if(opcoes === 'fahrenheit'){
		resultado = Number(temperatura)+273.15+"ºF";
	}
	document.getElementById('resultado').innerHTML= ('A temperatura é : '+resultado)
}