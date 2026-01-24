document.addEventListener("DOMContentLoaded", () => {
  console.log("JS LOADED");

  /* ============================
     SMOOTH SCROLL
  ============================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ============================
     DELIVERY ADDRESS TOGGLE
  ============================ */
  const orderMethod = document.getElementById("orderMethod");
  const deliveryAddress = document.getElementById("deliveryAddress");

  if (orderMethod && deliveryAddress) {
    orderMethod.addEventListener("change", () => {
      deliveryAddress.style.display =
        orderMethod.value.includes("Delivery") ? "block" : "none";
    });
  }

  /* ============================
     FORM + THANK YOU POPUP
  ============================ */
  const form = document.getElementById("orderForm");
  const popup = document.getElementById("thankYouPopup");
  const closeBtn = document.getElementById("closePopup");

  if (form && popup && closeBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // STOP redirect

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      })
      .then(() => {
        popup.style.display = "flex";
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  <script>
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeLightbox");

  function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    document.body.style.overflow = "hidden"; // stop background scroll
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // restore scroll
  }

  closeBtn.addEventListener("click", closeLightbox);

  // Tap outside image closes lightbox (mobile friendly)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
</script>


  /* ============================
     GALLERY LIGHTBOX
  ============================ */
  const images = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeLightbox = document.getElementById("closeLightbox");

  if (lightbox && lightboxImg && closeLightbox) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }
});









