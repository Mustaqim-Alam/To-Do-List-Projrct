document.addEventListener("DOMContentLoaded", function () {
  let addButton = document.getElementById("addButton");
  let inputBox = document.getElementById("inputBox");
  let dayElement = document.querySelector(".day");
  let time = document.querySelector(".time");

  function updateCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
    time.innerHTML = currentTime;
  }
  updateCurrentTime();

  setInterval(updateCurrentTime, 1000);

  let currentDay = new Date().getDay();
  function dayName() {
    switch (currentDay) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
    }
    dayElement.innerHTML = dayName;
  }

  dayName();


  try {
    addButton.addEventListener("click", () => {
      let newNote = inputBox.value;
      console.log(newNote);
      if (newNote !== "") {
        // Selecting the task-container element
        const taskContainer = document.querySelector(".list-container");

        // Creating a new task list element
        const taskList = document.createElement("div");
        taskList.className = "tasks-list";

        //Creating title element for taskList
        const title = document.createElement("h6");
        title.innerHTML = newNote;

        //Creating check box element for taskList
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        //Creating Delet Button element for taskList
        const deletButton = document.createElement("button");
        const deletBoximg = document.createElement("img");
        deletBoximg.src = "./delete-bin-6-line.svg";
        deletButton.appendChild(deletBoximg);

        //Adding Event on delete button to deleting task from container
        deletButton.addEventListener("click", () => {
          taskContainer.removeChild(taskList);
          console.log("Element Deleted");
        });

        //Adding Event on checkbox to if its checked then add line-through on title
        checkBox.addEventListener("click", () => {
          if (checkBox.checked === true) {
            title.style.textDecoration = "line-through";
            console.log("Line done");
          } else if (checkBox.checked === false) {
            title.style.textDecoration = "none";
          }
        });

        // Appending a new task title to the task-list element
        taskList.appendChild(checkBox);
        taskList.appendChild(title);
        taskList.appendChild(deletButton);

        // Appending the new task list element to the task-container
        taskContainer.appendChild(taskList);

        //Clearing the task input element
        inputBox.value = "";
        console.log(newNote);

        const activePreview = document.querySelector(".active-list-container");
        const compeletedContainer = document.querySelector(
          ".completed-list-container"
        );
        try {
          if (checkBox.checked === false) {
            activePreview.appendChild(taskList);
          } else if (checkBox.checked === true) {
            compeletedContainer.appendChild(taskList);
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      } else if (newNote === "") {
        inputBox.placeholder = "Please! Enter your new note";
        setTimeout(() => {
          inputBox.placeholder = "Enter a new note";
        }, 1500);
      }
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
