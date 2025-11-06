const images = [
    '/photo/รูปพื้นหลังหน้าแรก1.jpg',
    '/photo/รูปพื้นหลังหน้าแรก2.jpg',
    '/photo/รูปพื้นหลังหน้าแรก3.jpg',
    '/photo/รูปพื้นหลังหน้าแรก4.jpg',
    '/photo/รูปพื้นหลังหน้าแรก5.jpg'
];

let current = 0;
const section = document.getElementById("bg-section");

function showImage(index) {
    section.style.backgroundImage = `url(${images[index]})`;     
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

document.addEventListener("DOMContentLoaded", () => {
    showImage(current);
});