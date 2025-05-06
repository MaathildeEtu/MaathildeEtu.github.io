document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const text = document.getElementById("intro-text");
    const title = document.getElementById("intro-title");
    const tags = document.getElementById("intro-tags");

    // Apparition progressive des éléments
    setTimeout(() => {
        intro.classList.remove("opacity-0", "translate-y-10");
        intro.classList.add("opacity-100", "translate-y-0");
    }, 100);

    setTimeout(() => {
        text.classList.remove("opacity-0", "translate-y-4");
        text.classList.add("opacity-100", "translate-y-0");
    }, 400);

    setTimeout(() => {
        title.classList.remove("opacity-0", "translate-y-4");
        title.classList.add("opacity-100", "translate-y-0");
    }, 700);

    setTimeout(() => {
        tags.classList.remove("opacity-0", "translate-y-4");
        tags.classList.add("opacity-100", "translate-y-0");
    }, 1000);

    // Délai avant la sortie (on laisse le bloc affiché un peu plus longtemps)
    setTimeout(() => {
        intro.classList.add("fade-out");
    }, 5000); // → 5 secondes après le début

    // Redirection retardée pour laisser le temps à l'animation de sortie
    setTimeout(() => {
        window.location.href = "/about";
    }, 7000); // → 1s après la sortie
});
