document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-icon");
    const isDarkModeEnabled = localStorage.getItem("dark-mode") === "enabled";

    if (isDarkModeEnabled) {
        document.body.classList.add("dark-mode");
        darkModeToggle.classList.add("active"); // Optionally highlight the icon when dark mode is active
    }

    darkModeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.classList.remove("active"); // Optionally change the icon style when inactive
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.classList.add("active"); // Optionally change the icon style when active
        }
    });
});
