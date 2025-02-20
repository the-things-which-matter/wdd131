document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "prod1", name: "Camera" },
        { id: "prod2", name: "Microphone" },
        { id: "prod3", name: "Lighting Kit" }
    ];
    
    const productSelect = document.getElementById("product");
    
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
    if (window.location.pathname.includes("review.html")) {
        try {
            let count = localStorage.getItem("reviewCount") || 0;
            count++;
            localStorage.setItem("reviewCount", count);
            document.body.insertAdjacentHTML('beforeend', `<p>Reviews submitted: ${count}</p>`);
        } catch (e) {
            console.error("LocalStorage is not available", e);
        }
    }

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});