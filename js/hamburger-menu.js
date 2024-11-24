const hamburgerMenuElement = document.querySelector(".hamburger-menu");
const headerDropdownElement = document.querySelector(".header-dropdown");

hamburgerMenuElement.addEventListener("click", () => {
    hamburgerMenuElement.classList.toggle("opened");
    if(hamburgerMenuElement.classList.contains("opened")) {
        headerDropdownElement.style.translate = "0";
        hamburgerMenuElement.style.translate = parseInt(window.getComputedStyle(headerDropdownElement).width) * -1 + "px";
    }
    else {
        headerDropdownElement.style.translate = "100%";
        hamburgerMenuElement.style.translate = 0;
    }
});