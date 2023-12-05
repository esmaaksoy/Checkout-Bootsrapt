document.addEventListener('DOMContentLoaded', function() {
    const existingProductsJSON = localStorage.getItem('shoppingCart');
    const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];
    if (existingProducts.length > 0) {
      localStorage.removeItem('shoppingCart');
    }
})  
const countShoppingNumber = document.querySelector("#header-shopping")
const cartShopping = document.querySelectorAll(".icons")
const cart = document.querySelector(".header__div--a");
const cartBadge = document.querySelector(".cart-badge");

//new page
cart.addEventListener("click", ()=>{
    window.open("../check/check.html")
})
document.querySelector("main").addEventListener("click",(event)=>{
    event.preventDefault()
    if(event.target.classList.contains("fa-cart-shopping")){
        document.querySelector(".cart-badge").textContent = Number( document.querySelector(".cart-badge").textContent) +1 //"When adding a product to the cart, the value of the cart in the header changes."
        //Selected 
        const imageProduct = event.target.closest(".card").querySelector("img"); //Selects the image in the cart when clicked.
       //localStorage................................................................................................................
        const productInfo = {
            imageSrc: imageProduct.getAttribute("src"),
            productName: event.target.closest(".card").querySelector(".card-title").textContent,
            productPrice: event.target.closest(".card").querySelector(".card-text span").textContent,
          };
          
          const existingProductsJSON = localStorage.getItem('shoppingCart');
          const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];
          existingProducts.push(productInfo);
          localStorage.setItem('shoppingCart', JSON.stringify(existingProducts));
    }
})


  
     
   