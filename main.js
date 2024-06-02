document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.round-button');
	const overlay = document.getElementById('overlay');
	const overlayImg = document.getElementById('overlay-img');

	buttons.forEach(button => {
		button.addEventListener('click', function () {
			const additionalImages = this.nextElementSibling;
			additionalImages.classList.toggle('hidden');
		});
	});

	const additionalImages = document.querySelectorAll('.additional-images img');
	additionalImages.forEach(img => {
		img.addEventListener('click', function () {
			overlayImg.src = this.src;
			overlay.style.display = 'flex';
		});
	});

	overlay.addEventListener('click', function () {
		overlay.style.display = 'none';
		overlayImg.src = '';
	});
});