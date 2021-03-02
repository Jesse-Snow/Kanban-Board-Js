function onDragStart(event) {
    // Guarda "id" dataTransfer
    event.dataTransfer.setData("text/plain",event.target.id)
}

function onDragOver(event) {
    event.preventDefault()
}

function onDrop(event) {
    // Pega "id" guardado no objeto dataTransfer
    const id =  event.dataTransfer.getData("text")
    
    // Seleciona o Elemento draggable
    const draggableElement = document.getElementById(id)
    
    // Seleciona a dropzone
    const dropzone = event.target

    // Acrescenta Draggable a Dropzone
    dropzone.appendChild(draggableElement)

    // Reinicia objeto dataTransfer
    event.dataTransfer.clearData()
}

// Adicionar Novas Tasks

const form = document.getElementById("form")
const input = document.getElementById("input")
const ul = document.getElementById("toDos")

form.addEventListener("submit",(ev)=>{
    ev.preventDefault()

    const inputValue = input.value

    if(inputValue) {
        // Criar elementos
        const newElement = document.createElement("li")
        newElement.innerText = inputValue
        newElement.setAttribute("class","remove")
        ul.appendChild(newElement)
        input.value = ""

        // Atributos para novos Elementos  
        newId = Math.floor(Math.random() * 100);
        console.log(newId)
        newElement.setAttribute("draggable","true")
        newElement.setAttribute("ondragstart","onDragStart(event)")
        newElement.setAttribute("id",newId)

        form.style.display = "none"
        // Esconder elementos botão direito
        newElement.addEventListener("contextmenu",(ev)=>{
            ev.preventDefault()
            newElement.remove();
        })
    }

})


// Add Button and Cancel Button
form.style.display = "none"
function ShowForm() {
    if (form.style.display === "none") {
      form.style.display = "block";
    }
}
const cancelButton = document.getElementById("cancel")
cancelButton.addEventListener("click",(ev)=>{
    ev.preventDefault()
    if (form.style.display === "block"){
        form.style.display = "none"
        input.value =""
    }
})
