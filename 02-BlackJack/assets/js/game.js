const myModule = (() => {
    'use strict';

    //#region Variables

    let deck = [], playersPoints = 0, computerPoints = 0;

    //#endregion

    //#region Constants and HTML references

    const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'],
        btnAskCard = document.getElementById('ask-card'),
        btnStopGame = document.getElementById('stop-game'),
        smPlayer = document.getElementById('smPlayer'),
        smComputer = document.getElementById('smComputer'),
        dvPlayerCards = document.getElementById('player-cards'),
        dvMsgGame = document.getElementById('msgGame'),
        dvComputerCards = document.getElementById('computer-cards');
    
    //#endregion

    //#region Event Listeners

    document.getElementById('start-game').addEventListener('click', () => 
        initGame()
    );
    
    btnAskCard.addEventListener('click', () => {
        askForGame(true);
        validatePoints();
    });

    btnStopGame.addEventListener('click', () => {
        computerTurn( playersPoints );
        validateComputerPoints();
    });

    //#endregion

    //#region Functions

    const initGame = () => {
        deck = createDeck();
        initElements();
        enabledButtons();
    }

    const createDeck = () => {
        deck = [];
        generateGeneralDeck();
        generateSpecialDeck();
        return _.shuffle(deck);
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

    const initElements = () => {
        playersPoints = 0;
        smPlayer.innerText = playersPoints;
        computerPoints = 0;
        smComputer.innerText = computerPoints;
        dvPlayerCards.innerHTML = '';
        dvComputerCards.innerHTML = '';
        dvMsgGame.innerText = '';
        dvMsgGame.classList = [];
    }

    const enabledButtons = () => {
        btnAskCard.disabled = false;
        btnStopGame.disabled = false;
    }

    const askForGame = (isPlayer) => {
        let cardValue = askCard();
        let value = getCardValue( cardValue );
        let points = isPlayer ? playersPoints += value : computerPoints += value;
        isPlayer ? smPlayer.innerText = points: smComputer.innerText = points;
        createCard(cardValue, isPlayer);
    }

    const askCard = () => {
        if(deck.length === 0){
            setMessage('No cards in the deck');
        }
        let card = deck.pop();
        return card;
    }

    const getCardValue = ( card ) => {
        const valueCard = card.substring(0, card.length -1);
        return ( isNaN( valueCard ) ) ? evaluateSpecialCard( valueCard ) : parseInt( valueCard );
    }

    const evaluateSpecialCard = ( valueCard ) => valueCard === 'A' ? 11 : 10;

    const createCard = ( card, isPlayerDiv ) =>{
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${ card }.png`;
        imgCard.classList.add('card');
        isPlayerDiv ? dvPlayerCards.appendChild(imgCard) : dvComputerCards.appendChild(imgCard);
    }

    const validatePoints = () => {
        if(playersPoints > 21){
            computerWin();
            computerTurn();
        }else if(playersPoints === 21){
            playerWin();
        }
    }

    const computerWin = () => {
        disabledButtons();
        setMessage('¡Computer win the game!');
    }

    const disabledButtons = () => {
        btnAskCard.disabled = true;
        btnStopGame.disabled = true;
    }

    const setMessage = (message) =>{
        dvMsgGame.classList.add('alert');
        dvMsgGame.classList.add('alert-danger');
        dvMsgGame.innerText = message;
    }

    const playerWin = () => {
        disabledButtons();
        setMessage('Player win the game!');
    }

    const computerTurn = (minimunPoints) =>{
        do{
            askForGame(false);
        }while(computerPoints <= minimunPoints && minimunPoints <= 21);
    }

    const validateComputerPoints = () => {
        if(computerPoints > 21 && computerPoints > playersPoints){
            playerWin();
        }else if(computerPoints > playersPoints && computerPoints <= 21){
            computerWin();
        }else if(computerPoints === playersPoints){
            setMessage('¡No one wins the game!');
        }
    }

    //#endregion

    //#region Return statement

    return {
        newGame: initGame
    }

    //#endregion

})();