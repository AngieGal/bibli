const inputNacimiento = document.querySelector("#birth");//necesario el # porque es una clase
 
inputNacimiento.addEventListener("blur", (evento)=>{//evento duncion anonima
    validarNacimiento(evento.target);
});//se escuche cuando salga osea blur o cuando quite el punto de enfoque

function validarNacimiento(input){
const fechaCliente = new Date(input.value);// como que creamos un nuevo dato aparecera... Wed Sep 27 2023 19:00:00 GMT-0500 (hora estándar de Colombia) en la consola
//console.log(fechaCliente)//con esta sabemos la fecha que el usuario coloco
let mensaje = "";
if(!mayorDeEdad(fechaCliente)){
   mensaje=" Debes tener al menos 18 años";
}
input.setCustomValidity(mensaje); //funcion setCustomValidity define el mensaje de validacion personalizado para el elemento seleccionado
}

function mayorDeEdad(fecha){//compracion de fecha del usuario y fecha de hoy
    const fechaActual = new Date();//aqui detecta mi fecha actual
    const diferenciasFechas = new Date(//creamos un dato
        fecha.getUTCFullYear() + 18,// que se sume 18 a;os
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciasFechas <= fechaActual;//en caso de que no tengas mas de 18 saldra Debes tener al menos 18 como en el mensaje de arriba
}