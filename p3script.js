// Page Load Animation

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

});



// Scroll Reveal

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.classList.add("show");

        }

    });

});



// Glass Card Floating Effect

const card = document.querySelector(".glass-card");


let angle = 0;


setInterval(() => {

    angle += 0.02;

    card.style.transform =
    `translateY(${Math.sin(angle) * 8}px)`;

},30);
// Typing Animation

const text = [
    "Python Full Stack Developer",
    "Django Backend Developer",
    "API Builder",
    "Software Engineer"
];


let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typeEffect,500);

    }

}


typeEffect();

/* Mouse Glow */

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
// Back To Top

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
