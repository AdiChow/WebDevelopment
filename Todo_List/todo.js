let btnAdd = document.getElementById("btnAdd")
let newTask = document.getElementById("newTask")
let taskList = document.getElementById("taskList")

btnAdd.onclick = function () {
  // taskList.innerHTML += '<li>' + newTask.value + '</li>'
  const newItem = document.createElement('li')
  newItem.textContent = newTask.value
  taskList.appendChild(newItem)
}
function populateList() {
  for (i = 0; i < 100; i++) {
    taskList.innerHTML += '<li>' + i + '</li>'
  }
}
newTask.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btnAdd").click();
  }
});