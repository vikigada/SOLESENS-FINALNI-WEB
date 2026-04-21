// 1. Oprava názvu (zkontroluj, že v HTML máš id="hamburger")
const hamburgerBtn = document.getElementById("hamburger");
const mobileMenuContainer = document.getElementById("mobileMenu");

// 2. Jeden čistý event pro kliknutí na tlačítko
if (hamburgerBtn && mobileMenuContainer) {
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Zabrání, aby klik "propadl" do dokumentu
    hamburgerBtn.classList.toggle("active");
    mobileMenuContainer.classList.toggle("open");
    console.log("Menu přepnuto"); // Pro kontrolu v konzoli (F12)
  });
}

// 3. Zavření menu, když klikneš kamkoliv jinam na stránku
document.addEventListener("click", (e) => {
  // Pokud menu je otevřené a klikneš mimo něj, zavři ho
  if (mobileMenuContainer.classList.contains("open")) {
    mobileMenuContainer.classList.remove("open");
    hamburgerBtn.classList.remove("active");
  }
});

// 4. Zamezení zavření, když klikneš přímo DOVNITŘ otevřeného menu
mobileMenuContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
