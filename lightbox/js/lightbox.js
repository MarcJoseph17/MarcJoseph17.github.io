let ligghtboxContainer = document.getElementById 
('lightboxContainer');
let lightboxBackground = document.getElementById
('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox
function openLightbox(){
        lightboxContainer.classList.add('display')
        lightbox.src = this.src;

}

let coffeImage1 = document.getElementById ('coffee1');

coffeeImage1.onclick = openLightbox;

function closeLightbox() {
        lightboxContainer.classList.remove('display');
        lightbox.src = "";

}
lightboxCloser.onclick = closeLightbox
lightboxBackground.onclick = closeLightbox