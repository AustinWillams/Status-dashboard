window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 2000);

  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  let dark = true;

  toggle.addEventListener("click", () => {
    dark = !dark;
    document.body.style.backgroundColor = dark ? "#121212" : "#f4f4f4";
    document.body.style.color = dark ? "#fff" : "#000";
    document.querySelectorAll(".card").forEach(card => {
      card.style.background = dark ? "#1f1f1f" : "#fff";
    });
    icon.src = dark ? "theme-icon.svg" : "theme-icon-light.svg";
  });

  const search = document.getElementById("search");
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    document.querySelectorAll("section.card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
  });
};
