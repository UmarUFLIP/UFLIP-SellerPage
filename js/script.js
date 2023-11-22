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
// script.js

let currentSlide = 1; // Track the current slide

function changeSlide(slideNumber) {
  // Reset all images to initial state
  document.querySelectorAll(".features-imgs").forEach((img) => {
    img.style.transform = "translateX(0%)";
  });

  // Add color to the clicked button and remove from others
  document.querySelectorAll(".info-slider-btn").forEach((btn) => {
    btn.classList.remove("active-btn");
  });
  document
    .querySelector(".slider-btn-" + slideNumber)
    .classList.add("active-btn");

  // Adjust the transforms based on the clicked button
  document.querySelector(
    ".features-imgs:nth-child(1)"
  ).style.transform = `translateX(${(slideNumber - 1) * -100}%)`;
  document.querySelector(
    ".features-imgs:nth-child(2)"
  ).style.transform = `translateX(${(slideNumber - 2) * -100}%)`;
  document.querySelector(
    ".features-imgs:nth-child(3)"
  ).style.transform = `translateX(${(slideNumber - 3) * -100}%)`;

  // Update the current slide
  currentSlide = slideNumber;

  // Reset the timer
  resetTimer();
}

function resetTimer() {
  // Clear any existing timers
  clearTimeout(timer);

  // Set a new timer for the next automatic slide change
  timer = setTimeout(() => {
    // Increment the current slide
    currentSlide = (currentSlide % 3) + 1;

    // Change to the next slide automatically
    changeSlide(currentSlide);
  }, 5000); // Adjust the time interval (in milliseconds) as needed
}

// Initial setup: Start the timer
let timer = setTimeout(() => {
  // Increment the current slide
  currentSlide = (currentSlide % 3) + 1;

  // Change to the next slide automatically
  changeSlide(currentSlide);
}, 5000); // Adjust the time interval (in milliseconds) as needed
