document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        alert("Welcome to INKFINITY STUDIO! 🚀");
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            alert("This category will be available soon!");
        });
    });

});
