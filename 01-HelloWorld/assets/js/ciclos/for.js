const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];

console.warn('--- Usando for tradicional ---');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('--- Usando for in ---');
for (let index in heroes) {
    console.log(heroes[index]);
}