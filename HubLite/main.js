document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuOverlay = document.getElementById("menu-overlay");
    const menuList = document.getElementById("menu-list");

    menuButton.addEventListener("click", function () {
        menuOverlay.style.display = "flex";
    });

    menuOverlay.addEventListener("click", function (event) {
        if (event.target === menuOverlay) {
            menuOverlay.style.display = "none";
        }
    });
});
