 (() =>{
   // import checkComplete from"./componets/checkComplete.js";
   // import deleteIcon from"./componets/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");//boton

/*btn.addEventListener("click", (evento)=>{//EL BOTON ACTUA AL DAR CLICK  ANTES DE CREAR LA FUNCION ANONIMA
    evento.preventDefault();// que no se recargue la pagina cuando le damos click al boton
    const input = document.querySelector("[data-form-input]");// input o cuadro que recibe el texto LO PONEMOS AQUI PORQUE QUEREMOS QUE SE EJECUTE CUANDO LE DAMOS CLICK EN EL BOTON

    alert("funciona");
})*/
const createTask = (evento)=>{
    evento.preventDefault();//prevenir comportamiento por defecto que tiene un formulario 
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card")  ;//agregamos esta clase que era la que tenia para css
    input.value="";//hacemos que el input se quede vacio al oprimir el boton osea se LIMPIE
    //esta parte era del html y la pasamos aqui, y añadimos el value del input
   const taskContent = document.createElement("div");
   const btn = document.querySelector('[data-form-btn]');

    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);//agregamos a la lista un hijo
};

btn.addEventListener('click',createTask);

//esto esta en los otros archivos con la importacion de arriba pero no funciono
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


 })();//con estos corchetes hacemos que el codigo no sea visible en la consola, pero si funciona