// Declarations
var rowElement = $(".time-block");

// Declare array of objects (time and task description) and populate
var tasks = new Array(9);
for (let i = 0; i < tasks.length; i += 1) {
  tasks[i] = { time: rowElement.get(i).id, desc: "Task " + i }; //<--testing
}

//functions to save and retrieve arrays from localstorage
function saveArray(name, array) {
  localStorage.setItem("name", JSON.stringify(array));
}

function retrieveArray(name, array) {
  array = JSON.parse(localStorage.getItem("name"));
  return array;
}

// tasks = retrieveArray("tasks", tasks);
// saveArray("tasks", tasks);
// console.log(tasks);
