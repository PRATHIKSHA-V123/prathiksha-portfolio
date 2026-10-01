// =========================================
// DARK MODE / LIGHT MODE
// =========================================

const themeToggle =
    document.getElementById("theme-toggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    // Change button icon

    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});