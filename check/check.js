const existingProductsJSON = localStorage.getItem('shoppingCart');
const existingProducts = existingProductsJSON ? JSON.parse(existingProductsJSON) : [];
document.querySelector(".noProduct").style.display = "none";

const productsContainer = document.querySelector(".products");

existingProducts.forEach((product,index) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product", "p-2", "d-flex", "justify-content-around", "border-bottom", "border-0", "border-secondary-subtle", "mb-2");

  productDiv.innerHTML = `
    <div class="d-flex align-items-center">
      <img src="${product.imageSrc}" alt="" width="100px" class="me-3 image" />
      <p class="booksName h3">${product.productName}</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="p-2 border border-1 border-dark rounded-2 p-1">
        <i class="fa-solid fa-plus fa-2x me-4"></i>
        <span class="h3 me-4 number" data-number="${index}">1</span>
        <i class="fa-solid fa-minus fa-2x"></i>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <p class="productPrice me-5" >${product.productPrice}</p>
      <i class="fa-solid fa-trash-can fa-2x"></i>
    </div>
  `;

  productsContainer.appendChild(productDiv);
 
});




//!..............................
document.querySelector(".products").addEventListener("click", (event)=>{
const clickedProductIndex = event.target.closest('.product').querySelector('.productPrice').getAttribute('data-index');
const clickedProduct = existingProducts[clickedProductIndex];
const clickedProductPrice = clickedProduct.productPrice;
if(event.target.classList.contains("fa-plus")){
document.querySelector(".number").textContent++
const quantity = Number(document.querySelector(".number").textContent);
document.querySelector(".productPrice").textContent = (quantity * clickedProductPrice).toFixed(2); 

totalCalc()
}else if(event.target.classList.contains("fa-minus")){
    if(document.querySelector(".number").textContent>1){
        document.querySelector(".number").textContent--
        const quantity = Number(document.querySelector(".number").textContent);
document.querySelector(".productPrice").textContent = (quantity * clickedProductPrice).toFixed(2); 
    }document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent;
    totalCalc()
}else if(event.target.classList.contains("fa-trash-can")){
    document.querySelector(".products").style.display="none"
    document.querySelector(".noProduct").style.display="block"
    document.querySelector(".cart").textContent = "0.00"
    document.querySelector(".ship").textContent = "0.00"
    document.querySelector(".totalPrice").textContent= "0.00"
}
})



document.querySelector(".continue").addEventListener("click", ()=>{
    window.open("../bootstrapt/index.html")
})


// document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
// document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)

const totalCalc= ()=>{
document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent
document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)
}

//!........................................................................................

// const imageSrc = localStorage.getItem("selectedImageSrc");
// document.querySelector(".image").src = imageSrc

// const priceValue = localStorage.getItem("selectedPrice");
// document.querySelector(".productPrice").textContent = priceValue

// const booksName = localStorage.getItem("selectedBookName");
// document.querySelector(".booksName").textContent = booksName;
// document.querySelector(".noProduct").style.display="none"
// //............
// document.querySelector(".products").addEventListener("click", (event)=>{
// if(event.target.classList.contains("fa-plus")){
//     document.querySelector(".number").textContent++
// const quantity = Number(document.querySelector(".number").textContent);
// document.querySelector(".productPrice").textContent = (quantity * priceValue).toFixed(2); 

// // document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent
// // document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
// totalCalc()
// }else if(event.target.classList.contains("fa-minus")){
//     if(document.querySelector(".number").textContent>1){
//         document.querySelector(".number").textContent--
//         const quantity = Number(document.querySelector(".number").textContent);
// document.querySelector(".productPrice").textContent = (quantity * priceValue).toFixed(2); 
//     }document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent;
//     totalCalc()
// }else if(event.target.classList.contains("fa-trash-can")){
//     document.querySelector(".products").style.display="none"
//     document.querySelector(".noProduct").style.display="block"
//     document.querySelector(".cart").textContent = "0.00"
//     document.querySelector(".ship").textContent = "0.00"
//     document.querySelector(".totalPrice").textContent= "0.00"
// }
// })

// console.log(document.querySelector(".continue"));
// document.querySelector(".continue").addEventListener("click", ()=>{
//     window.open("../bootstrapt/index.html")
// })

// document.querySelector(".cart").textContent= priceValue
// document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
// document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)

// const totalCalc= ()=>{
// document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent
// document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
// document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)
// }









