document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");

    
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

 
    const shortsButton = document.getElementById("learnMoreShorts");
    const longFormButton = document.getElementById("learnMoreLongForm");

   
    if (localStorage.getItem("shortsClicked")) {
        console.log("Shorts button clicked previously.");
    }

    if (localStorage.getItem("longFormClicked")) {
        console.log("Long-form button clicked previously.");
    }

    shortsButton.addEventListener("click", function() {
        localStorage.setItem("shortsClicked", "true");
        alert("YouTube Shorts are short, engaging videos under 60 seconds designed to capture attention quickly!");
    });

    
    longFormButton.addEventListener("click", function() {
        localStorage.setItem("longFormClicked", "true");
        alert("Long-form videos allow for in-depth storytelling, education, and better audience engagement over time.");
    });
});