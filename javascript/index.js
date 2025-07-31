let headerMenu = document.querySelector(".header__menu");
let headerList = document.querySelector(".header__list");
let headerCategories = document.querySelector(".header__categories");
headerMenu.addEventListener("click", () => {
	headerMenu.classList.toggle("header__menu-active");
	headerList.classList.toggle("header__list-active");
	headerCategories.classList.toggle("header__categories-active");
});