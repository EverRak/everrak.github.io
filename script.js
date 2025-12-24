// Mouse-reactive gradient
document.querySelectorAll(".asset-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.classList.add("is-hovered");
    });

    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
    });

    card.addEventListener("mouseleave", () => {
        // dispara o fade
        card.classList.remove("is-hovered");

        // NÃO limpa mx/my aqui
        // deixa o gradiente morrer onde estava
    });

});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".asset-card").forEach(card => {
    observer.observe(card);
});
