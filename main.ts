import { Task } from "./interfaces/task.interface.js";

const streakContainer = document.getElementById("mytask");
const taskName = document.getElementById("task-input") as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const imageInput = document.getElementById("image-input") as HTMLInputElement;
const addTaskBtn = document.getElementById("add-task") as HTMLButtonElement;
const addBtnIcon = document.querySelector(".icon-inner svg") as HTMLElement;

const showAddForm = () => {
  (document.querySelector(".main") as HTMLElement).style.display = "none";
  (document.querySelector(".body") as HTMLElement).style.display = "block";
};
const hideAddForm = () => {
  (document.querySelector(".main") as HTMLElement).style.display = "flex";
  (document.querySelector(".body") as HTMLElement).style.display = "none";
};

setTimeout(() => {}, 1000);

class tasks {
  private taskArray: Task[] = [];
  constructor() {
    this.addEventListener();
    this.loadTasks();
  }
  addTask(task: Task) {
    this.taskArray.push(task);
    this.loadTasks();
  }
  getTask() {
    return this.taskArray;
  }

  loadTasks = () => {
    if (this.taskArray.length > 0) {
      const taskHtml = this.taskArray.map(
        ({ id, date, taskName, imageInput }) => {
          const difference: any =
            ((new Date() as any) - (new Date(date) as any)) /
            1000 /
            60 /
            60 /
            24;

          let show = difference < `${Math.floor(difference)} Days`;

          const element: string = `<li class="task-item   id="${id}" >
              
                    <div class="task-body" >
                         <img src="${imageInput} "style= width:250px ,height:300px;alt="">
                           <h3>${taskName}</>
                            <h6>${date} </h6>
                            
                    </div>
                   
                    
                </li>`;
          return element;
        }
      );
      streakContainer!.innerHTML = taskHtml.join("");

      // this.addEventListeners()
    } else {
      streakContainer!.innerHTML =
        "<h2 style='text-align: center;'>No Streak added Yet</h2>";
    }
  };
  addEventListener = () => {
    const addTaskBtn = document.getElementById("add-task") as HTMLButtonElement;

    // console.log("fgfgfgfg",addTaskBtn);
  };
}

const todos = new tasks();
const newTodosubmits = (e: any) => {
  const taskNamevalue = taskName.value;
  const dateValue = dateInput.value;
  const imageValue = imageInput.value;

  if (!taskNamevalue) {
    alert("taskName is required");
    return;
  }
  if (!dateValue) {
    alert("dateValue is required");
    return;
  }
  if (!imageValue) {
    alert("imageValue is required");
    return;
  }
  const newTodo: Task = {
    taskName: taskNamevalue,
    date: dateValue,
    imageInput: imageValue,
    id: Math.floor(Math.random() * 10000000),
  };
  todos.addTask(newTodo);
  taskName.value = "";
  dateInput.value = "";
  imageInput.value = "";
};
