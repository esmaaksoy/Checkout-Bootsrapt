
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
}else if(event.target.classList.contains("fa-minus")){
    if(document.querySelector(".number").textContent>1){
        document.querySelector(".number").textContent--
    }
}else if(event.target.classList.contains("fa-trash-can")){

    document.querySelector(".products").style.display="none"
    document.querySelector(".noProduct").style.display="block"
    // document.querySelector(".noProduct").style.textAlign="center"
   
 

}

})