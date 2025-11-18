export const getCardValue = ( card ) => {
    if(card === '') return 0;
    const valueCard = card.substring(0, card.length -1);
    return ( isNaN( valueCard ) ) ? evaluateSpecialCard( valueCard ) : parseInt( valueCard );
}

const evaluateSpecialCard = ( valueCard ) => valueCard === 'A' ? 11 : 10;