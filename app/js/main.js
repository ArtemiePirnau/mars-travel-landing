window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".exploration__text");
  const dot = document.querySelector(".exploration__dot");
  const factsItems = document.querySelectorAll(".facts__item");
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const menuList = menu.querySelector(".menu__list");

  dot.addEventListener("click", () => {
    text.classList.toggle("show");
  });

  factsItems.forEach((fact) => {
    fact.addEventListener("click", () => {
      fact.classList.toggle("show");
    });
  });

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
  });
  // once
  AOS.init({ once: true });
});
