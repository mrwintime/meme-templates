document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const profileIcon = document.getElementById("profile-icon");
    const profileMenu = document.getElementById("profile-menu");
    
    // Toggle sidebar
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("open");
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });

    // Toggle profile menu
    if (profileIcon) {
        profileIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            profileMenu.classList.toggle("show");
        });

        // Close profile menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
                profileMenu.classList.remove("show");
            }
        });
    }
});
