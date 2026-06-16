document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async function (element) {
    const name = element.getAttribute("data-include");

    try {
      const response = await fetch(`components/${name}.html`);

      if (!response.ok) {
        throw new Error(`Could not load ${name}.html`);
      }

      const html = await response.text();
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  });
});