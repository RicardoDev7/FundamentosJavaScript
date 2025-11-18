import { askCard, createDeck, getCardValue, setMessage } from './usecases/index'

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
        deck = createDeck(types, specials);
        initElements();
        enabledButtons();
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
        let cardValue = askCard(deck, dvMsgGame);
        let value = getCardValue( cardValue );
        let points = isPlayer ? playersPoints += value : computerPoints += value;
        isPlayer ? smPlayer.innerText = points: smComputer.innerText = points;
        createCard(cardValue, isPlayer);
    }

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
        setMessage('¡Computer win the game!', dvMsgGame);
    }

    const disabledButtons = () => {
        btnAskCard.disabled = true;
        btnStopGame.disabled = true;
    }

    const playerWin = () => {
        disabledButtons();
        setMessage('Player win the game!', dvMsgGame);
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
            setMessage('¡No one wins the game!', dvMsgGame);
        }
    }

    //#endregion

    //#region Return statement

    return {
        newGame: initGame
    }

    //#endregion

})();