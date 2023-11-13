const imageSrc = localStorage.getItem("selectedImageSrc");
document.querySelector(".image").src = imageSrc

const priceValue = localStorage.getItem("selectedPrice");
document.querySelector(".productPrice").textContent = priceValue

const booksName = localStorage.getItem("selectedBookName");
document.querySelector(".booksName").textContent = booksName;
document.querySelector(".noProduct").style.display="none"
//............
document.querySelector(".products").addEventListener("click", (event)=>{
if(event.target.classList.contains("fa-plus")){
    document.querySelector(".number").textContent++
const quantity = Number(document.querySelector(".number").textContent);
document.querySelector(".productPrice").textContent = (quantity * priceValue).toFixed(2); 

// document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent
// document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
totalCalc()
}else if(event.target.classList.contains("fa-minus")){
    if(document.querySelector(".number").textContent>1){
        document.querySelector(".number").textContent--
        const quantity = Number(document.querySelector(".number").textContent);
document.querySelector(".productPrice").textContent = (quantity * priceValue).toFixed(2); 
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

console.log(document.querySelector(".continue"));
document.querySelector(".continue").addEventListener("click", ()=>{
    window.open("../bootstrapt/index.html")
})

document.querySelector(".cart").textContent= priceValue
document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)

const totalCalc= ()=>{
document.querySelector(".cart").textContent= document.querySelector(".productPrice").textContent
document.querySelector(".ship").textContent= document.querySelector(".cart").textContent > 300 ? "00.00" : "50.00"
document.querySelector(".totalPrice").textContent = (Number(document.querySelector(".cart").textContent) + Number(document.querySelector(".ship").textContent)).toFixed(2)
}