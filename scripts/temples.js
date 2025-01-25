
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});