
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('#nav-menu');
const body = document.querySelector('body');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
});

hamburguer.addEventListener('click', () => {
  body.classList.toggle('stopscroll');
});

const speaker1 = [
    {
      heading: 'Young Mog',
      image: 'assets/YoungMog.jpg',
      badge1: 'Sungkyunkwan University School of Medicine',
      badge2: 'South Korea',
      image: 'assets/dottedSquare.png',
  },
];
const speaker2 = [
  {
    heading: 'Sergey Suchkov',
    image: 'assets/SergeySuchkov.jpg',
    badge1: 'Sechenov University',
    badge2: 'Russia',
    image: 'assets/dottedSquare.png',
},
];
const speaker3 = [
  {
    heading: 'Donato Bonifazi',
    image: 'assets/DonatoBonifazi.jpg',
    badge1: 'Consortium for Biological and Pharmacological Evaluations',
    badge2: 'Italy',
    image: 'assets/dottedSquare.png',
},
];
const speaker4 = [
  {
    heading: 'Antonino Araco',
    image: 'assets/DonatoBonifazi.jpg',
    badge1: 'University of Camerino and Torino',
    badge2: 'Italy',
    image: 'assets/dottedSquare.png',
},
];
const speaker5 = [
  {
    heading: 'Federico Benetti',
    image: 'assets/FedericoBenetti.jpg',
    badge1: 'Benetty Foundation',
    badge2: 'Argentina',
    image: 'assets/dottedSquare.png',
},
];

const main = document.getElementById('main')
const container = document.createElement('div');
container.classList = 'featured-speakers';
main.appendChild(container);

const speakersCards = document.createElement('div');
speakersCards.classList = 'speakers-cards';
container.appendChild(speakersCards)

const cards = document.createElement('ul');
cards.classList = 'cards';
speakersCards.appendChild(cards);

speaker1.classList = 'speaker 1';
cards.appendChild(speaker1);

const square = document.createElement('div')
square.classList = 'square';
cards.appendChild(square);

const img = document.createElement('img')
img.classList = 'dot';
square.src = (speaker1[4].image);
square.appendChild(img);

const imgSP1 = document.createElement('img');
imgSP1.classList = 'speakerimg';
imgSP1.src = (speaker1[1].image);
cards.appendChild(imgSP1);

const speak = document.createElement('div');
speak.classList = 'speak';
speaker1.appendChild(speak);

const speakTitle = document.createElement('h5');
speakTitle.classList = 'speaker-title';
speakTitle.innerText = speaker1[0].heading
speak.appendChild(speakTitle);

const speakSub = document.createElement('p');
speakSub.classList = 'speaker-subt';
speakSub.innerHTML = speaker1[2].badge1;
speak.appendChild(speakSub);

const speakerDescr = document.createElement('p');
speakerDescr.classList = 'speaker-descript';
speakerDescr.innerHTML = speaker1[3].badge2;
speak.appendChild(speakerDescr);

speaker2.classList = 'speaker 2';
cards.appendChild(speaker2);

square.classList = 'square';
cards.appendChild(square);

const img = document.createElement('img')
img.classList = 'dot';
square.src = (speaker2[4].image);
square.appendChild(img);

const imgSP2 = document.createElement('img');
imgSP2.classList = 'speakerimg';
imgSP2.src = (speaker2[1].image);
cards.appendChild(imgSP2);

const speak = document.createElement('div');
speak.classList = 'speak';
speaker1.appendChild(speak);

const speakTitle = document.createElement('h5');
speakTitle.classList = 'speaker-title';
speakTitle.innerText = speaker2[0].heading
speak.appendChild(speakTitle);

const speakSub = document.createElement('p');
speakSub.classList = 'speaker-subt';
speakSub.innerHTML = speaker2[2].badge1;
speak.appendChild(speakSub);

const speakerDescr = document.createElement('p');
speakerDescr.classList = 'speaker-descript';
speakerDescr.innerHTML = speaker2[3].badge2;
speak.appendChild(speakerDescr);

speaker3.classList = 'speaker 3';
cards.appendChild(speaker3);

square.classList = 'square';
cards.appendChild(square);

const img = document.createElement('img')
img.classList = 'dot';
square.src = (speaker3[4].image);
square.appendChild(img);

const imgSP3 = document.createElement('img');
imgSP3.classList = 'speakerimg';
imgSP3.src = (speaker3[1].image);
cards.appendChild(imgSP3);

const speak = document.createElement('div');
speak.classList = 'speak';
speaker1.appendChild(speak);

const speakTitle = document.createElement('h5');
speakTitle.classList = 'speaker-title';
speakTitle.innerText = speaker3[0].heading
speak.appendChild(speakTitle);

const speakSub = document.createElement('p');
speakSub.classList = 'speaker-subt';
speakSub.innerHTML = speaker3[2].badge1;
speak.appendChild(speakSub);

const speakerDescr = document.createElement('p');
speakerDescr.classList = 'speaker-descript';
speakerDescr.innerHTML = speaker3[3].badge2;
speak.appendChild(speakerDescr);

speaker4.classList = 'speaker 4';
cards.appendChild(speaker4);

square.classList = 'square';
cards.appendChild(square);

const img = document.createElement('img')
img.classList = 'dot';
square.src = (speaker1[4].image);
square.appendChild(img);

const imgSP4 = document.createElement('img');
imgSP4.classList = 'speakerimg';
imgSP4.src = (speaker4[1].image);
cards.appendChild(imgSP4);

const speak = document.createElement('div');
speak.classList = 'speak';
speaker1.appendChild(speak);

const speakTitle = document.createElement('h5');
speakTitle.classList = 'speaker-title';
speakTitle.innerText = speaker4[0].heading
speak.appendChild(speakTitle);

const speakSub = document.createElement('p');
speakSub.classList = 'speaker-subt';
speakSub.innerHTML = speaker4[2].badge1;
speak.appendChild(speakSub);

const speakerDescr = document.createElement('p');
speakerDescr.classList = 'speaker-descript';
speakerDescr.innerHTML = speaker4[3].badge2;
speak.appendChild(speakerDescr);

speaker5.classList = 'speaker 5';
cards.appendChild(speaker5);

square.classList = 'square';
cards.appendChild(square);

const img = document.createElement('img')
img.classList = 'dot';
square.src = (speaker5[4].image);
square.appendChild(img);

const imgSP5 = document.createElement('img');
imgSP5.classList = 'speakerimg';
imgSP5.src = (speaker5[1].image);
cards.appendChild(imgSP5);

const speak = document.createElement('div');
speak.classList = 'speak';
speaker1.appendChild(speak);

const speakTitle = document.createElement('h5');
speakTitle.classList = 'speaker-title';
speakTitle.innerText = speaker5[0].heading
speak.appendChild(speakTitle);

const speakSub = document.createElement('p');
speakSub.classList = 'speaker-subt';
speakSub.innerHTML = speaker5[2].badge1;
speak.appendChild(speakSub);

const speakerDescr = document.createElement('p');
speakerDescr.classList = 'speaker-descript';
speakerDescr.innerHTML = speaker5[3].badge2;
speak.appendChild(speakerDescr);

document.body.appendChild(main); 