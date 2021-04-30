var tasks = JSON.parse(localStorage.getItem("tasks"));

if (tasks === null) {
  tasks = [""];
  for (let i = 0; i < 9; i++) {
    tasks[i] = "";
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
} else {
  for (let i = 0; i < tasks.length; i++) {
    $("textarea#" + i).val(tasks[i]);
  }
}

function saveArray(event) {
  // console.log("Saving...");
  for (let i = 0; i < 9; i += 1) {
    tasks[i] = $("textarea#" + i).val();
  }
  // console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

$(".saveBtn").on("click", saveArray);
