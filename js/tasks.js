//declare task modal variables
var displayAddToDo = document.getElementById('add-to-do-display');
var addToDoModal = document.querySelector('.add-todo-modal');
var closeToDoModal = document.getElementById('addToDoModalClose')
var addBtn = document.getElementById('addBtn')

//close add task modal
closeToDoModal.addEventListener('click', function(){
    addToDoModal.style.display='none';
})

//display add task modal
displayAddToDo.addEventListener('click', function(){
    addToDoModal.style.display = 'flex';
    quoteModalDiv.style.display = 'none';
})
