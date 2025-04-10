document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  
    const isDark = document.body.classList.contains("dark");
    document.getElementById("toggle-theme").textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  });
  