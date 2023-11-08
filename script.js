const countShoppingNumber = document.querySelector("#header-shopping")
const cartShopping = document.querySelectorAll(".icons")
console.log(cartShopping);

cartShopping.forEach((cart)=>{
    cart.addEventListener("click",(event)=>{
        console.log(event.target);
    })
})


