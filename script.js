
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// OPEN AND CLOSE MOBILE MENU
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MENU WHEN A LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
