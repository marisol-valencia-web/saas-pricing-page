const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--open");

  const isOpen = navLinks.classList.contains("nav__links--open");
  navToggle.setAttribute("aria-expanded", isOpen);
});