document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     LIGHTBOX GALLERY
  ================================ */

  const galleries = [
    ["img/kegiatan1/1.jpg","img/kegiatan1/2.jpg","img/kegiatan1/3.jpg","img/kegiatan1/4.jpg"],
    ["img/kegiatan2/1.jpg","img/kegiatan2/2.jpg","img/kegiatan2/3.jpg"],
    ["img/kegiatan3/1.jpg","img/kegiatan3/2.jpg","img/kegiatan3/3.jpg","img/kegiatan3/4.jpg"],
    ["img/kegiatan4/1.jpg","img/kegiatan4/2.jpg","img/kegiatan4/3.jpg","img/kegiatan4/4.jpg", "img/kegiatan4/5.jpg", "img/kegiatan4/6.jpg", "img/kegiatan4/7.jpg", "img/kegiatan4/8.jpg"],
    ["img/kegiatan5/1.jpg","img/kegiatan5/2.jpg","img/kegiatan5/3.jpg","img/kegiatan5/4.jpg", "img/kegiatan5/5.jpg", "img/kegiatan5/6.jpg", "img/kegiatan5/7.jpg", "img/kegiatan5/8.jpg", "img/kegiatan5/9.jpg", "img/kegiatan5/10.jpg"],
    ["img/kegiatan6/1.jpg","img/kegiatan6/2.jpg","img/kegiatan6/3.jpg", "img/kegiatan6/4.jpg", "img/kegiatan6/5.jpg", "img/kegiatan6/6.jpg", "img/kegiatan6/7.jpg", "img/kegiatan6/8.jpg", "img/kegiatan6/9.jpg", "img/kegiatan6/10.jpg", "img/kegiatan6/11.jpg", "img/kegiatan6/12.jpg", "img/kegiatan6/13.jpg"],
    ["img/kegiatan7/1.jpg","img/kegiatan7/2.jpg", "img/kegiatan7/3.jpg", "img/kegiatan7/4.jpg", "img/kegiatan7/5.jpg", "img/kegiatan7/6.jpg", "img/kegiatan7/7.jpg", "img/kegiatan7/8.jpg"],
    ["img/kegiatan8/1.jpg","img/kegiatan8/2.jpg", "img/kegiatan8/3.jpg","img/kegiatan8/4.jpg"],
    ["img/kegiatan9/1.jpg","img/kegiatan9/2.jpg", "img/kegiatan9/3.jpg","img/kegiatan9/4.jpg", "img/kegiatan9/5.jpg"],
    ["img/kegiatan10/1.jpg","img/kegiatan10/2.jpg", "img/kegiatan10/3.jpg","img/kegiatan10/4.jpg", "img/kegiatan10/5.jpg", "img/kegiatan10/6.jpg", "img/kegiatan10/7.jpg", "img/kegiatan10/8.jpg", "img/kegiatan10/9.jpg", "img/kegiatan10/10.jpg"],
    ["img/kegiatan11/1.jpg","img/kegiatan11/2.jpg", "img/kegiatan11/3.jpg","img/kegiatan11/4.jpg", "img/kegiatan11/5.jpg", "img/kegiatan11/6.jpg", "img/kegiatan11/7.jpg", "img/kegiatan11/8.jpg", "img/kegiatan11/9.jpg"],
    ["img/kegiatan12/1.jpg","img/kegiatan12/2.jpg", "img/kegiatan12/3.jpg","img/kegiatan12/4.jpg", "img/kegiatan12/5.jpg", "img/kegiatan12/6.jpg", "img/kegiatan12/7.jpg", "img/kegiatan12/8.jpg", "img/kegiatan12/9.jpg"],
    ["img/kegiatan13/1.jpg","img/kegiatan13/2.jpg", "img/kegiatan13/3.jpg","img/kegiatan13/4.jpg", "img/kegiatan13/5.jpg", "img/kegiatan13/6.jpg", "img/kegiatan13/7.jpg", "img/kegiatan13/8.jpg", "img/kegiatan13/9.jpg", "img/kegiatan13/10.jpg", "img/kegiatan13/11.jpg", "img/kegiatan13/12.jpg", "img/kegiatan13/13.jpg", "img/kegiatan13/14.jpg", "img/kegiatan13/15.jpg", "img/kegiatan13/16.jpg"],
  ];

  let currentGallery = 0;
  let currentIndex = 0;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  /* OPEN */
  window.openGallery = function(index) {
    currentGallery = index;
    currentIndex = 0;
    lightbox.style.display = "flex";
    showImage();
  };

  /* SHOW */
  function showImage() {
    lightboxImg.src = galleries[currentGallery][currentIndex];
  }

  /* NEXT / PREV */
  window.nextImage = function() {
    currentIndex = (currentIndex + 1) % galleries[currentGallery].length;
    showImage();
  };

  window.prevImage = function() {
    currentIndex =
      (currentIndex - 1 + galleries[currentGallery].length) %
      galleries[currentGallery].length;
    showImage();
  };

  /* CLOSE */
  window.closeGallery = function() {
    lightbox.style.display = "none";
  };

  /* ===============================
     SWIPE MOBILE
  ================================ */
  let startX = 0;
  let endX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", () => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
    startX = 0;
    endX = 0;
  });

  /* TAP LUAR FOTO = CLOSE */
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeGallery();
  });

});
