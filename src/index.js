let NAMA = prompt('masukan nama yang ulangtahun')

window.onload = function delay() {
  setTimeout(3000);
};
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

document.addEventListener("DOMContentLoaded", function nama() {
  document.getElementById("nama").innerHTML = NAMA
});

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");

document.addEventListener("DOMContentLoaded", function namaKamu() {
  document.getElementById("namaKamu").innerHTML = "" + NAMA
});

let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);


let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)

// auto-landscape.js

function updateOrientation() {
    const isLandscape = window.innerWidth > window.innerHeight;
    if (isLandscape) {
        document.body.classList.add('landscape');
        document.body.classList.remove('portrait');
    } else {
        document.body.classList.add('portrait');
        document.body.classList.remove('landscape');
    }
}

// Initial check
updateOrientation();

// Listen for orientation changes
window.addEventListener('resize', updateOrientation);
