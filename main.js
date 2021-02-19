function onDragStart(event) {
    // Guarda "id" dataTransfer
    event.dataTransfer.setData("text/plain",event.target.id)

    event.currentTarget.style.backgroundColor = "blue"
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

// Posso dar mutiplos IDs para li para arrasta-los