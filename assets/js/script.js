$(document).ready(function () {
  // ensures DOM is loaded before JS is executed
  //--------- declarations------------------------
  var time = new moment();

  var tasks = JSON.parse(localStorage.getItem("tasks"));
  //---------- functions ----------

  $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

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

  // ---------- event handlers ----------------
  $(".saveBtn").on("click", saveArray);
});
