const existingProductsJSON = localStorage.getItem('shoppingCart');
const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];
const productsContainer = document.querySelector(".products");
document.querySelector(".noProduct").style.display = "none";

existingProducts.forEach((product,index) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product", "p-2", "d-flex", "justify-content-around", "border-bottom", "border-0", "border-secondary-subtle", "mb-2");
  productDiv.innerHTML = `
    <div class="d-flex align-items-center"style="width: 500px" >
      <img src="${product.imageSrc}" alt="" width="100px" class="me-3 image" />
      <p class="booksName h3">${product.productName}</p>
    </div>
    <div class="d-flex justify-content-between align-items-center" style="width: 200px" >
      <div class="p-2 border border-1 border-dark rounded-2 p-1 icons">
        <i class="fa-solid fa-plus fa-2x me-4"></i>
        <span class="h3 me-4 number" data-number="${index}">1</span>
        <i class="fa-solid fa-minus fa-2x"></i>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center"style="width: 200px" >
      <p class="productPrice me-5" >${product.productPrice}</p>
      <i class="fa-solid fa-trash-can fa-2x"></i>
    </div>
  `;
  productsContainer.appendChild(productDiv);
});
document.querySelector(".continue").addEventListener("click", ()=>{
  window.open("../bootstrapt/index.html")
})



//!..............................
productsContainer.addEventListener("click", (event)=>{
if(event.target.classList.contains("fa-plus")){
event.target.nextElementSibling.innerText++
calculateTotalPrice(event.target)
}else if(event.target.classList.contains("fa-minus")){
  if(event.target.previousElementSibling.innerText>1){
    event.target.previousElementSibling.innerText--
    calculateTotalPrice(event.target)
  }
}else if(event.target.classList.contains("fa-trash-can")){
  event.target.closest(".product").remove()
    // document.querySelector(".noProduct").style.display="block"
    document.querySelector(".cart").textContent = "0.00"
    document.querySelector(".ship").textContent = "0.00"
    document.querySelector(".totalPrice").textContent= "0.00"
  
}
})
const calculateTotalPrice= (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent

  const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price")

  productPrice.textContent = (discountedPrice * quantity).toFixed(2)
  calculateTotalPrice()
}





// document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
// document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)












