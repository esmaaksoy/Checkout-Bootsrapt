/* -------------------------------------------------------------------------- */
/*                              + ve - butonları                              */
/* -------------------------------------------------------------------------- */
const products = document.querySelector(".products")


products.addEventListener("click",(event)=>{
   if(event.target.classList.contains("fa-trash-can")){
    document.querySelector(".product").remove()
    totalProductPrice()
   }
   if(event.target.classList.contains("fa-plus")){
    event.target.previousElementSibling.innerText++
    calculateProductPrice(event.target)
    totalProductPrice()
    
   }
   if(event.target.classList.contains("fa-minus")){
    if(event.target.nextElementSibling.innerText>1)
    event.target.nextElementSibling.innerText--
    calculateProductPrice(event.target)
    totalProductPrice()
   }
})

const calculateProductPrice = (e)=>{
    const productPrice = e.closest(".buttons-div").querySelector("#product-price")
    const price = e.closest(".product").querySelector("#discounted-price").innerText
    const quantity = e.closest(".buttons-div").querySelector("#quantity").innerText
    productPrice.innerText = price * quantity
}

const totalProductPrice = ()=>{
    const proPrice = document.querySelectorAll("#product-price")
    const total = [...proPrice].reduce((sum, price)=> sum + Number(price.innerText),0)
    document.querySelector("#selected-price").innerText = total.toFixed(2)

    const tax = 0.18
    const taxPrice = total * tax
    console.log(taxPrice);
    const ship = 25.99
    const shipping = total >3000 || total === 0.00 ? 0 : ship
    
    const subTotal = total + taxPrice + shipping
    document.querySelector("#shipping").innerText= shipping
    document.querySelector("#total").innerText = subTotal.toFixed(2)
    document.querySelector("#tax").innerText = taxPrice.toFixed(2)
  
    !subTotal && noProducts()
    
}

/* -------------------------------------------------------------------------- */
/*                            Navbar delete buttons                           */
/* -------------------------------------------------------------------------- */
const noProducts= ()=>{
  
    products.innerText = "No products"
    products.classList.add("no-product")
    document.querySelector(".delete-div").style.display = "none"
    
} 
document.querySelector(".delete-div").addEventListener("click",()=>{
    if(confirm("Are you sure?")){
         noProducts()
         totalProductPrice()
    }
    
})

window.addEventListener("load",()=>{
    totalProductPrice()
})