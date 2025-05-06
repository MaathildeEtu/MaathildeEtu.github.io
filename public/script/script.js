document.addEventListener('DOMContentLoaded', () => {
	const intro = document.getElementById('intro');
	const text = document.getElementById('intro-text');
	const title = document.getElementById('intro-title');
	const tags = document.getElementById('intro-tags');

	// Animation d'apparition (durée lente, enchaînement rapide)
	setTimeout(() => {
		intro.classList.replace('opacity-0', 'opacity-100');
		intro.classList.replace('scale-95', 'scale-100');
	}, 300);

	setTimeout(() => {
		text.classList.replace('opacity-0', 'opacity-100');
		text.classList.replace('scale-95', 'scale-100');
	}, 600); // enchaînement rapide

	setTimeout(() => {
		title.classList.replace('opacity-0', 'opacity-100');
		title.classList.replace('scale-95', 'scale-100');
	}, 900);

	setTimeout(() => {
		tags.classList.replace('opacity-0', 'opacity-100');
		tags.classList.replace('scale-95', 'scale-100');
	}, 1200);

	// Disparition
	setTimeout(() => {
		intro.classList.replace('opacity-100', 'opacity-0');
		intro.classList.replace('scale-100', 'scale-110');
	}, 4500);

	// Redirection
	setTimeout(() => {
		window.location.href = '/home';
	}, 5500);
});