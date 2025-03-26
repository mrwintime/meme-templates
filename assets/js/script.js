// Theme Toggle Logic
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if user is logged in (For now, using a simple variable. Later, use authentication check)
    const isLoggedIn = false; // Change to `true` if user is logged in

    // Apply saved theme (for logged-in users only)
    if (isLoggedIn) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            body.classList.toggle("light-mode", savedTheme === "light");
        }
    }

    // Theme Toggle Event
    themeToggle.addEventListener("click", function () {
        if (!isLoggedIn) {
            window.location.href = "login.html"; // Redirect non-logged-in users
            return;
        }

        body.classList.toggle("light-mode");

        // Save theme preference in localStorage
        const newTheme = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
    });
});

// Profile Dropdown Logic
document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.querySelector(".profile-icon");
    const profileMenu = document.getElementById("profile-menu");

    if (profileIcon && profileMenu) {
        profileIcon.addEventListener("click", function () {
            profileMenu.classList.toggle("hidden");
        });

        // Close the menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
                profileMenu.classList.add("hidden");
            }
        });
    }
});
