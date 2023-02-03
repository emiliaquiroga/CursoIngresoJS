/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

//Quiroga María Emilia - DIV Z - Grupo 1 - Ejercicio 10
	function mostrarAumento()
{
	var importeIngresado;
	var descuento;
	var importeFinal;

	importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseInt(importeIngresado);

	descuento = importeIngresado * 25/100;

	importeFinal = importeIngresado - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;

	
}

