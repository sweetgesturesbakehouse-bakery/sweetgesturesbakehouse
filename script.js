// Show sticky button after scrolling 300px
const stickyBtn = document.querySelector('.sticky-order-btn');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    stickyBtn.style.display = 'block';
  } else {
    stickyBtn.style.display = 'none';
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ============================
   HERO BUTTON SCROLL
============================ */
function orderNow() {
  const orderSection = document.getElementById("order");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
  }
}

/* ============================
   STICKY ORDER BUTTON VISIBILITY
============================ */
const stickyBtn = document.querySelector(".sticky-order-btn");

window.addEventListener("scroll", () => {
  if (!stickyBtn) return;

  // Show after scrolling down a bit
  if (window.scrollY > 300) {
    stickyBtn.style.opacity = "1";
    stickyBtn.style.pointerEvents = "auto";
  } else {
    stickyBtn.style.opacity = "0";
    stickyBtn.style.pointerEvents = "none";
  }
});

/* ============================
   MASCOT INTERACTION
============================ */
const mascot = document.querySelector(".mascot");

if (mascot) {
  mascot.addEventListener("click", () => {
    mascot.innerHTML = "🐱🍰<span>Let’s bake!</span>";
  });

  // Auto hide mascot after some time
  setTimeout(() => {
    mascot.style.display = "none";
  }, 15000);
}

/* ============================
   ORDER FORM HANDLING
============================ */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! 🧁 Your order has been received.");

    // Clear form
    form.reset();
  });
}

/* ============================
   PREVENT DOUBLE TAP ZOOM (iOS)
============================ */
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);

function showThankYouPopup() {
  document.getElementById("thankYouPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const orderMethod = document.getElementById("orderMethod");
  const addressField = document.getElementById("deliveryAddress");
  const deliveryFee = document.getElementById("deliveryFee");

orderMethod.addEventListener("change", () => {
  if (orderMethod.value.includes("Delivery")) {
    addressField.style.display = "block";
    deliveryFee.style.display = "block";
  } else {
    addressField.style.display = "none";
    deliveryFee.style.display = "none";
  }
});

#deliveryAddress input {
  margin-top: 10px;
}

.delivery-fee {
  display: none;
  background: #fff3f6;
  border: 2px dashed #ff4d6d;
  padding: 12px;
  border-radius: 12px;
  margin-top: 10px;
  color: #5a1a1a;
  font-weight: bold;
  text-align: center;
}





