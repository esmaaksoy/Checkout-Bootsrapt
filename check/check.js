
const imageSrc = localStorage.getItem("selectedImageSrc");
document.querySelector(".image").src = imageSrc

const priceValue = localStorage.getItem("selectedPrice");
document.querySelector(".productPrice").textContent = priceValue

const booksName = localStorage.getItem("selectedBookName");
document.querySelector(".booksName").textContent = booksName;

