// Secret button
const secretButton = document.getElementById("secret-button");
const secretMessage = document.getElementById("secret-message");
secretButton.addEventListener("click", function() {
secretMessage.classList.toggle("hidden");
});
function showWarning() {
    document.getElementById("warning").style.display = "block";
}

function closeWarning() {
    document.getElementById("warning").style.display = "none";
}