document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
    
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    const shortsButton = document.getElementById("shortsInfo");
    const longFormButton = document.getElementById("longFormInfo");

    shortsButton.addEventListener("click", function() {
        alert("YouTube Shorts are short, engaging videos under 60 seconds designed to capture attention quickly!");
    });

    longFormButton.addEventListener("click", function() {
        alert("Long-form videos allow for in-depth storytelling, education, and better audience engagement over time.");
    });
});
