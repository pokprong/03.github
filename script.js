function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-img");

  if (!lightbox || !image) return;

  image.src = src;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
