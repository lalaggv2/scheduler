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

var todos = {};
const today = moment().format("MM-DD-YY");

// I need a way to add new to dos
function saveToDo(hour, task) {
  todos[hour] = task;
  localStorage.setItem(today, JSON.stringify(todos));
}

function loadPlanner(start, end) {
  const now = moment().format("MMMM Do YYYY, h:mm:ss a");
  const currentHour = moment().format("HH");

  const todos = JSON.parse(localStorage.getItem(today));
  $("#today").text(now);
  for (var i = start; i <= end; i++) {
    var row = $("<div class='row'>");
    var hour = $(`<div class= "col-md-2">`);
    var task = $(`<input id=${i} class="todo-item col-md-6">`);
    var save = $(`<button id='save' class= "col-md-1" data-hour=${i}>`);

    hour.text(`${i}:00`);

    if (i < currentHour) {
      task.addClass("past");
      task.prop("disabled", true);
      save.prop("disabled", true);
    } else if (hour === currentHour) {
      task.addClass("present");
    } else {
      task.addClass("future");
    }

    if (todos) {
      task.val(todos[i] || "");
    }

    save.text("save");
    save.on("click", function (e) {
      const buttonHour = $(e.target).attr("data-hour");
      saveToDo(buttonHour, $(`#${buttonHour}`).val());
    });
    row.append(hour);
    row.append(task);
    row.append(save);
    $("#planner").append(row);
  }
}

loadPlanner(7, 22);
