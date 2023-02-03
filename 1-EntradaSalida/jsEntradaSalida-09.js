/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//Quiroga María Emilia - DIV Z - Grupo 1 - Ejercicio 9
function mostrarAumento()
{
    var importeIngresado;
    var aumentoDeSueldo;
    var importeAumentado;

    importeIngresado = document.getElementById("txtIdSueldo").value;
    importeIngresado = parseInt(importeIngresado);

    aumentoDeSueldo = importeIngresado *10/100;
    importeAumentado = importeIngresado + aumentoDeSueldo;

    document.getElementById("txtIdResultado").value = importeAumentado;
}



/*
    var importeIngresado;
    var aumentoDeSueldo;
    var sueldoAumentado;
    var sueldoDisminuido;
    var disminucionDeSueldo;
 

    aumentoDeSueldo = importeIngresado * 10 / 100;
    sueldoAumentado = importeIngresado + aumentoDeSueldo;
    alert(sueldoAumentado);

    sueldoAumentado = importeIngresado + importeIngresado *10/100;
    alert(sueldoAumentado);

    sueldoAumentado = importeIngresado *1.1;
    alert(sueldoAumentado);

    aumentoDeSueldo = importeIngresado *0.10;
    sueldoAumentado = importeIngresado + aumentoDeSueldo;
    alert(sueldoAumentado); 

    disminucionDeSueldo= importeIngresado *10/100;
    sueldoDisminuido = importeIngresado - disminucionDeSueldo;
    alert("El sueldo final disminuido es: " + sueldoDisminuido);*/




