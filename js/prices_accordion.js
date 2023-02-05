let burger_menu = document.querySelector(".accordion_btn");
let header_menu = document.querySelector("#header_menu");
let link = document.querySelector("ul");

function showBurgerMenu() {
    burger_menu.classList.toggle("active");
    header_menu.classList.toggle("active");
}

burger_menu.addEventListener("click", showBurgerMenu);
link.addEventListener("click", showBurgerMenu);