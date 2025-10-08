const searchInput = document.getElementById("searchInput");
const langBtn = document.getElementById("langBtn");
let currentLang = "en"; // default

// 🔎 Search filter
searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();
  let items = document.querySelectorAll(".resource-list li");
  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
});

// 🌐 Language toggle
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "id" : "en";
  updateLanguage();
});

function updateLanguage() {
  // Button text
  langBtn.textContent = currentLang === "en" ? "Bahasa Indonesia" : "English";

  // Title + subtitle
  document.getElementById("title").textContent =
    currentLang === "en" ? "Digital Literacy Resources" : "Sumber Literasi Digital";
  document.getElementById("subtitle").textContent =
    currentLang === "en"
      ? "Your guide to essential tools for the digital world"
      : "Panduan Anda ke alat penting di dunia digital";
  document.getElementById("searchInput").placeholder =
    currentLang === "en" ? "Search resources..." : "Cari sumber...";

  // Categories + descriptions
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });

  // Footer
  document.getElementById("footerText").textContent =
    currentLang === "en"
      ? "Built for Digital Literacy Awareness • © 2025"
      : "Dibuat untuk Kesadaran Literasi Digital • © 2025";
}
