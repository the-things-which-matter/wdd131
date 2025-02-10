
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const gallery = document.querySelector(".gallery");


menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});


const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "docs/images/aba-nigeria.webp" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "docs/images/manti-utah-temple.webp" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "docs/images/payson-utah-temple.webp" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "docs/images/yigo-guam-temple.webp" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015, imageUrl: "docs/images/salt-lake-temple.webp" },
    { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980, October, 27", area: 52900, imageUrl: "docs/images/tokyo-japan-temple.webp" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 40793, imageUrl:  "docs/images/rome-italy-temple.webp" }
];


function displayTemples(filteredTemples) {
    gallery.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </figcaption>
        `;
        gallery.appendChild(card);
    });
}


displayTemples(temples);

document.querySelectorAll(".filter").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        document.querySelectorAll(".filter").forEach(link => {
            link.classList.remove("active");
        });
        
    
        link.classList.add("active");

       
        const filter = event.target.dataset.filter;

        let filteredTemples = temples;

        if (filter === "old") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "new") {
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }

     
        displayTemples(filteredTemples);
    });
});