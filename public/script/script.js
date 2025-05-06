document.addEventListener('DOMContentLoaded', () => {
	// Sélection des éléments
	const intro = document.getElementById('intro');
	const text = document.getElementById('intro-text');
	const title = document.getElementById('intro-title');
	const tags = document.getElementById('intro-tags');

	// Animation du bloc principal
	intro.classList.remove('opacity-0', 'translate-y-10');
	intro.classList.add('opacity-100', 'translate-y-0');

	// Animation du texte "Mathilde Decoux"
	setTimeout(() => {
		text.classList.remove('opacity-0', 'translate-y-4');
		text.classList.add('opacity-100', 'translate-y-0');
	}, 300);

	// Animation du titre "Portfolio"
	setTimeout(() => {
		title.classList.remove('opacity-0', 'translate-y-4');
		title.classList.add('opacity-100', 'translate-y-0');
	}, 600);

	// Animation de la liste de tags
	setTimeout(() => {
		tags.classList.remove('opacity-0', 'translate-y-4');
		tags.classList.add('opacity-100', 'translate-y-0');
	}, 900);
});