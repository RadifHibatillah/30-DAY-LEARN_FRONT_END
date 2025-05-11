// ================================
// JAVASCRIPT UTAMA PROJECT
// ================================

// 1. THEME TOGGLE (LIGHT <-> DARK)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;
  // Inisialisasi dari localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
  // Event listener toggle
  btn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});

// 2. SMOOTH SCROLL FALLBACK (JIKA PERLU)
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 3. REVEAL ON SCROLL (FADE IN UP SECTION)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((sec) => io.observe(sec));
});

// 4. OPTIONAL: ADD PULSE EFFECT ON GALLERY HOVER (JS NOT NEEDED, CSS SUDAH)
//    Kalau mau tambahin delay dinamis, bisa pake JS, tapi gak wajib.

// 5. OPTIONAL: NAV HIGHLIGHT WHEN SCROLL (CSS SAJA JUGA BISA, TAPI COBA JS)
document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 100;
  document.querySelectorAll("nav a").forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// ================================
// SEMUA SCRIPT DI ATAS LANGSUNG JALAN!
// ================================
