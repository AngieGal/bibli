//PIEDRA, PAPEL O TIJERA
            //1 es para piedra es
            function aleatorio(min,max){
                return Math.floor(Math.random()* (max-min)+min) 
            }
        function eleccion(jugada){
            let resultado = ""
            if(jugada==1){
              resultado = "Piedra 🪨"
            }else if(jugada==2){
                resultado = "Papel 📰"
            }
            else if(jugada==3){//con esto si escribe 4 no aparecera nada porque si dejamos solo el else con cuanquier cosa dijiria elejiste tijera
                resultado = "Tijera ✂️"
            }else{//por si escriben otra cosa
               resultado="MAL ELEJIDO"
            }
            return resultado
        }
        let jugador =0
        let pc = 0;
        let triunfos = 0;
        let perdidas = 0;

    while(triunfos< 3 && perdidas < 3){//con esto hacemos que solo puedan jugar 3 veces
            pc = aleatorio(1,3)
            jugador= prompt("elije; 1 para piedra, 2 para papel, 3 para tijera")
                //alert("elejiste "+ jugador)
            alert("pc elige: " + eleccion(pc))
            alert("Tu eliges: " + eleccion(jugador))
            
        //COMBATE
            if(pc==jugador){
                alert("EMPATE")
            }else if (jugador == 1 && pc == 3){
                alert("GANASTE")
                triunfos = triunfos + 1//con esto se contara los triunfos y podra parar cuando ya sean 3 igual con perder
            }else if (jugador == 2 && pc == 1){
                alert("GANASTE")
                triunfos = triunfos + 1
            }else if (jugador == 3 && pc == 2){
                alert("GANASTE")
                triunfos = triunfos + 1
            }else {
                alert("perdiste")
                perdidas = perdidas + 1
            }/*minimizar las lineas
                if(pc==jugador){
                    alert("EMPATE")
                }else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1)||(jugador == 3 && pc == 2)){
                    alert("GANASTE")
                    triunfos ++
                }else {
                    alert("perdiste")
                    perdidas ++
                }*/
        }
        alert("Ganaste " + triunfos + " veces, Perdiste " + perdidas + "veces.");//esto nos mostrara cuantas veces ganaste o perdiste

       // let pc = aleatorio (1,3)esto antes de elejir que solo tenga tres psoibilidades
        
        //reto minimisar lineas
        /*if(pc==jugador){
            alert("EMPATE")
        }else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1)||(jugador == 3 && pc == 2)){
            alert("GANASTE")
        }else {
            alert("perdiste")
        }*/
    
        