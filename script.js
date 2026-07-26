document.addEventListener("DOMContentLoaded", function () {

    // Shop Now button
    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "shop.html";
        });
    }

    // Category cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", function () {

            const text = card.textContent.trim();

            if (text.includes("Tote Bags")) {
                window.location.href = "tote-bag.html";
            }

            else if (text.includes("T-Shirts")) {
                alert("T-Shirts page will be added soon!");
            }

            else if (text.includes("Hoodies")) {
                alert("Hoodies page will be added soon!");
            }

            else if (text.includes("Mugs")) {
                alert("Mugs page will be added soon!");
            }

            else if (text.includes("Phone Cases")) {
                alert("Phone Cases page will be added soon!");
            }

            else if (text.includes("Caps")) {
                alert("Caps page will be added soon!");
            }

        });

    });

});
