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
  const closePopup = document.getElementById("closePopup");

  if (form && popup && closePopup) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
      .then(() => {
        popup.style.display = "flex";
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
    });

    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  /* ============================
     LIGHTBOX FOR MENU + GALLERY
  ============================ */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeLightbox = document.getElementById("closeLightbox");

  const images = document.querySelectorAll(".menu-grid img, .gallery-grid img");

  if (lightbox && lightboxImg && closeLightbox) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        document.body.style.overflow = "hidden"; // stop background scroll
      });
    });

    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      document.body.style.overflow = ""; // restore scroll
    });

    // Click outside image closes lightbox
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
});
