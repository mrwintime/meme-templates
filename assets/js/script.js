// Sidebar Toggle
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const profileIcon = document.getElementById("profile-icon");
const profileMenu = document.getElementById("profile-menu");
const authButtons = document.getElementById("auth-buttons");
const addIcon = document.getElementById("add-icon");

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.style.left = "-250px";
        }
        if (!profileContainer.contains(event.target)) {
            profileMenu.classList.add("hidden");
        }
    });
});

menuIcon.addEventListener("click", () => {
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

profileIcon.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
});

// Theme Toggle (Placeholder Functionality)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    window.location.href = "login.html";
});
