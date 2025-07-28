let headerMenu = document.querySelector(".header__menu");
let headerList = document.querySelector(".header__list");
headerMenu.addEventListener("click", () => {
	headerMenu.classList.toggle("header__menu-active");
	headerList.classList.toggle("header__list-active");
});

let carousel = document.querySelector(".book-carousel__carousel");
let books = Array.from(document.querySelectorAll(".book-carousel__book"));

books[0].classList.toggle("book-carousel__book-preview");
books[2].classList.toggle("book-carousel__book-preview");

carousel.addEventListener("click", () => {
	const save = books[0];
	carousel.appendChild(save); // move o primeiro para o final visualmente

	books.push(books.shift());

	//  MUDANÇA 4: Atualiza classes de preview
	books.forEach((book) => book.classList.remove("book-carousel__book-preview"));
	if (books[0]) books[0].classList.add("book-carousel__book-preview");
	if (books[2]) books[2].classList.add("book-carousel__book-preview");
});
