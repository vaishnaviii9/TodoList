let todoInput =document.getElementById("todo-input")
let addTaskButton =document.getElementById("add-task-btn")
let todoList =document.getElementById("todo-list")

let tasks=[]

addTaskButton.addEventListener("click", ()=>{
   const taskText = todoInput.value.trim()
    if(taskText === "") return 
    
    const newTask={
        id: Date.now(),
        text : taskText,
        completed: false
    }

    tasks.push(newTask)
    todoInput.value=""
    // console.log(tasks);
    
})

