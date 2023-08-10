const logo = document.querySelector('.ham');
const xButons = document.querySelector('.close-button');
const menu = document.querySelector('#menu-pop');

logo.addEventListener('click', () => {
  menu.style.display = 'block';
});

xButons.addEventListener('click', () => {
  menu.style.display = 'none';
});

document.querySelectorAll('.popupButtons').forEach((n) => n.addEventListener('click', () => {
  menu.style.display = 'none';
}));

const attendees = [
  {
    image: 'images/speaker_01 1.svg',
    name: 'Yochai Benkler',
    role: 'Berkman Professor',
    history: 'After joining Ferrari as a young man,he worked his way up to become Team Principal',
  },

  {
    image: 'images/speaker_01 1 (1).svg',
    name: 'Kilnam Chon',
    role: '103 Grand Prix Winner',
    history: 'British racing driver currently competing in Formula One, driving for Mercedes.',
  },

  {
    image: 'images/speaker_01 1 (2).svg',
    name: 'SohYeong Noh',
    role: 'Director Art Centre',
    history: 'Former German racing driver who competed in Formula One for Jordan, Benetton, Ferrari, and Mercedes',
  },

  {
    image: 'images/speaker_01 1 (3).svg',
    name: 'Julia Leda',
    role: 'President Young Pirates',
    history: 'German racing driver who competed in Formula One from 2007 to 2022 for BMW Sauber, Toro Rosso, Red Bull, Ferrari and Aston Martin.',
  },

  {
    image: 'images/speaker_01 1 (4).svg',
    name: 'Lila tretikov',
    role: 'Executive Director of Wikimedia',
    history: 'Dutch and Belgian racing driver and the 2021 and 2022 Formula One World Champion with Red Bull Racing.',
  },

  {
    image: 'images/speaker_01 1 (5).svg',
    name: 'Ryan Merkley',
    role: 'CEO of Creative Commons',
    history: 'Monégasque racing driver, currently racing in Formula One for Scuderia Ferrari.',
  },
];

const card = document.getElementById('speaker-card-container');

function displayCard(id) {
  card.innerHTML += `
    <div class="attendees-info">
      
        <img src="${attendees[id].image}" alt="speaker-image" class="image-speaker"/>
      
      <div>
        <h3 class="name-speaker">${attendees[id].name}</h3>
        <span class="position-speaker">${attendees[id].role}</span>
        <hr class="line-speaker" />
        <p class="explanation-speaker">${attendees[id].history}</p>
      </div>
    </div>
  `;
}

for (let i = 0; i < attendees.length; i += 1) {
  displayCard(i);
}