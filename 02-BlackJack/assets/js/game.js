let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

const createDeck = () => {
    deck = [];
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
            deck.push(`${i}${type}`);
        }
    }
    for(let type of types) {
        for(let special of specials) {
            deck.push(`${special}${type}`);
        }
    }
    deck = _.shuffle( deck );
    return deck;
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