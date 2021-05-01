$(document).ready(function () {
  // ensures DOM is loaded before JS is executed
  //--------- declarations------------------------

  var tasks = JSON.parse(localStorage.getItem("tasks"));

  // ------------ time manipulation to set corresponding background color---------------
  var time = moment();
  // time.set({ h: 12, m: 00 });
  // console.log(time);
  var currentHour = time.hour();
  console.log(currentHour);

  for (var i = 9; i < 18; i++) {
    if (currentHour == $(".time-block#" + i).attr("id")) {
      console.log("time checks");
      $(".time-block#" + i)
        .children("textarea")
        .addClass("present");
    } else if (currentHour > $(".time-block#" + i).attr("id")) {
      console.log("time checks");
      $(".time-block#" + i)
        .children("textarea")
        .addClass("past");
    } else {
      $(".time-block#" + i)
        .children("textarea")
        .addClass("future");
    }
  }

  //---------- functions ----------
  $("#currentDay").text(moment().format("dddd MMMM Do, YYYY"));

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
