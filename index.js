
// main binding event listener
document.getElementById("registerForm").addEventListener("submit", confirmSubmission)

// function
function confirmSubmission(e) {
    e.preventDefault();

    let text;
    if (confirm("Are you sure to submit") == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
    alert(text);
}