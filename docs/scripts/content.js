document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
    
 
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
    
  
    document.getElementById("ctaButton").addEventListener("click", function() {
        alert("Start your YouTube journey today!");
        localStorage.setItem("ctaClicked", "true");
    });
    
   
    if (localStorage.getItem("ctaClicked")) {
        console.log("User has already clicked the CTA button.");
    }
    
   
    const youtubeGuide = {
        name: "YouTube Content Guide",
        year: new Date().getFullYear(),
        topics: ["Monetization", "Content Types", "Growth Strategies"],
        displayInfo: function() {
            return `${this.name} - Established in ${this.year}`;
        }
    };
    
    console.log(youtubeGuide.displayInfo());
    
 
    const tips = ["Consistency is key", "Engage with your audience", "Optimize video titles"];
    console.log("YouTube Tips:", tips.join(", "));
});