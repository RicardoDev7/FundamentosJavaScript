function createPerson(name, lastName) {
    return { 
        name, 
        lastName
    };
}

const createPerson2 = (name, lastName) => ({ name, lastName });

/* Función tradicional */
function printArguments(){
    console.log(arguments);
}

/* Alternativa moderna usando rest parameters */
const printArguments2 = (...args) => console.log(args);


const person = createPerson('Ricardo', 'Metzger');
console.log(person);
console.log(createPerson2('Rosa', 'Chumpitaz'));
printArguments('Ricardo', 'Metzger', 31, false, 'Peru');
printArguments2('Rosa', 'Chumpitaz', 30, false, 'Peru');