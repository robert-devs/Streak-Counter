import {Task} from "./interfaces/task.interface.js";

const streakContainer = document.getElementById("mytask")
const taskName = document.getElementById("task-input") as HTMLElement
const dateInput = document.getElementById("date-input") as HTMLElement
const imageInput = document.getElementById("image-input") as HTMLElement
const addTask = document.getElementById("add-task") as HTMLElement
const addBtnIcon = document.querySelector(".icon-inner svg") as HTMLElement;

console.log(addBtnIcon);


const showAddForm = ()=>{
    (document.querySelector(".main") as HTMLElement).style.display = "none";
    (document.querySelector(".body") as HTMLElement).style.display = "block"
}
const hideAddForm = ()=>{
    (document.querySelector(".main") as HTMLElement).style.display = "flex";
    (document.querySelector(".body") as HTMLElement).style.display = "none"
}


class tasks {
    private taskArray: Task[] = []
    constructor() {
        this.loadTasks()
    }
    addTask(task: Task) {
        this.taskArray.push(task)
        this.loadTasks()
    }
    getTask() {
        return this.taskArray
    }

    loadTasks = () => {
        if (this.taskArray.length > 0) {
            const todosHtml = this.taskArray.map(({ id, date, taskName, imageInput }) => {
                const difference: any = ((new Date() as any) - (new Date(date) as any)) / 1000 / 60 / 60 / 24

                let show = difference < 0 ? " Done In Time" : `Late by ${Math.floor(difference)} Days`



                const element: string = `<li class="task-item  ? "completed" : ""}" id="${id}">
              
                <div class="task-body">
                    <p> ${imageInput}data-id="${id}</p>
                    <h4>${date} <span class="due-date">${dateInput ? "" : "Due: " + date}</span></h4>
                    <p>${taskName}<span class="name">${taskName ? " completed" : ""} data-id="${id}</span></p>
                    <button class="close delete-btn" data-id="${id}">close</button>
                    <button class="close delete-btn" data-id="${id}">add</button>
                </li>`
                return element
            })
            streakContainer!.innerHTML = todosHtml.join("")

            // this.addEventListeners()
        } else {
            streakContainer!.innerHTML = "<h2 style='text-align: center;'>No Streak added Yet</h2>"
        }
    }




}


