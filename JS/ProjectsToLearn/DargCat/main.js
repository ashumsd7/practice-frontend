

const draggableElements= document.querySelectorAll('.draggable');

console.log(draggableElements)


const droppableElements= document.querySelectorAll('.droppable');

console.log(droppableElements)



// event 
draggableElements.forEach(ele=>{
    ele.addEventListener('dragstart',dragStart)
    ele.addEventListener('drag',drag)
    ele.addEventListener('dragend',dragEnd)
})


droppableElements.forEach(ele=>{
    ele.addEventListener('dragenter',dragEnter)
    ele.addEventListener('dragover',dragOver)
    ele.addEventListener('dragleave',dragLeave)
    ele.addEventListener('drop',dragEnd)
})


function dragStart(event){
    console.log('>>>>>>>>. start')
    const color=event.dataTransfer.setData('text', event.target.color)
    console.log(color)
}
function drag(){
    console.log('>>>>>>>>. drag')
}

function dragEnd(){
    console.log('>>>>>>>>. END')
}

// ---
function dragEnter(){
    console.log('>>>>>>>>. ENTER')
}
function dragOver(event){
    console.log('>>>>>>>>. over')
    event.preventDefault();
}
function dragLeave(){
    console.log('>>>>>>>>. leave')
}
function drop(){
    console.log('>>>>>>>>. drop')
}







