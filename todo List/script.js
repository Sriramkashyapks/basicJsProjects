function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");

  var taskText = document.createElement("span");
  taskText.textContent = taskInput.value;
  li.appendChild(taskText);

  var editInput = document.createElement("input");
  editInput.type = "text";
  editInput.style.display = "none";
  li.appendChild(editInput);

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteBtn);

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function() {
    editInput.value = taskText.textContent;
    taskText.style.display = "none";
    editInput.style.display = "inline-block";
    editInput.focus();
  };
  li.appendChild(editBtn);

  editInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Enter key
      event.preventDefault();
      if (editInput.value.trim() !== "") {
        taskText.textContent = editInput.value;
        editInput.style.display = "none";
        taskText.style.display = "inline-block";
      }
    }
  });

  taskList.appendChild(li);

  taskInput.value = "";
}
