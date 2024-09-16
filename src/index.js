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

// auto-scale.js

function autoScale() {
    const element = document.getElementById('scalable-element');
    const container = document.getElementById('container');

    // Calculate new dimensions
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Example: Scale the element to cover 75% of the container's width and height
    const scaleWidth = containerWidth * 0.75;
    const scaleHeight = containerHeight * 0.75;

    // Apply scaling using transform
    element.style.transform = `scale(${Math.min(scaleWidth / element.offsetWidth, scaleHeight / element.offsetHeight)})`;
}

// Call autoScale on window resize
window.addEventListener('resize', autoScale);

// Initial scale
autoScale();


let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)
