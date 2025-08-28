async function loadPart(selector, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to fetch ${file}`);
    document.querySelector(selector).innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

// Call it with a CSS selector:
loadPart(".header", "/header.html");

// Some issue with loading the footer (only few elements were displayed)
// loadPart(".footer", "/footer.html");

// async function loadPart(selector, file) {
//   try {
//     const res = await fetch(file);
//     if (!res.ok) throw new Error(`Failed to fetch ${file}`);
//     document.querySelector(selector).innerHTML = await res.text();
//   } catch (err) {
//     console.error(err);
//   }
// }

// loadPart("#header", "/header.html");
// // placeholder: <div id="header"></div>

// loadPart("#footer", "/footer.html");
// // placeholder: <div id="footer"></div>;
