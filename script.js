const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-tasks");
const errorDiv = document.getElementById("error-div");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText) {
    errorDiv.innerHTML = "";
    taskInput.value = "";
    //Create Div
    const singleTaskdiv = document.createElement("div");
    singleTaskdiv.classList.add("single-task");

    //Create Input
    const singleTaskText = document.createElement("input");
    singleTaskText.type = "Text";
    singleTaskText.value = taskText;
    singleTaskText.setAttribute("readonly", "readonly");

    //Create edit button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";
    //Create Complete button
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";
    //Create delete button
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    //Create component
    singleTaskdiv.appendChild(singleTaskText);
    singleTaskdiv.appendChild(editTask);
    singleTaskdiv.appendChild(completeTask);
    singleTaskdiv.appendChild(deleteTask);

    //Add task
    taskDiv.appendChild(singleTaskdiv);

    //Edit task
    editTask.addEventListener("click", function (e) {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";
        singleTaskText.removeAttribute("readonly");
        singleTaskText.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskText.setAttribute("readonly", "readonly");
      }
    });

    //Complete task
    completeTask.addEventListener("click", function (e) {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskdiv.classList.add("task-completed");
      }
    });

    //Delete task
    deleteTask.addEventListener("click", function (e) {
      taskDiv.removeChild(singleTaskdiv);
    });
  } else {
    errorDiv.innerHTML = "<p>Please write task name</P>";
  }
});
