/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
//Quiroga María Emilia - DIV Z - Grupo 1 - Ejercicio 8
function SacarResto()
{
    var dividendoIngresado;
	var divisorIngresado;
	var resultadoOperacion;

	dividendoIngresado= document.getElementById("txtIdNumeroDividendo").value;
	divisorIngresado = document.getElementById("txtIdNumeroDivisor").value;
	
	dividendoIngresado = parseInt(dividendoIngresado);
	divisorIngresado = parseInt(divisorIngresado);
    
    resultadoOperacion = dividendoIngresado % divisorIngresado;

    alert("El resto es: " + resultadoOperacion);
}
