let tasksData = {};
const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let dragElement = null;

function addTask(title, description, column) {
  const div = document.createElement("div");

  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <button>Delete</button>
            `;
  column.appendChild(div);

  div.addEventListener("drag", function () {
    dragElement = div;
  });

  const deleteButton = div.querySelector("button");
  deleteButton.addEventListener("click", function () {
    div.remove();
    updateTaskCount();
  });

  return div;
}

function updateTaskCount() {
  //   count related loop
  [todo, progress, done].forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    tasksData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerHTML,
        description: t.querySelector("p").innerHTML,
      };
    });

    localStorage.setItem("tasks", JSON.stringify(tasksData));
    count.innerHTML = tasks.length;
  });
}

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const column = document.querySelector(`#${col}`);
    data[col].forEach((task) => {
      addTask(task.title, task.description, column);
    });
  }

  updateTaskCount();
}

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    dragElement = task;
  });
});

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", function (e) {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", function (e) {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  // by deafault browser doesn't allow keeping any element on other.
  // to say browser to allow this we use:
  column.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  column.addEventListener("drop", function (e) {
    e.preventDefault();

    column.appendChild(dragElement);
    column.classList.remove("hover-over");

    updateTaskCount();
  });
}
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// modal related logic
const toggleModalBtn = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskBtn = document.querySelector("#add-new-task");

toggleModalBtn.addEventListener("click", function () {
  modal.classList.toggle("active");
});
modalBg.addEventListener("click", function () {
  modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", function () {
  const taskTitle = document.querySelector("#task-title-input").value;
  const taskDescription = document.querySelector(
    "#task-description-input",
  ).value;

  addTask(taskTitle, taskDescription, todo);
  updateTaskCount();
  modal.classList.remove("active");

  document.querySelector("#task-title-input").value = "";
  document.querySelector("#task-description-input").value = "";
});
