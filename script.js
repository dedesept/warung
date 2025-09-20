// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const ml1 = document.querySelector('.list1');

hamburger.addEventListener('click', function() {
    ml1.classList.toggle('open-list1');
});

// Slide show functionality
const images = document.querySelectorAll('.slide-show-item');
let currentIndex = 0;

window.addEventListener('load', function() {
    images[currentIndex].classList.add('active');
});
console.log(images);        

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 4000);