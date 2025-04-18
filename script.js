const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dropdown = document.querySelector('.dropdown');
const navTools =document.querySelector('.toolNav');
const btnCatalogo = document.querySelector(".btnCatalogo");
const seccionCatalogo = document.querySelector('.seccionCatalogo');
const seccionAutos = document.querySelector(".seccionAutos");
const pageBody = document.querySelector(".body");
const main = document.querySelector(".html");
const header = document.querySelector(".header");
let windowHeight=0;

dropdown.onclick = () =>{
    navTools.classList.toggle("activo");
}
btnCatalogo.onclick= () =>{

    seccionCatalogo.classList.toggle("desplegar");
    seccionAutos.classList.toggle("headerScroll");
    pageBody.classList.toggle("noScroll");
    seccionCatalogo.classList.toggle("contenido-headerScroll")
    seccionAutos.style.height = windowHeight-100;
    
}
let currentSlide = 0;
const showSlide = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
window.addEventListener("resize", () => windowHeight=window.innerHeight)
window.addEventListener("load",() =>windowHeight=window.innerHeight)