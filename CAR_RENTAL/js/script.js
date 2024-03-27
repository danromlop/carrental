/* slider */

const slides = document.querySelectorAll(".slider-show");

const botones = document.querySelectorAll(".boton-slider");

let slideIndex = 0;

function iniciarSlider(num){

    slides.forEach(function(slide){
        slide.classList.add("hide")
        slide.classList.remove("show")
    })
    
    slideIndex = num;

    slides[slideIndex].classList.add("show");

    botones.forEach(function(boton){
        boton.classList.remove("boton-activo")
    })

    botones[num].classList.add("boton-activo")
}