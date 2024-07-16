const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");

    {menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
      nav.classList.add("scrolled");
      mobileNav.classList.add("scroll")
      nav.classList.remove("scrolled");
      mobileNav.classList.remove("scrolled");
    }
  });
  menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
  });
  closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
}
