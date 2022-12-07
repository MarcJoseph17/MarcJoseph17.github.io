let lightboxContainer = document.getElementById 
('lightboxContainer');
let lightboxBackground = document.getElementById
('lightboxBackground');
let lightbox = document.getElementById
('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox
function openLightbox(){
    lightboxContainer.classList.add('display');
    lightbox.src = this.src;

}

//create variable for image class
let galleryImages = document.getElementsByClassName("galleryImage");

//create loop to cycle through images&run unclickevent per image

for (let i = 0; i < galleryImages.length; i++) {
let galleryImage = galleryImages[i];
galleryImage.onclick = openLightbox;
lightboxCloser.onclick = closeLightbox;

} 

//make function to make closer clickable 
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

let closers = document.getElementsByClassName('closer');

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;

}