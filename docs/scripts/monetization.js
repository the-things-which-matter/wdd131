document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
    
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
    
    
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

   
    const monetizationInfo = {
        program: "YouTube Partner Program",
        contentTypes: ["Shorts", "Long-form Videos"],
        eligibility: {
            shorts: "1,000 subscribers and 10 million Shorts views in the last 90 days.",
            longForm: "1,000 subscribers and 4,000 watch hours in the last 12 months."
        }
    };

    console.log(monetizationInfo);
});