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

    cards.forEach(function(card) {

        card.addEventListener("click", function() {

            const text = card.textContent.trim();

            if (text.includes("T-Shirts")) {
                window.location.href = "tshirt.html";
            }

            else if (text.includes("Hoodies")) {
                window.location.href = "hoodie.html";
            }

            else if (text.includes("Mugs")) {
                window.location.href = "mug.html";
            }

            else if (text.includes("Phone Cases")) {
                window.location.href = "phone-case.html";
            }

            else if (text.includes("Tote Bags")) {
                window.location.href = "tote-bag.html";
            }

            else if (text.includes("Caps")) {
                window.location.href = "cap.html";
            }

        });

    });

});
