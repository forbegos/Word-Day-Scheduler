// Declarations

// add selectors here
var rowElement = $(".time-block");

// Declare array of objects (time and task description) and populate
var tasks = new Array(8);
for (let i = 0; i < tasks.length; i += 1) {
  tasks[i] = { time: rowElement.get(i).id, desc: "Task " + i };
}
