const countShoppingNumber = document.querySelector("#header-shopping")
const cartShopping = document.querySelectorAll(".icons")
console.log(cartShopping);

const cart = document.querySelector(".header__div--a");
cart.addEventListener("click", ()=>{
    window.open("../check/check.html")
})


document.querySelector("main").addEventListener("click",(event)=>{
    event.preventDefault()
    if(event.target.classList.contains("fa-cart-shopping")){
        document.querySelector(".cart-badge").textContent = Number( document.querySelector(".cart-badge").textContent) +1 //"When adding a product to the cart, the value of the cart in the header changes."
        //Selected 
        const imageProduct = event.target.closest(".card").querySelector("img"); //Selects the image in the cart when clicked.
        const imageSrc = imageProduct.getAttribute("src"); //"Gets the src content of the selected image."
        const bookName = event.target.closest(".card").querySelector(".card-title").textContent
        const price = event.target.closest(".card").querySelector(".card-text span").textContent;
        console.log(price);

        //localStorage
        localStorage.setItem("selectedImageSrc", imageSrc); //"Saves the src of the image to the local storage."
        localStorage.setItem("selectedPrice",price)
        localStorage.setItem("selectedBookName", bookName)

    }

})

