let $ = document
let input = $.querySelector('input')
let ulElem = $.querySelector('ul')
let userTodo
let todoForm = $.querySelector('.add')
let IElem = $.querySelectorAll('i')
let notif = $.querySelector('.notif')
function addNewTodo(userTodo) {
    let newLiElem = $.createElement('li')
    newLiElem.className = 'list-group-item d-flex justify-content-between align-items-center'

    let newSpanElem = $.createElement('span')
    newSpanElem.innerHTML = userTodo

    
    let newIElem = $.createElement('i')
    newIElem.className = 'fa fa-trash-o delete'

    newIElem.addEventListener('click' , function(event) {
        event.target.parentElement.remove()
       // notification
    

    })
    
    newLiElem.append(newSpanElem , newIElem)
    console.log(newLiElem)
    

    ulElem.append(newLiElem)


}



todoForm.addEventListener('submit' , function(event) {
    event.preventDefault()  
})


input.addEventListener('keypress', function (event) {
    userTodo = event.target.value.trim()
    if (event.keyCode == 13) {
        if (userTodo) {
            input.value = ''
            addNewTodo(userTodo)
        }
    }
})
