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

//----Speaker cards------
const speakers = document.querySelector(".speakers-cards");
const speakerCardsArray = 
    [{
      heading: 'Young Mog',
      image: 'assets/YoungMog.jpg',
      badge1: 'Sungkyunkwan University of Medicine',
      badge2: 'South Korea',
      image2: 'assets/dottedSquare.png',
  },

  {
    heading: 'Sergey Suchkov',
    image: 'assets/SergeySuchkov.jpg',
    badge1: 'Sechenov University',
    badge2: 'Russia',
    image2: 'assets/dottedSquare.png',
},

 {
    heading: 'Donato Bonifazi',
    image: 'assets/DonatoBonifazi.jpg',
    badge1: 'Biological and Pharmacological Evaluations',
    badge2: 'Italy',
    image2: 'assets/dottedSquare.png',
},

  {
    heading: 'Antonino Araco',
    image: 'assets/AntoninoAraco.jpg',
    badge1: 'University of Camerino and Torino',
    badge2: 'Italy',
    image2: 'assets/dottedSquare.png',
},

{
    heading: 'Federico Benetti',
    image: 'assets/FedericoBenetti.jpg',
    badge1: 'Benetty Foundation',
    badge2: 'Argentina',
    image2: 'assets/dottedSquare.png',
},
];

function speaker() {
  let speakerCard = `<ul class="cards">`;
  for (let speakerCards = 0;
    speakerCards < speakerCardsArray.length;
        speakerCards += 1
    ){
    const card =
          `<li class="speaker">
            <div class "sp">
            <div class="square">
              <img class="dot" src="${speakerCardsArray[speakerCards].image2}">
              <img class="speakerimg" src="${speakerCardsArray[speakerCards].image}" alt='speaker image'>
              </div>
          <div class="speak">
            <h5 class="speaker-title">${speakerCardsArray[speakerCards].heading}</h5>
            <p class="speaker-subt">${speakerCardsArray[speakerCards].badge1}</p>
            <p class="speaker-descript">${speakerCardsArray[speakerCards].badge2}</p>
          </div>
          </div>
          </li>`
      speakerCard += card;
  }
  speakerCard += `</ul>`;
  speakers.innerHTML = speakerCard;
}
speaker();
  
// -----------FEATURED SPEAKERS----------//
{/* const speakers=document.querySelector(".speakers")

const speakerDetails = [
  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/oprah.jpg",
    speakername: "Oprah Gail Winfrey",
    firstintro:
      "Oprah Winfrey an American talk  , actress, author, and philanthropist.",
    secondintro:
      "Dubbed the Queen of All Media, was once the world's only black billionaire.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/Dangote.jpg",
    speakername: "Aliko Dangote",
    firstintro:
      "He is a billionaire business magnate.CEO of the Dangote Group.",
    secondintro:
      "Dangote became Nigeria's first billionaire in 2007.",
  },

  {
    speakerbg: "../assets/speakers/chess.png",
    speakerimage: "../assets/speakers/gates.jpg",
    speakername:"Bill Gates",
    firstintro:"He is business magnate philanthropist and co-founder of Microsoft",
    secondintro: "Bill Gates has he

${objects[i].property}
  */}