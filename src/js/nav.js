// Add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const csUL = document.querySelector('#cs-expanded');
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));

// Ensure elements exist before attaching listeners
if (CShamburgerMenu && csUL) {
  // Toggle mobile navigation menu
  CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle("cs-active"); // Toggle active class on the hamburger menu
    CSnavbarMenu.classList.toggle("cs-active"); // Toggle active class on the navigation menu
    CSbody.classList.toggle("cs-open"); // Toggle open class on the body for mobile menu
    toggleAriaExpanded(); // Update aria-expanded attribute
  });

  // Checks the value of aria-expanded on the cs-ul and updates it
  function toggleAriaExpanded() {
    const csExpanded = csUL.getAttribute('aria-expanded');
    csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
  }
}

// Handle dropdown toggling in the mobile navigation
if (dropDowns.length > 0) {
  dropDowns.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent bubbling up to other elements
      item.classList.toggle('cs-active'); // Toggle active class on dropdown
    });
  });
}

// Highlight the current page in the navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname; // Get the current URL path
    const navLinks = document.querySelectorAll("#cs-navigation .cs-li-link"); // Select all navigation links

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath || (link.getAttribute("href") === "/" && currentPath === "/")) {
            link.classList.add("cs-active"); // Add 'cs-active' class to the matching link
        } else {
            link.classList.remove("cs-active"); // Ensure others don't retain the class
        }
    });
});
