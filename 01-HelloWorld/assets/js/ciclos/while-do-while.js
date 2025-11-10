const cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Mazda', 'Hyundai'];
let i = 0;

console.warn('--- While ---');
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

i = 0;
console.warn('--- Break Statement ---');
while (cars[i]) {
    if(i === 1) break;
    console.log(cars[i]);
    i++;
}

i = 0;
console.warn('--- Continue Statement ---');
while (cars[i]) {
    if(i === 2){
        i++;
        continue;
    }
    console.log(cars[i]);
    i++;
}

console.warn('--- Do While ---');
i = 0;
do {
    console.log(cars[i]);
    i++;
} while (i < cars.length);