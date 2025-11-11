const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];

console.warn('--- Usando for tradicional ---');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('--- Usando for in ---');
for (let index in heroes) {
    console.log(heroes[index]);
}

console.warn('--- Usando for of ---');
for (let hero of heroes) {
    console.log(hero);
}