const openMenu = () => {
  const menu = document.getElementById('nav');
  menu.style.display = 'block';
};

function closeMenu() {
  const menu = document.getElementById('nav');
  menu.style.display = 'none';
}

openMenu();
closeMenu();

// OBJECT FOR STORING PROJECT DATA
const dataSpeakers = [
  {
    name: 'Eric Johansson',
    img: 'image/speaker_01.png',
    profession: 'Erik is a Swedish photographer and visual artist.',
    achievements: 'He has personal projects, as well as commissioned work with companies such as Adobe.',
  },
  {
    name: 'Vanessa Rivera',
    img: 'image/speaker_02.png',
    profession: 'Vanessa is an artist who gets inspired by childhood imagination.',
    achievements: ' she shares the behind the scenes secrets for several of her photos.',
  },
  {
    name: 'Karen Cantus',
    img: 'image/speaker_03.png',
    profession: 'Karen is a visual artist from Mexico.',
    achievements: 'According to her, her mind is always creating unrealistic scenarios.',
  },
  {
    name: 'Benjamin Van Valen',
    img: 'image/speaker_04.png',
    profession: 'Benny is a Dutch graphic designer who is specialised in Photoshop art.',
    achievements: 'he is already an influential and widespread Photoshop artist.',
  },
  {
    name: 'Farelyph',
    img: 'image/speaker_05.png',
    profession: 'Farely creates highly detailed Photoshop art of her main inspiration.',
    achievements: 'She often takes self-portraits and shapes them to reflect her vision.',
  },
  {
    name: 'Bishali Roy',
    img: 'image/speaker_06.png',
    profession: 'Bishal is an Indian artist and Photoshop designer.',
    achievements: ' He uses a variety of dramatic skies and lights, which add to the atmosphere of his images.',
  },
];

const sectionSpeakers = document.querySelector('#speakers');
const h2 = document.createElement('h2');
h2.textContent = 'Features Speakers';
sectionSpeakers.appendChild(h2);

const line2 = document.createElement('div');
line2.classList.add('line2');
sectionSpeakers.appendChild(line2);

const speakContainer = document.createElement('div');
speakContainer.classList.add('speakContainer');
sectionSpeakers.appendChild(speakContainer);

dataSpeakers.map((dataSpeak, i) => {
  const speakCard = document.createElement('div');
  speakCard.classList.add('speakCard');
  speakContainer.appendChild(speakCard);

  const imgCard = document.createElement('img');
  imgCard.classList.add('imgCard');
  imgCard.src = dataSpeak.img;
  speakCard.appendChild(imgCard);

  const descriptionCard = document.createElement('div');
  descriptionCard.classList.add('descriptionCard');
  speakCard.appendChild(descriptionCard);

  const h4 = document.createElement('h4');
  h4.textContent = dataSpeak.name;
  descriptionCard.appendChild(h4);

  const p1 = document.createElement('p');
  p1.textContent = dataSpeak.profession;
  descriptionCard.appendChild(p1);

  const line = document.createElement('div');
  line.classList.add('line');
  descriptionCard.appendChild(line);

  const p2 = document.createElement('p');
  p2.textContent = dataSpeak.achievements;
  descriptionCard.appendChild(p2);

  if (i > 1 && i < 6) {
    speakCard.classList.add('hideCard');
  }
  return dataSpeak;
});

const hideButton = document.createElement('button');
hideButton.classList.add('hideButton');
hideButton.textContent = 'More  ▽';
hideButton.type = 'button';
speakContainer.appendChild(hideButton);