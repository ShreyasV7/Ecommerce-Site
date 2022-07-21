let MainImg = document.getElementById("MainImg") ; 
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick=()=>{
       MainImg.src = smallimg[0].src;
}
smallimg[1].onclick=()=>{
       MainImg.src = smallimg[1].src;
}
smallimg[2].onclick=()=>{
       MainImg.src = smallimg[2].src;
}
smallimg[3].onclick=()=>{
       MainImg.src = smallimg[3].src;
}