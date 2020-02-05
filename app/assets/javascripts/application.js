// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require bootstrap
//= require turbolinks
//= require_tree .


function OpenMOT()
	{document.getElementById("MOT").classList.add("rotate-box")}

function CloseMOT()
	{document.getElementById("MOT").classList.remove("rotate-box")}

var slideIndex = 1;
    showSlides(slideIndex);
function showSlides(n){
   var i;
   var slides = document.getElementsByClassName("data-for-thumbnail");
   if(n > slides.length){slideIndex = 1}
   if(n < 1){slideIndex = slides.length}
   for(i = 0; i < slides.length; i++){
       slides[i].style.display = "none"
   }
   slides[slideIndex-1].style.display = "block"
}

var carousel = document.querySelector(".people");
var cellCount = 8;
var selectedIndex = 0;
function getCarousel(){
   var angle = selectedIndex / cellCount * -360;
   carousel.style.transform = "rotateY(" + angle + "deg)"
}

function prev(n){
   showSlides(slideIndex += n);
   selectedIndex--;
   getCarousel()
}

function next(n){
   showSlides(slideIndex += n);
   selectedIndex++;
   getCarousel()
}