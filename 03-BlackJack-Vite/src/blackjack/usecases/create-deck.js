import { shuffle } from 'underscore';

export const createDeck = (types, specials) => {
    let deck = [];
    generateGeneralDeck(types);
    generateSpecialDeck(types, specials);
    return shuffle(deck);
}

const generateGeneralDeck = (types) => {
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
            deck.push(`${i}${type}`);
        }
    }
}

const generateSpecialDeck = (types, specials) => {
    for(let type of types) {
        for(let special of specials) {
            deck.push(`${special}${type}`);
        }
    }
}