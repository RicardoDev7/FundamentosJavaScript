let deck = [];
let playersPoints = 0;
let computerPoints = 0;

const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];
const btnStartGame = document.getElementById('start-game');
const btnAskCard = document.getElementById('ask-card');
const smPlayer = document.getElementById('smPlayer');
const smComputer = document.getElementById('smComputer');

const createDeck = () => {
    deck = [];
    generateGeneralDeck();
    generateSpecialDeck();
    deck = _.shuffle( deck );
    return deck;
}

const generateGeneralDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
            deck.push(`${i}${type}`);
        }
    }
}

const generateSpecialDeck = () => {
    for(let type of types) {
        for(let special of specials) {
            deck.push(`${special}${type}`);
        }
    }
}

const askCard = () => {
    if(deck.length === 0){
        alert('No cards in the deck');
        throw 'No cards in the deck';
    }
    let card = deck.pop();
    return card;
}

const getCardValue = ( card ) => {
    const valueCard = card.substring(0, card.length -1);
    return ( isNaN( valueCard ) ) ? evaluateSpecialCard( valueCard ) : parseInt( valueCard );
}

const evaluateSpecialCard = ( valueCard ) => valueCard === 'A' ? 11 : 10;

const clearElements = () => {
    playersPoints = 0;
    smPlayer.innerText = playersPoints;
    computerPoints = 0;
    smComputer.innerText = computerPoints;
}

btnStartGame.addEventListener('click', () => {
    createDeck();
    clearElements();
});

btnAskCard.addEventListener('click', () => {
    let cardValue = askCard();
    let value = getCardValue( cardValue );
    playersPoints += value;
    smPlayer.innerText = playersPoints;
});