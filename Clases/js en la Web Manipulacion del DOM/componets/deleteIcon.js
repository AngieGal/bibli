const deleteIcon = () => {
    
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",deleteTask )
    return i;
   
}
const deleteTask = (event) => {//boton de eliminar
        const parent =event.target.parentElement;//encontramos su padre
        parent.remove();//con esto lo eliminamos
}

export default deleteIcon;