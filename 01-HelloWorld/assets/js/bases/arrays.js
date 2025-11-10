const arr = new Array(10); //Ya no se usa así

let videoGames = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoGames });

let things = [
    true, 
    123, 
    'Ricardo', 
    1 + 2, 
    function () { }, 
    () => { }, 
    { a: 1 }, 
    [
        'X', 
        'Megaman', 
        'Zero', 
        'Dr. Light'
    ]
];
console.log({ things });

console.log('Doctor Light:', things[7][3]);