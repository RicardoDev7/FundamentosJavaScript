/* Funcion tradicional */
function greeting(){
    console.log('Hello world');
    return 1; // Agregado para demostrar el valor de retorno
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

/* Funcion flecha con retorno implicito */
const adding = (number1, number2) => number1 + number2;

/* Funcion flecha sin parametros con retorno implicito */
const getRandom = () => Math.random();


/* Llamados a las funciones */
greeting();
greeting2();
greeting3('Ricardo');
greeting4();
greeting5('Rosa');
console.log('Retorno de greeting:', greeting());
console.log('Resultado de la suma:', adding(5, 10));
console.log('Numero aleatorio:', getRandom());