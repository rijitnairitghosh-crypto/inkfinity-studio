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
function addToCart(product, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        product: product,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
        }
function addToWishlist(product, price) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let exists = wishlist.find(item => item.product === product);

    if (!exists) {
        wishlist.push({
            product: product,
            price: price
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(product + " added to Wishlist ❤️");
    } else {
        alert(product + " is already in your Wishlist ❤️");
    }

    window.location.href = "wishlist.html";
    }
