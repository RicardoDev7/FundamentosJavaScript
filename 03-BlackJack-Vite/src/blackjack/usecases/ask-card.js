export const askCard = (deck) => {
    if(deck.length === 0){
        setMessage('No cards in the deck');
    }
    let card = deck.pop();
    return card;
}