document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = false; // Change to true when user is logged in

    // Handle Profile Menu
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

    // Show correct user interface
    const loggedProfile = document.querySelector(".profile");
    const nonLoggedSection = document.querySelector(".non-logged");

    if (isLoggedIn) {
        loggedProfile.classList.remove("hidden");
        nonLoggedSection.classList.add("hidden");
    } else {
        loggedProfile.classList.add("hidden");
        nonLoggedSection.classList.remove("hidden");
    }

    // Handle Sidebar Toggle
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    menuIcon.addEventListener("click", function () {
        sidebar.style.display = "flex";
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.style.display = "none";
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
