// -- GIVEN I am using a daily planner to create a schedule
// -- WHEN I open the planner
// -- THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// -- THEN I can enter an event
// --  WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// To create a scheduler that allows the user to add, modify and delete content

// 1. I need to create a table in html to be used as schedule

//  2. I need to check moment.js to add the dates information

//  3. I need a way for people to modify the html table with new info

// A function that get items modified.

//  4. that new info need to be able to add more, modify and delete the items

//  The scheduler needs to know the date (day of the week) and hours of the day

//  first use a bootstrap model with list to design the appearance of the schedule

// then with JS access it to modify it.

var toDos = ["item 1", "item 2", "item 3"];

function showToDos() {
  // document.createElement("div")
  console.log(toDos);
  //document.getElementById("todos");
}

// I need a way to add new to dos
function saveToDo(hour, task) {
  toDos.push(task);
  console.log(task);
  localStorage.setItem("hour", hour);
  localStorage.setItem("task", task);
  let getItem = localStorage.getItem("task");
  console.log(getItem);
  // alert('saving')
}

function loadPlanner(start, end) {
  const now = moment().format("MMMM Do YYYY, h:mm:ss a");
  const currentHour = moment().format("HH");

  $("#today").text(now);
  for (var i = start; i <= end; i++) {
    var row = $("<div>");
    var hour = $(`<div>`);
    var task = $(`<input id=${i} class="todo-item">`);
    var save = $(`<button data-hour=${i}>`);

    hour.text(`${i}:00`);

    save.text("save");
    save.on("click", function (e) {
      console.log($(e.target).text());
      const buttonHour = $(e.target).attr("data-hour");
      saveToDo(buttonHour, $(`#${buttonHour}`).val());
    });
    row.append(hour);
    row.append(task);
    row.append(save);
    $("#planner").append(row);
  }
  showToDos();
}

loadPlanner(9, 17);

//save to local storage and get from local storage
function savePlanner() {
  var hoursTask = localStorage.getItem("hour", JSON.stringify(task));
  //const data = JSON.parse(localStorage.getItem("todo")); (
  localStorage.setItem("hour", task);
}
