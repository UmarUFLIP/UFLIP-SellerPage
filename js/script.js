// Set current year for footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".mobile-header");
const menuOpt = document.querySelector(".menu-options");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-open-nav");
});
