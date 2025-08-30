// ===============================
// Floating Text Animation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const floatTargets = document.querySelectorAll('.intro-line, .hero__content h1');

  // ===============================
  // Smooth scroll for navbar links
  // ===============================
  const navLinks = document.querySelectorAll(".links a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // ===============================
  // Back to top button behavior
  // ===============================
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
