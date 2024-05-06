function mostrar(evento){
    var d = new Date(); /*creamos un nuevo dato */
    var hora = checkTime(d.getHours()) + ":" + 
    checkTime(d.getMinutes()) + ":" +
     checkTime(d.getSeconds());/*pedimos hora minuto y segundo */
   function checkTime(i) {
         if (i<10){
            i="0" + i;
        }
        return i ;
    }
    alert("La hora es: " + hora);
}
