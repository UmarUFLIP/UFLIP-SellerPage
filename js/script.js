// JavaScript for UFLIP Seller Page

// Set current year for footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".mobile-header");
const menuOpt = document.querySelector(".menu-options");
const mobNavList = document.querySelector(".mobile-nav-list");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-open-nav");
  menuOpt.classList.toggle("open");
  // The line below is needed to hide pointer events.
  mobNavList.classList.toggle("displayOn");
});

// The slider information (1 - Fund, 2 - Broadcast, 3 - Buy)
