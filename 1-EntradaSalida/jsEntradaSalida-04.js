 function mostrar()
{
	
	//Reservo espacio en memoria para guardar el nombre del usuario
	let nombreIngresado; 
	
	// guardo en la variable nombre el texto que escribió elusuario dentro de la ventana prompt
	nombreIngresado = prompt("Ingrese su nombre");
	
	// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la página html
	document.getElementById("txtIdNombre").value = nombreIngresado;
}



