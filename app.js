// Define Variables for User Data
const name = "Kayleigh";
let hasDownloadedResume = false;

// Button Event

function myFunction() {
    alert ("Your resume is being downloaded sucessfully!");
    hasDownloadedResume = true;
    
    document.getElementById("mybtn").removeEventListener("click", myFunction);
}

document.getElementById("mybtn").addEventListener("click", myFunction);

// Greeting
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// When the page loads, display the greeting
window.onload = function() {
  const greetingText = showGreeting("Kayleigh");
  document.getElementById("greeting").textContent = greetingText;
};

// Deadline
function daysUntilDeadline(deadlineDate) {
  const today = new Date();
  const deadline = new Date(deadlineDate);

  const timeDifference = deadline - today; // milliseconds
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

// Hypothetical project due on December 6, 2025
const remainingDays = daysUntilDeadline("2025-12-06");
document.getElementById("deadline").textContent =
  "Days left until project deadline: " + remainingDays;


