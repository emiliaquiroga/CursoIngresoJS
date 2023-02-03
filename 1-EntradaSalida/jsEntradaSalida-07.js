/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//Quiroga María Emilia - DIV Z - Grupo 1 - Ejercicio 7
function sumar()
{	
    var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var suma;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	suma = primerNumeroIngresado + segundoNumeroIngresado;
	alert("La suma es: " + suma);
	
}

function restar()
{
    var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var resta;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	resta = primerNumeroIngresado - segundoNumeroIngresado;
	alert("El resultado es: " + resta);
	
}

function multiplicar()
{ 
    var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var multiplicacion;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	multiplicacion= primerNumeroIngresado * segundoNumeroIngresado;
	alert("La multiplicacion es: " + multiplicacion);
	
}

function dividir()
{
    var primerNumeroIngresado;
	var segundoNumeroIngresado;
	var division;

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;
	
	primerNumeroIngresado = parseInt(primerNumeroIngresado);
	segundoNumeroIngresado = parseInt(segundoNumeroIngresado);

	division = primerNumeroIngresado / segundoNumeroIngresado;
	alert("La division es: " + division);
	
}

