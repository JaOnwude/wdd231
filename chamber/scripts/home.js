const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const hamburgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});