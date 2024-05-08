const checkComplete = ()=>{/*creamos el elmento boto de visto */
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");//agrgamos las clases
    i.addEventListener("click",completeTask);
    return i;
}

const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");/*al darle click se ponga en color azul-completeIcon es el que tiene el color en css*/
    element.classList.toggle("far");
}
export default checkComplete;