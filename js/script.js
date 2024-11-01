// CAMBIO IMAGEN CORAZON PRODUCTO FAV 
function changeImage() {
    // Referencia a la imagen por su ID
    const img = document.getElementById('toggle-img');
    
    // Ruta de las dos imágenes
    const img1 = 'media/photo/fav1.png';
    const img2 = 'media/photo/fav2.png';

    // Cambiar la imagen al hacer clic
    if (img.src.includes('media/photo/fav1.png')) {
        img.src = img2;
    } else {
        img.src = img1;
    }
}




// carrusel imagenes donut 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,        
  loop: true,             
  autoplay: {
    delay: 2000,       
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: { 
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
