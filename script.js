
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000);

  const toggleBtn = document.getElementById("modeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  });

  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("input", function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });
});
