const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const hamburgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const homeAnchor = document.querySelector(".home");
const discoverAnchor = document.querySelector(".discover");
const directoryAnchor = document.querySelector(".directory");
const joinAnchor = document.querySelector(".join");


currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});

homeAnchor.textContent = "📍 Home";

homeAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "📍 Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

discoverAnchor.addEventListener("click", () => {
	homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "📍 Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

directoryAnchor.addEventListener("click", () => {
    homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "📍 Directory";
    joinAnchor.textContent = "Join";
})

joinAnchor.addEventListener("click", () => {
	homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "📍 Join";
})

linkedInAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "Home";
    finalAnchor.textContent = "Final";
    gitHubAnchor.textContent = "GitHub Profile";
    linkedInAnchor.textContent = "📍 LinkedIn";
    chamberAnchor.textContent = "Chamber";
})