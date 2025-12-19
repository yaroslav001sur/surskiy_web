const images = [
    'img/1826.jpg',
    'img/198586_8a79mj9ac.jpg',
    'img/1826.jpg',
];

let currentImageIndex = 0;

const imgEl = document.getElementById('switch-image');
const btn = document.getElementById('change-image-btn');

btn.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgEl.src = images[currentImageIndex];
});