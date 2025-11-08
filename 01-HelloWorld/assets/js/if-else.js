let a = 9;
if(a >= 10){
    console.log("A es mayor o igual a 10");
}else{
    console.log("A es menor a 10");
}

console.log("Fin del programa");

const today = new Date(); // Fecha actual
console.log(today);
let day = today.getDay(); // Día de la semana (0-6)
console.log({day});

/* Condicionales If - Else If - Else */
if(day === 0){
    console.log("Domingo");
}else if(day === 1){
    console.log("Lunes");
}else if(day === 2){
    console.log("Martes");
}else{
    console.log("No es ni Domingo, ni Lunes, ni Martes");
}

/* Condicional Switch */
switch(day){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;    
    case 6:
        console.log("Sabado");
        break;       
    default:
        console.log("No es ni Domingo, ni Lunes, ni Martes");
}

/* Uso de Object para dias de la semana */
const wordsDays = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log(`Hoy es ${wordsDays[day]}` || 'Dia no definido');

/* Uso de Array para dias de la semana */
const dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(`Hoy es ${dayOfWeek[day]}` || 'Dia no definido');