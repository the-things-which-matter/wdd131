

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
