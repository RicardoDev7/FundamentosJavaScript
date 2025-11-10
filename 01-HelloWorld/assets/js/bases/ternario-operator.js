/**
 * Días de la semana abrimos a las 11
 * Los fines de semana abrimos a las 9
 */

// Consulta si está abierto hoy

const day = 1; // 0: domingo, 1: lunes, ..., 6: sábado
const currentHour = 10;

let openingHour = (day === 0 || day === 6) ? 9 : 11;
let message = (currentHour >= openingHour) ? "Está abierto" : `Está cerrado, hoy abrimos a las ${openingHour}`;

console.log(message);