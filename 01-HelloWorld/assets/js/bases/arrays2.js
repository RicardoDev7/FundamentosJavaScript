let games = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Lenght:', games.length);

let firstGame = games[0];
console.log('First Game:', firstGame);

let lastGame = games[games.length - 1];
console.log('Last Game:', lastGame);

games.forEach((game, index) => {
    console.log(`Game ${index}:`, game);
});

games.push('F-Zero'); // Add to the end
console.log('After push:', games);

games.unshift('Fire Emblem'); // Add to the beginning
console.log('After unshift:', games);

games.pop(); // Remove from the end
console.log('After pop:', games);

let index = 1;
console.log(games);
games.splice(index, 2); // Remove from index 1 two elements
console.log('After splice:', games);

let gameIndex = games.indexOf('Metroid'); // Find index of 'Metroid'
console.log('Index of Metroid:', gameIndex);