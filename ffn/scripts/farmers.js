const membersURL = "./data/farmers.json";
let lineView = document.querySelector(".line-view-table");
const photoGrid = document.querySelector(".photo-grid-btn");
const lineGrid = document.querySelector(".line-grid-btn");
const table = document.querySelector("table");
const cards = document.querySelector(".member-card");

// for (let i = 0; i < membersURL.length; i++) {
//     console.log(spotlightMembersURL[i].name)
//   }


async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    memberCard(data);
    gridLineDisplay(data)
}

getMemberData();

function memberCard(members) {
    members.forEach(member => {
        const memberdetails = document.createElement("div");
        const memberLogo = document.createElement("img");
        const memberAddress = document.createElement("p");
        const memberPhone = document.createElement("p");
        const memberWebsite = document.createElement("p");
        const shadedBorder = document.createElement("div");

        memberdetails.setAttribute("class", "member-details");
        memberLogo.setAttribute("src", member.image);
        memberLogo.setAttribute("alt", "farmer's image");
        memberLogo.setAttribute("width", "60");
        memberLogo.setAttribute("height", "60");
        shadedBorder.setAttribute("class", "shaded-border")

        memberAddress.textContent = member.address;
        memberPhone.textContent = member.phone;
        memberWebsite.innerHTML = `<a href="#">${member.email}</a>`;
        
        memberdetails.appendChild(memberLogo);
        memberdetails.appendChild(memberAddress);
        memberdetails.appendChild(memberPhone);
        memberdetails.appendChild(memberWebsite);
        memberdetails.appendChild(shadedBorder);

        cards.appendChild(memberdetails);
    })
}