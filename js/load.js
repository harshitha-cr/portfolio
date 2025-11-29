async function loadPart(selector, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    document.querySelector(selector).innerHTML = await res.text();
    return true; // important
  } catch (err) {
    console.error(err);
  }
}

// load header first, then setup toggle
loadPart(".header", "/header.html").then(() => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) {
    console.error("⚠️ theme-toggle button not found in header.html");
    return;
  }

  // Apply saved preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";

    if (isLight) {
      document.documentElement.removeAttribute("data-theme"); // back to dark root
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
});

// Fade IN on page load
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// Delegated link handling (catches future <a> too)
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return; // Not a link

  const href = link.getAttribute("href");

  // Only intercept internal, same-site links (no #anchors, no _blank)
  if (
    href &&
    link.hostname === window.location.hostname &&
    !href.startsWith("#") &&
    !link.target
  ) {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = href;
    }, 20); // match CSS duration
  }
});
