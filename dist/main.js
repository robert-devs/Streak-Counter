const streakContainer = document.getElementById("mytask");
const taskName = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const imageInput = document.getElementById("image-input");
const addTask = document.getElementById("add-task");
const addBtnIcon = document.querySelector(".icon-inner svg");
console.log(addBtnIcon);
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
                const todosHtml = this.taskArray.map(({ id, date, taskName, imageInput }) => {
                    const difference = (new Date() - new Date(date)) / 1000 / 60 / 60 / 24;
                    let show = difference < 0 ? " Done In Time" : `Late by ${Math.floor(difference)} Days`;
                    const element = `<li class="task-item  ? "completed" : ""}" id="${id}">
              
                <div class="task-body">
                    <p> ${imageInput}data-id="${id}</p>
                    <h4>${date} <span class="due-date">${dateInput ? "" : "Due: " + date}</span></h4>
                    <p>${taskName}<span class="name">${taskName ? " completed" : ""} data-id="${id}</span></p>
                    <button class="close delete-btn" data-id="${id}">close</button>
                    <button class="close delete-btn" data-id="${id}">add</button>
                </li>`;
                    return element;
                });
                streakContainer.innerHTML = todosHtml.join("");
            }
            else {
                streakContainer.innerHTML = "<h2 style='text-align: center;'>No Streak added Yet</h2>";
            }
        };
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
// export {};
//# sourceMappingURL=main.js.map