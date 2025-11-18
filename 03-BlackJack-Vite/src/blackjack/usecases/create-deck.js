import { shuffle } from 'underscore';

let deck = [];

/**
 * Creación de un deck
 * @param {Array<string>} types - Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} specials - Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<string>}
 */
export const createDeck = (types, specials) => {
    if(!types) throw new Error('Se requieren los tipos de cartas');
    if(types.length === 0) throw new Error('Se requiere por lo menos un tipo de carta');
    if(!specials) throw new Error('Se requieren los tipos especiales de cartas');
    if(specials.length === 0) throw new Error('Se requiere por lo menos un tipo especial de carta');
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