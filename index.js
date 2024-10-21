function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const hamburgerIcon = document.querySelector('.hamburger i');
    
    menu.classList.toggle('show-menu'); // Toggle menu visibility
    
    // Toggle between the hamburger icon and close (cross) icon
    if (menu.classList.contains('show-menu')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times'); // Show cross icon
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars'); // Show hamburger icon
    }
}


// Get the elements
var popup = document.getElementById("video-popup");
var closeBtn = document.querySelector(".close-popup");
var videoTrigger = document.getElementById("play-video"); 
var iframe = document.getElementById("popup-video");
var videoSrc = iframe.src; 


videoTrigger.addEventListener('click', function() {
    popup.style.display = "block";
    iframe.src = videoSrc + "?autoplay=1"; 
});


closeBtn.addEventListener('click', function() {
    popup.style.display = "none";
    iframe.src = ""; 
});


window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        iframe.src = ""; 
    }
});





let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}


showSlide(currentSlide);


function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector(".faq-toggle");

    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
    } else {
        answer.style.display = "block";
        toggle.textContent = "-";
    }
}
