const streakContainer = document.getElementById("mytask");
const taskName = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const imageInput = document.getElementById("image-input");
const addTask = document.getElementById("add-task");
const addBtnIcon = document.querySelector(".icon-inner svg");
const showAddForm = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".body").style.display = "block";
};
const hideAddForm = () => {
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".body").style.display = "none";
};
class tasks {
    constructor() {
        this.taskArray = [];
        this.loadTasks = () => {
            if (this.taskArray.length > 0) {
                const taskHtml = this.taskArray.map(({ id, date, taskName, imageInput }) => {
                    const difference = (new Date() - new Date(date)) / 1000 / 60 / 60 / 24;
                    let show = difference < 0 ? " Done In Time" : `${Math.floor(difference)} Days`;
                    const element = `<li class="task-item   id="${id}" >
              
                <div class="task-body" >
                    <p> ${imageInput}data-id="${id}</p>
                    <h4>${date} <span class="due-date"></span></h4>
                    <p>${taskName}<span class="name">${taskName} data-id="${id}</span></p>
                    
                </li>`;
                    return element;
                });
                streakContainer.innerHTML = taskHtml.join("");
            }
            else {
                streakContainer.innerHTML = "<h2 style='text-align: center;'>No Streak added Yet</h2>";
            }
        };
        this.addEventListener = () => {
            const addTaskBtn = document.getElementById("add-task");
        };
        this.addEventListener();
        this.loadTasks();
    }
    addTask(task) {
        this.taskArray.push(task);
        this.loadTasks();
    }
    getTask() {
        return this.taskArray;
    }
}
const todos = new tasks();
const newTodosubmits = (e) => {
    const taskNamevalue = taskName.value;
    const dateValue = dateInput.value;
    const imageValue = imageInput.value;
    if (!taskNamevalue) {
        alert("taskName is required");
        return;
    }
    if (!dateValue) {
        alert("taskName is required");
        return;
    }
    if (!imageValue) {
        alert("taskName is required");
        return;
    }
    const newTodo = {
        taskName: taskNamevalue,
        date: dateValue,
        imageInput: imageValue,
        id: Math.floor(Math.random() * 10000000)
    };
    todos.addTask(newTodo);
    taskName.value = "";
    dateInput.value = "";
    imageInput.value = "";
};
// export {};
//# sourceMappingURL=main.js.map