// script.js – Apex Reception

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Tiny "stat tick" animation for metrics
document.addEventListener("DOMContentLoaded", () => {
  const metricEls = document.querySelectorAll("[data-target-number]");
  metricEls.forEach((el) => {
    const target = parseFloat(el.getAttribute("data-target-number"));
    if (Number.isNaN(target)) return;

    let current = 0;
    const duration = 900;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const value = target * progress;
      el.textContent = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 1,
      }).format(value);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = el.getAttribute("data-final-format") || el.textContent;
    };

    requestAnimationFrame(step);
  });
});
