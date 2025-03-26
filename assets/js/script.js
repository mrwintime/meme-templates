document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = false; // Change to true for logged-in state

    // Profile Menu
    const profileIcon = document.getElementById("profile-icon");
    const profileMenu = document.getElementById("profile-menu");

    if (profileIcon) {
        profileIcon.addEventListener("click", function () {
            profileMenu.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
                profileMenu.classList.add("hidden");
            }
        });
    }

    // Toggle Sidebar Menu
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.style.display = sidebar.classList.contains("active") ? "block" : "none";
    });

    // Close sidebar when clicking outside
    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.style.display = "none";
    });

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (isLoggedIn) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            body.classList.toggle("light-mode", savedTheme === "light");
        }
    }

    themeToggle.addEventListener("click", function () {
        if (!isLoggedIn) {
            window.location.href = "login.html";
            return;
        }
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    });
});
