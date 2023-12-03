const taskInput = document.querySelector("#task_input");
const addBtn = document.querySelector(".add_btn");
const taskContainer = document.querySelector(".task_container");
const deleteAllBtn = document.querySelector(".delete_all_btn");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (taskInput.value !== "") {
    let li = document.createElement("li");

    let p = document.createElement("p");
    p.textContent = taskInput.value;
    li.append(p);

    let del_button = document.createElement("button");
    del_button.textContent = "Delete";
    li.append(del_button);

    taskContainer.append(li);

    taskInput.value = "";
    saveData();
  }
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
});

deleteAllBtn.addEventListener("click", () => {
  taskContainer.innerHTML = "";
  saveData();
});

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}

showTask();
