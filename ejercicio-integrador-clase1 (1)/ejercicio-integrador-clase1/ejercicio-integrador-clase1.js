//Quiroga María Emilia - DIV Z - Grupo 1 - Ejercicio Integrador
function mostrar()
{
    let razonSocial;
    let nombreTitular;
    let dniTitular;
    let fechaInicio;
    let digito;

    razonSocial = prompt ("Ingrese razón social de la empresa");
    nombreTitular = prompt("Ingrese nombre del Titular");

    dniTitular = document.getElementById("dniTitular").value;
    fechaInicio = document.getElementById("fechaInicio").value;
    digito = Math.floor(Math.random() * 10);


    alert("Razon social es " + razonSocial + " y su nombre es " + nombreTitular + ". Su dni es " + dniTitular + " y la fecha de inicio fue en " + fechaInicio + ". El CUIT es 30-"+ dniTitular + "-" + digito);

}
