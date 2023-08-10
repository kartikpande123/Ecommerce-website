const nbar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar")

if(nbar){
    nbar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}



let mainImag = document.getElementById("mainImg")
let smallImg = document.getElementsByClassName("small-img")

smallImg[0].onclick = function(){
    mainImag.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImag.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImag.src = smallImg[2].src;
}