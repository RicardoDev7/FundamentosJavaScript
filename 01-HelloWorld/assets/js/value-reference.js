let a = 10;
let b = a;
a = 30;
b = 15;

console.log({ a, b });

let ricardo = { name: "Ricardo" };
let rosa = {...ricardo}; // copia la referencia del objeto operador spread
rosa.name = "Rosa";
console.log({ ricardo, rosa });

/* Función que cambia el nombre de la persona pasada por referencia */
const changeName = ({...person}) => {
    person.name = "Álvaro";
    return person;
}

/* Creación de un objeto persona */
let violeta = { name: "Violeta" };
let maritza = changeName(violeta);
console.log({ violeta, maritza });

/* Arreglos */
const fruits = ["Apple", "Banana", 'Orange'];

console.time('Slice');
const anotherFruits2 = fruits.slice(); // método slice para copiar el arreglo
console.timeEnd('Slice');

console.time('Spread');
const anotherFruits = [...fruits]; // operador spread para copiar el arreglo
console.timeEnd('Spread');

anotherFruits.push("Watermelon");
anotherFruits2.push("Pineapple");
console.table({ fruits, anotherFruits, anotherFruits2 });