// script.js
const els = document.querySelectorAll(".animate-in");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
els.forEach((el) => io.observe(el));
