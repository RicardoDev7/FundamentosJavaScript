export const setMessage = (message, dvMsgGame) =>{
    dvMsgGame.classList.add('alert');
    dvMsgGame.classList.add('alert-danger');
    dvMsgGame.innerText = message;
}