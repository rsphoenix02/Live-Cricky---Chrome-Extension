// Retrieve the necessary elements from the HTML
const progressFill = document.getElementById("progressFill");
const taskCheckboxes = document.querySelectorAll(".task-item input[type='checkbox']");

// Function to calculate the progress percentage
function calculateProgress() {
  const totalTasks = taskCheckboxes.length;
  const completedTasks = document.querySelectorAll(".task-item input[type='checkbox']:checked").length;
  return (completedTasks / totalTasks) * 100;
}

// Function to update the progress bar
function updateProgressBar() {
  const progress = calculateProgress();
  progressFill.style.width = progress + "%";
}

// Add event listeners to task checkboxes to update the progress bar
taskCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", updateProgressBar);
});

// Update progress bar on page load
updateProgressBar();
