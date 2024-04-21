const btnNav = document.querySelector(".btn-mobile-nav");
const headEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headEl.classList.toggle("nav-open");
});

// Event listener to change text content when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const dynamicContent = document.getElementById("dynamic-content");
  const changeTextButton = document.getElementById("change-text-btn");

  changeTextButton.addEventListener("click", function () {
    dynamicContent.textContent = "Text changed! Click again to revert.";
  });
});

// Sanity check function
function sanityCheck() {
  console.log("!Sanity check: all good!");
}

// Call the sanity check function
sanityCheck();


document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
          var content = this.nextElementSibling;
          content.classList.toggle("active");
      });
  });
});