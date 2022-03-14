//  Containers
const profileContainer = document.querySelector(".profile-container");
const bioContainer = document.querySelector(".bio-body");

//  Social media elements
const instagramLink = document.getElementById("instagram");
const facebookLink = document.getElementById("facebook");
const twitterLink = document.getElementById("twitter");

//  Next and Prev elements
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

//  Members object
const members = [
  
  {
    img:
        "https://aplikasikasir.com/assets/img/team/no-picture.png",
    name: "Anggi",
    position: "Marketing Partner Jabodetabek",
    current: false
  },
  {
    img:
      
      "https://aplikasikasir.com/assets/img/team/aplikasikasir_yuchib.jpg",
    name: "Yuchib",
    position: "Mobile Developer",
    current: false
  },
  {
    img:
        "https://aplikasikasir.com/assets/img/team/no-picture.png",
    name: "Agus",
    position: "Marketing Partner Semarang",
    current: false
  },
  {
    img:
        "https://aplikasikasir.com/assets/img/team/aplikasikasir_iqbal.jpg",
    name: "Iqbal D. Putra",
    position: "Founder",
    current: true
  },
  {
    img:
        "https://aplikasikasir.com/assets/img/team/aplikasikasir_yudha.jpg",
    name: "Yudha",
    position: "Marketing Partner Pontianak",
    current: false
  },
  {
    img:
        "https://aplikasikasir.com/assets/img/team/no-picture.png",
    name: "Yessy Selvianti",
    position: "Marketing Partner Bengkulu",
    current: false
  },
  {
    img:
        "https://aplikasikasir.com/assets/img/team/no-picture.png",
    name: "Egi Aprilianto",
    position: "Mobile Developer",
    current: false
  },
];

//  Default selected member
let currentItem = members.findIndex((item) => item.current == true);

//  Making the markups for page
members.forEach((card) => {
  const profileCard = `<div class="profile-card ${
    card.current && "current-card"
  }">
                            <div class="profile">
                                <img src="${card.img}" alt="">
                            </div>
                         </div>`;

  const bioCard = `<div class="bio-card ${card.current && "current-bio"}">
                        <p class="name">${card.name}</p>
                        <p class="position">${card.position}</p>
                     </div>`;

//   card.facebook.length > 5 ? facebookLink.classList.add("active") : "";

//   card.twitter.length > 5 ? twitterLink.classList.add("active") : "";

//   card.instagram.length > 5 ? instagramLink.classList.add("active") : "";

  profileContainer.innerHTML += profileCard;
  bioContainer.innerHTML += bioCard;
});

//  Next member event listener
nextBtn.addEventListener("click", () => {
  const currentCard = document.querySelector(".current-card");
  const currentBio = document.querySelector(".current-bio");

  if (currentCard.nextElementSibling) {
    currentCard.classList.remove("current-card");
    currentCard.nextElementSibling.classList.add("current-card");
  }

  if (currentBio.nextElementSibling) {
    currentBio.classList.remove("current-bio");
    currentBio.nextElementSibling.classList.add("current-bio");
  }

  if (currentBio.nextElementSibling) {
    currentItem = currentItem + 1;

    members[currentItem].facebook.length > 5
      ? facebookLink.classList.add("active")
      : facebookLink.classList.remove("active");
    members[currentItem].twitter.length > 5
      ? twitterLink.classList.add("active")
      : twitterLink.classList.remove("active");
    members[currentItem].instagram.length > 5
      ? instagramLink.classList.add("active")
      : instagramLink.classList.remove("active");
  }
});

//  Prev member event listener
prevBtn.addEventListener("click", () => {
  const currentCard = document.querySelector(".current-card");
  const currentBio = document.querySelector(".current-bio");

  if (currentCard.previousElementSibling) {
    currentCard.classList.remove("current-card");
    currentCard.previousElementSibling.classList.add("current-card");
  }

  if (currentBio.previousElementSibling) {
    currentBio.classList.remove("current-bio");
    currentBio.previousElementSibling.classList.add("current-bio");
  }

  if (currentBio.previousElementSibling) {
    currentItem = currentItem - 1;

    members[currentItem].facebook.length > 5
      ? facebookLink.classList.add("active")
      : facebookLink.classList.remove("active");
    members[currentItem].twitter.length > 5
      ? twitterLink.classList.add("active")
      : twitterLink.classList.remove("active");
    members[currentItem].instagram.length > 5
      ? instagramLink.classList.add("active")
      : instagramLink.classList.remove("active");
  }
});
