const container = document.querySelector('.container');
let score = document.querySelector('.score');
score.innerText = 0;

const cards = [
    {name: 'bike',
    url: './images/bike.png'
    },
    {name: 'bus',
    url: './images/bus.png'
    },
    {name: 'car',
    url: './images/car.png'
    },
    {name: 'motorcycle',
    url: './images/motorcycle.png'
    },
    {name: 'scooter',
    url: './images/scooter.png'
    },
    {name: 'train',
    url: './images/train.png'
    },
    {name: 'bike',
    url: './images/bike.png'
    },
    {name: 'bus',
    url: './images/bus.png'
    },
    {name: 'car',
    url: './images/car.png'
    },
    {name: 'motorcycle',
    url: './images/motorcycle.png'
    },
    {name: 'scooter',
    url: './images/scooter.png'
    },
    {name: 'train',
    url: './images/train.png'
    }
];

let card;
const nameArray = [];
const idArray = [];

//function that will shuffle the cards array
function shuffleCards() {
cards.sort(() => Math.random() - 0.5);
}
shuffleCards();

//function that will append the cards in the container
function appendCards() {
for (let i = 0; i < cards.length; i++) {
    card = document.createElement('img');
    card.setAttribute('src', './images/card.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    container.append(card);
}
}
appendCards();

//function to check the result
function checkResult() {
    const images = document.querySelectorAll('img');
    if (nameArray[0] === nameArray[1]) {
        images[idArray[0]].classList.add('active');
        images[idArray[1]].classList.add('active');
        score.innerText ++;
    } else {
    images[idArray[0]].setAttribute('src', './images/card.png');
    images[idArray[1]].setAttribute('src', './images/card.png');
}
nameArray.splice(0, 2);
idArray.splice(0, 2);
}

//function to flip cards
function flipCard() {
    const cardId = this.getAttribute('data-id');
    const cardName = cards[cardId].name;
    idArray.push(cardId);
    nameArray.push(cardName);
    this.setAttribute('src', cards[cardId].url);
    if(nameArray.length === 2) {
        setTimeout(checkResult, 500);
    }

}







