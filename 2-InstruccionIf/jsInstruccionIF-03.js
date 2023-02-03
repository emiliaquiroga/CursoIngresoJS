function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if( edad >=18){
		alert("La condición es verdadera");
		}

	else {
		alert("La condición es falsa");
	}

	alert("estoy despues del if else");
}