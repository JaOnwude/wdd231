const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let placeOfBirth = document.createElement("p");
        let dateOfBirth = document.createElement("p");

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname}'s portrait`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    })
}