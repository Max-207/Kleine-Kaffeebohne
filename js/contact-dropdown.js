const footerContactElement = document.querySelector(".footer-contact");
const contactDropdownElement = document.querySelector(".contact-dropdown");

let isInsideDropdown = false;

footerContactElement.addEventListener("mouseenter", () => {
    contactDropdownElement.classList.remove("hidden");
});

footerContactElement.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!isInsideDropdown)contactDropdownElement.classList.add("hidden");
      }, 750); 
});

contactDropdownElement.addEventListener("mouseenter", () => {
    isInsideDropdown = true;
    contactDropdownElement.classList.remove("hidden");
});

contactDropdownElement.addEventListener("mouseleave", () => {
    isInsideDropdown = false;
    setTimeout(() => {
        contactDropdownElement.classList.add("hidden");
      }, 750); 
});
