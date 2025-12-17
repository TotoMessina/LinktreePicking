(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);

    // Ajusta el icono/texto del botón
    if (btn) {
      const ico = btn.querySelector(".theme-ico");
      const label = btn.querySelector(".theme-label");

      if (theme === "light") {
        if (ico) ico.textContent = "☀️";
        if (label) label.textContent = "Modo diurno";
      } else {
        if (ico) ico.textContent = "🌙";
        if (label) label.textContent = "Modo nocturno";
      }
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (_) {}
  }

    function getInitialTheme() {
        try {
            const saved = localStorage.getItem("theme");
            if (saved === "light" || saved === "dark") return saved;
        } catch (_) {}

        // 🔴 FORZAMOS oscuro por defecto
        return "dark";
    }

  // Init
  setTheme(getInitialTheme());

  // Toggle
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }
})();
