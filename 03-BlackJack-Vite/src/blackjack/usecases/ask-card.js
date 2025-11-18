import { setMessage } from "./util";

export const askCard = (deck, dvMsgGame) => {
    if(!deck || deck.length === 0){
        setMessage('No cards in the deck', dvMsgGame);
        return '';
    }
    let card = deck.pop();
    return card;
}