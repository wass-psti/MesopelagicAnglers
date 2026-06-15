document.addEventListener("DOMContentLoaded", () => {
    loadHTML("[data-include='header']", "components/header.html")
        .then(() => {
            setActiveNavLink();
            initMobileMenu();
        });
});

async function loadHTML(selector, filePath) {
    const targetElement = document.querySelector(selector);

    if (!targetElement) return;

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }

        const html = await response.text();
        targetElement.innerHTML = html;
    } catch (error) {
        console.error("Header loading error:", error);
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".site-header a[href]");

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

function initMobileMenu() {
    const toggleButton = document.querySelector(".mobile-toggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!toggleButton || !mobileMenu) return;

    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}