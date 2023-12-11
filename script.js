document.addEventListener("DOMContentLoaded", () => {

  // Display date
  // document.getElementById("currentDay").textContent = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Create the time blocks

  function timeBlocks() {

    var blocksContainer = document.querySelector(".container");

    for (var hour = 9; hour <= 17; hour++) {

      var hourBlock = document.createElement("div");
      hourBlock.classList.add("row", "time-block");

      hourBlock.setAttribute("data-hour", hour);

      var timeOfDay = document.createElement("div");
      timeOfDay.classList.add("col-md-1", "hour");

      var displayHour = hour % 12 || 12;
      var amorpm = hour < 12 ? "AM" : "PM";
      timeOfDay.textContent = `${displayHour} ${amorpm}`;

      var text = document.createElement("textarea");
      text.classList.add("col-md-10", "description");

      var saveBtn = document.createElement("button");
      saveBtn.classList.add("btn", "saveBtn", "col-md-1");
      saveBtn.textContent = "Save";

      hourBlock.appendChild(timeOfDay);
      hourBlock.appendChild(text);
      hourBlock.appendChild(saveBtn);

      blocksContainer.appendChild(hourBlock);

    }

  }

  // Handle the colours of the time blocks & highlight current time block
  function blockColours() {
    document.querySelectorAll(".time-block").forEach(hourBlock => {
      var blockColour = parseInt(hourBlock.dataset.hour);
      var now = dayjs().hour();
      $(`.time-block[data-hour="${now}"]`).css({
        "border-left": "2px solid #333333" 
        });

      if (blockColour < now) {
        hourBlock.classList.add("past");
        hourBlock.classList.remove("future", "present");

      } else if (blockColour === now) {
        hourBlock.classList.add("present");
        hourBlock.classList.remove("past", "future");

      } else {
        hourBlock.classList.add("future");
        hourBlock.classList.remove("past", "present");

      }
    });
  }

  // Launch Functions

  timeBlocks();
  blockColours();
 
});