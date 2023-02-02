let taskInput = document.getElementById("taskInput");
let todo = JSON.parse(localStorage.getItem("todo-list"));
filters = document.querySelectorAll(".filters span");
tasklist = document.querySelector(".task-list");
clearTask = document.querySelector(".clear-btn");
const textInput = document.getElementById("text");


let editTaskId;
let isEditedTask = false;

filters.forEach(btn => {
    btn.addEventListener("click", () => {
       document.querySelector("span.active").classList.remove("active");
       btn.classList.add("active");
       showTodo(btn.id);
    })

});

const showTodo = (filter) => {
    let list = "";
    if(todo){
        todo.forEach((agenda, id) => {
            let isCompleted = agenda.status == "completed" ? "checked" : "";
            if(filter == agenda.status || filter == "all"){
                list += ` <div class="task">
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}" >${agenda.name}</p>   
                        </label>
            
                        <div class="actions">
                             <button onclick="editTask(${id}, '${agenda.name}')" class="edit">Edit</button>
                             <button onclick="deleteTask(${id})" class="delete">Delete</button>
                        </div>
                    </div>`;      
            }
            
        });
    }
    tasklist.innerHTML = list || `<span class="no-task"> No Task Here!</span>`;
}
showTodo("all");

const editTask = (editId, editName) => {
    editTaskId = editId;
    isEditedTask = true;
    textInput.value = editName;
    todoDeleteController();
    
}

const deleteTask = (taskId) => {
    todo.splice(taskId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todo));
    showTodo("all");
}

clearTask.addEventListener("click", () => {
    todo.splice(0, todo.length);
    localStorage.setItem("todo-list", JSON.stringify(todo));
    showTodo("all");
})

const updateStatus = (selectedAgenda) => {
   let agendaName = selectedAgenda.parentElement.lastElementChild;
   if(selectedAgenda.checked){
        agendaName.classList.add("checked");
        todo[selectedAgenda.id].status = "completed";
   }else{
    agendaName.classList.remove("checked");
    todo[selectedAgenda.id].status = "pending";
   }
   localStorage.setItem("todo-list", JSON.stringify(todo));
}

taskInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const textInput = document.getElementById("text");
    let userTask = textInput.value.trim();
    if(e.type == "submit" && userTask){
        if(!isEditedTask){
            if(!todo){
                todo = [];
            }
            let taskInfo = {name: userTask, status: "pending"};
            todo.push(taskInfo);
            createTask();
            
        }else{
            isEditedTask = false;
            todo[editTaskId].name = userTask;
        }
        textInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todo));
        showTodo("all");
    }
})


const logout = () => {
    if (confirm("Do you want to Logout?")) {
        location.href = "/";
        // return res.redirect("/");
    };
};


// CREATE TASK
const createTask = () => {
    let todoValue = document.getElementById("text")


    let todoData = {
        "todoValue": todoValue.value,

    }

    fetch('http://localhost:3010/todo', {

        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });

};

