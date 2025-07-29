let headerMenu = document.querySelector(".header__menu");
let headerList = document.querySelector(".header__list");
headerMenu.addEventListener("click", () => {
	headerMenu.classList.toggle("header__menu-active");
	headerList.classList.toggle("header__list-active");
});