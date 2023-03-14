const teksti = document.querySelector('.textarea')
const nappi = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')



function clickButton(e) {
    e.preventDefault()
    addTodo()
}
function addTodo() {
    const luettelo = document.createElement('div')
    luettelo.classList.add('luettelo')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = teksti.value
    luettelo.appendChild(item)

    if (teksti.value === ''){
        alert("Empty field!")
        document.getElementById('textarea'.style.border ="1.8px solid red");
     return
    }
    if (teksti.value.length <= 5){
        alert("Input must be longer than 5 letters!")
        return;
    }
    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = "DONE"
    checkbutton.classList.add("check-button")
    luettelo.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = "X"
    trashbutton.classList.add("trash-button")
    luettelo.appendChild(trashbutton)

    listtdl.appendChild(luettelo)
    teksti.value = ''

    saveLocalTodos(todoInput.value);

}


function okdel(e) {
    const item = e.target

    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }


    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
        removeLocalTodos(todo)
    }
}
nappi.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)

