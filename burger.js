let hamburger = document.querySelector('.burger');
let menu = document.querySelector('.menu-container');

const toggleMenu = () => {
    menu.classList.toggle('active');
}
const burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
    burger.classList.toggle("open");
});

hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
})
