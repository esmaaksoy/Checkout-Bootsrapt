// const countShoppingNumber = document.querySelector("#header-shopping")
// const cartShopping = document.querySelectorAll(".icons")
// console.log(cartShopping);

// const sepet = document.querySelector(".header__div--a");
// sepet.addEventListener("click", ()=>{
//     window.open("../checkout/check.html")
// })


document.querySelector("main").addEventListener("click",(event)=>{
    event.preventDefault()
    if(event.target.classList.contains("fa-cart-shopping")){
        console.log("hi");
        
        document.querySelector(".cart-badge").textContent = Number( document.querySelector(".cart-badge").textContent) +1
        console.log(document.querySelector(".cart-badge").textContent );
        
    }

})

