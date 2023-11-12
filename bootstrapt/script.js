const countShoppingNumber = document.querySelector("#header-shopping")
const cartShopping = document.querySelectorAll(".icons")
console.log(cartShopping);

const sepet = document.querySelector(".header__div--a");
sepet.addEventListener("click", ()=>{
    window.open("../check/check.html")
})


document.querySelector("main").addEventListener("click",(event)=>{
    event.preventDefault()
    if(event.target.classList.contains("fa-cart-shopping")){
        document.querySelector(".cart-badge").textContent = Number( document.querySelector(".cart-badge").textContent) +1
        const imageProduct = event.target.closest(".card").querySelector("img");
      
  
  const imageSrc = imageProduct.getAttribute("src");
  localStorage.setItem("selectedImageSrc", imageSrc)

    }

})

