document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function removeFromStorage(taskText) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updatedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

  function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
}

  function removeFromStorage(taskText) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const updatedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

  function addTask(taskText, save = true) {
  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = function () {
    taskList.removeChild(li);
    removeFromStorage(taskText);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  taskInput.value = "";
}


    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
