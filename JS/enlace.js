// comienzo del código para los enlaces
const input = document.querySelector("input")
const addBtn = document.querySelector(".enlaceBtn")
const enlaceUl = document.querySelector("ul")
const vacio = document.querySelector(".vacio")

addBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita que se recargue la página

    const text = input.value;

    if (text !== '') { //impide que el valor sea en blanco
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
        p.style.display = 'inline-block'; // Establecer estilo para mostrar en línea

        const deleteBtn = addBtnDelete(); // Crear el botón de eliminar
        li.appendChild(p);
        li.appendChild(deleteBtn); // Agregar el botón de eliminar al lado del texto *importante*
        enlaceUl.appendChild(li);

        input.value = ""; //para que no se quede el enlace en la barra
        vacio.style.display = "none"; // borrar no "tienes enlaces"
    }
});


function addBtnDelete() {
    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete"; //crea una nueva clase CSS

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement; //borra el elemento padre
        enlaceUl.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            vacio.style.display = "block"
        }

    })
    return deleteBtn;


}