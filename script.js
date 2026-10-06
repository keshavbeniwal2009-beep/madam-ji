// SURPRISE BUTTON ❤️

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}


// NO BUTTON 😭

function moveNoButton() {
    const button = document.querySelector(".no-btn");
    const message = document.getElementById("noMessage");

    button.style.transform =
        "translate(" +
        (Math.random() * 160 - 80) +
        "px, " +
        (Math.random() * 100 - 50) +
        "px)";

    message.style.display = "block";
}


// FLOATING HEARTS ❤️

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 600);