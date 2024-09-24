const taskInput = document.getElementById("task-input");
const list = document.getElementById("list");

function addTaskButton() {
  if(taskInput.value === ''){
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    list.appendChild(li);
    taskInput.value = '';  // Clear the input field after adding the task

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    span.classList.add("cancel");

    span.onclick = function() {
      li.remove();
    };
  }
  taskInput.value = '';  // Clear the input field after adding the task
  saveData();
}

list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.targetclassList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);


function saveData(){
   localStorage.setItems("data", list.iunnerHTML);
}

