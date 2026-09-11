function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  }
}
