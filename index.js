function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show-menu'); // This will show/hide the menu
}


// Get the elements
var popup = document.getElementById("video-popup");
var closeBtn = document.querySelector(".close-popup");
var videoTrigger = document.getElementById("video-trigger");
var iframe = document.getElementById("popup-video");

// Open the popup when the icon is clicked
videoTrigger.addEventListener('click', function() {
    popup.style.display = "block";
    iframe.src += "?autoplay=1"; // Autoplay video when popup opens
});

// Close popup and stop video
closeBtn.addEventListener('click', function() {
    popup.style.display = "none";
    // Reset iframe source to stop the video
    iframe.src = iframe.src;
});

// Optional: close popup if clicked outside of the video area
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        iframe.src = iframe.src;
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

// Initialize the carousel by showing the first slide
showSlide(currentSlide);


function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector(".faq-toggle");

    // Toggle the display of the answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
    } else {
        answer.style.display = "block";
        toggle.textContent = "-";
    }
}
