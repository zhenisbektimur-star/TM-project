const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const year = document.getElementById("year");
const links = document.querySelectorAll(".nav-links a");

if (year) {
    year.textContent = new Date().getFullYear();
}

toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
    });
});

const sections = document.querySelectorAll("section[id]");

const markActive = () => {
    const fromTop = window.scrollY + 120;
    sections.forEach((section) => {
        const id = section.getAttribute("id");
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (!link) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        link.classList.toggle("active", fromTop >= top && fromTop < bottom);
    });
};

window.addEventListener("scroll", markActive, { passive: true });
markActive();
