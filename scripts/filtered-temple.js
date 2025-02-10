document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const gallery = document.querySelector(".gallery");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-758914-wallpaper.jpg" },
    { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980, October, 27", area: 52900, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-1549775-wallpaper.jpg" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 40793, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1522378-wallpaper.jpg" }
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

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.textContent.toLowerCase();

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
