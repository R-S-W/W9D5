const todos = [];
const list = document.getElementsByClassName('todos')[0];

if(list.children.length === 1){
    let jarr = JSON.parse(localStorage.getItem('stodos'))
    jarr.forEach(el => {
        todos.push(el);
    });
    populateList(todos);
}


// const form = getElementsByClassName('add-todo-form');

function addTodo(){
 
    let addTodoInput = document.querySelector("input[name='add-todo']");
    let todoObj = {value: addTodoInput.value, done: false};
    todos.push(todoObj);
    addTodoInput.value = "";
    
    populateList([todos[todos.length - 1]]);
    localStorage.setItem('stodos',JSON.stringify(todos));
};

function populateList(todos){
    // debugger
    todos.forEach((td)=> {
        const lb = document.createElement('label');
        const newString = document.createTextNode(td.value);
        lb.appendChild(newString);

        const cb = document.createElement('input');
        cb.type = "checkbox";
        cb.name = td.value;
        cb.checked = td.done;
        cb.setAttribute('class', 'cbutton');
        
        const li = document.createElement('li');
        li.append(lb);
        li.append(cb);
        list.append(li);
    });
};
const sbtn = document.querySelector("input[value='+ Add Todo']");
sbtn.addEventListener('click', e =>{
    addTodo();
}) ;

// const cbxs = document.querySelectorAll("input[type='checkbox']");
// const cbxs = document.getElementsByClassName("cbutton");

list.addEventListener('click', e =>{
    for(let i = 0; i < todos.length; i++){
        if(todos[i].value === e.target.name) {
            todos[i].done = e.target.checked
        }
        localStorage.setItem('stodos',JSON.stringify(todos));
    }
});


module.exports = addTodo;