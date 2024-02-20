




let toggleMenu = document.querySelector(".toggle-menu");
let headerUl = document.querySelector(".header-links");

toggleMenu.addEventListener("click", showMenu);



function showMenu(e) {
  e.preventDefault();

  headerUl.classList.toggle("show-menu");
}
