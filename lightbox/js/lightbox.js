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
coffeeImage2.onclick = openLightbox;
coffeeImage3.onclick = openLightbox;
coffeeImage4.onclick = openLightbox;
coffeeImage5.onclick = openLightbox;
coffeeImage6.onclick = openLightbox;
coffeeImage7.onclick = openLightbox;
coffeeImage8.onclick = openLightbox;
coffeeImage9.onclick = openLightbox;
coffeeImage10.onclick = openLightbox;
coffeeImage11.onclick = openLightbox;
coffeeImage12.onclick = openLightbox;

function closeLightbox() {
        lightboxContainer.classList.remove('display');
        lightbox.src = "";

}
lightboxCloser.onclick = closeLightbox
lightboxBackground.onclick = closeLightbox