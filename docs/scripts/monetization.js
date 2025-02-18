document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");

   
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

   
    const pageInfo = {
        pageTitle: "Home - YouTube Content Guide",
        author: "Brigham Iga",
        contentTypes: ["Shorts", "Long-form Videos"]
    };

    console.log(pageInfo);

   
    pageInfo.contentTypes.forEach(function(contentType) {
        console.log(`Content Type: ${contentType}`);
    });

   
    if (!localStorage.getItem("themeColor")) {
        localStorage.setItem("themeColor", "light");
    } else {
        document.body.style.backgroundColor = localStorage.getItem("themeColor") === "dark" ? "#333" : "#f4f4f4";
    }

 
    const themeButton = document.createElement("button");
    themeButton.textContent = "Toggle Theme";
    themeButton.addEventListener("click", function() {
        const newTheme = localStorage.getItem("themeColor") === "dark" ? "light" : "dark";
        localStorage.setItem("themeColor", newTheme);
        document.body.style.backgroundColor = newTheme === "dark" ? "#333" : "#f4f4f4";
    });

    document.body.appendChild(themeButton);
});