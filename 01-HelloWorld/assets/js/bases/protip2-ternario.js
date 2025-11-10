/* Ternario en funciones */

const higerNumber = (a, b) => (a > b) ? a : b;
console.log(higerNumber(10, 15));

const isMember = (member) => member ? '2.00 dollars' : '10.00 dollars';
console.log(isMember(true));
console.log(isMember(false));

/* Multiples ternarios */
const points = 52;
const grade = (points >= 90) ? 'A' :
                (points >= 80) ? 'B' :
                (points >= 70) ? 'C' :
                (points >= 60) ? 'D' : 'F';
console.log({points, grade});