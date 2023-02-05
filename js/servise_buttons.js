let gardens_button = document.querySelector(`#gardens`);
let lawn_button = document.querySelector(`#lawn`);
let planting_button = document.querySelector(`#planting`);

let cards_image = document.querySelectorAll(`.garden-card-image`);
let planting_images = document.querySelectorAll(`.planting-card-image`);
let lawn_images = document.querySelectorAll(`.lawn-card-image`);

function GardenButton() {
    if (
        lawn_button.matches(".buttons_hover") &&
        planting_button.matches(".buttons_hover")
    ) {
    } else if (
        lawn_button.matches(".buttons_hover") === false &&
        planting_button.matches(".buttons_hover") === false
    ) {
        gardens_button.classList.toggle("buttons_hover");
         planting_images.forEach((unit) => unit.classList.toggle("blur"));
         lawn_images.forEach((unit) => unit.classList.toggle("blur"));
    } else if (
        lawn_button.matches(".buttons_hover") ||
        planting_button.matches(".buttons_hover")
    ) {
        gardens_button.classList.toggle("buttons_hover");
        cards_image.forEach((unit) => unit.classList.toggle("blur"));
    }
}
function LawnButton() {
    if (
        gardens_button.matches(".buttons_hover") &&
        planting_button.matches(".buttons_hover")
    ) {
    } else if (
        gardens_button.matches(".buttons_hover") === false &&
        planting_button.matches(".buttons_hover") === false
    ) {
        lawn_button.classList.toggle("buttons_hover");
        planting_images.forEach((unit) => unit.classList.toggle("blur"));
        cards_image.forEach((unit) => unit.classList.toggle("blur"));
    } else if (
        gardens_button.matches(".buttons_hover") ||
        planting_button.matches(".buttons_hover")
    ) {
        lawn_button.classList.toggle("buttons_hover");
        lawn_images.forEach((unit) => unit.classList.toggle("blur"));
    }
}
function PlantingButton() {
    if (
        lawn_button.matches(".buttons_hover") &&
        gardens_button.matches(".buttons_hover")
    ) {
    } else if (
        lawn_button.matches(".buttons_hover") === false &&
        gardens_button.matches(".buttons_hover") === false
    ) {
        planting_button.classList.toggle("buttons_hover");

        cards_image.forEach((unit) => unit.classList.toggle("blur"));
        lawn_images.forEach((unit) => unit.classList.toggle("blur"));
    } else if (
        lawn_button.matches(".buttons_hover") ||
        gardens_button.matches(".buttons_hover")
    ) {
        planting_button.classList.toggle("buttons_hover");
        planting_images.forEach((unit) => unit.classList.toggle("blur"));
    }
}

gardens_button.addEventListener("click", GardenButton);
lawn_button.addEventListener("click", LawnButton);
planting_button.addEventListener("click", PlantingButton);



