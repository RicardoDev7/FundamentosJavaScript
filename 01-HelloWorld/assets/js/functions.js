/* Funcion tradicional */
function greeting(){
    console.log('Hello world');
}

/* Funcion anonima declarada en constante */
const greeting2 = function(){
    console.log('Hello world 2');
}

/* Funcion anonima con parametro */
const greeting3 = function(name){
    console.log('Hello world 3', name);
}

/* Funcion flecha */
const greeting4 = () => {
    console.log('Hello world 4');
}

/* Funcion flecha con parametro */
const greeting5 = (name) => {
    console.log('Hello world 5', name);
}

greeting();
greeting2();
greeting3('Ricardo');
greeting4();
greeting5('Rosa');