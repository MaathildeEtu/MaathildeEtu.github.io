document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const text = document.getElementById('intro-text');
    const title = document.getElementById('intro-title');

    // Animation de l'ensemble
    intro.classList.remove('opacity-0', 'translate-y-10');
    intro.classList.add('opacity-100', 'translate-y-0');

    // Animation des textes
    setTimeout(() => {
        text.classList.remove('opacity-0', 'translate-y-4');
        text.classList.add('opacity-100', 'translate-y-0');
    }, 300);

    setTimeout(() => {
        title.classList.remove('opacity-0', 'translate-y-4');
        title.classList.add('opacity-100', 'translate-y-0');
    }, 600);
});
