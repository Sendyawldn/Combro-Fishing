const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

elements.forEach((el) => observer.observe(el));

document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Harap lengkapi semua kolom sebelum mengirim pesan.");
      return;
    }
    const phoneNumber = "6285715879337";

    const whatsappMessage = `Halo, saya ${name} (${email}). Pesan saya: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  });

const sidebar = document.querySelector(".sidebar");
const toggleButton = document.querySelector(".menu-icon");
const closeButton = document.querySelector(".close-btn");
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("aktif");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("aktif");
});
