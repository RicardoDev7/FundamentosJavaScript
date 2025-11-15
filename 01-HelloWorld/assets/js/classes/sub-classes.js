class People{
    static _count = 0;
    static get getCount(){
        console.log(`${People._count} instancias`);
    }
    static setMessage(){
        console.log(`Hola soy un método estático`);
    }

    food = '';
    constructor(name, code, message){
        this.name = name;
        this.code = code;
        this.message = message;
        People._count++;
    }
    amI(){
        console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
    }
    myMessage(){
        console.log(`${this.code} dice ${this.message}`);
    }
    set setFavoriteFood(food){
        this.food = food.toUpperCase();
    }

    get getFavoriteFood(){
        return `La comida favorita de ${this.name} es ${this.food}`;
    }
}

class Hero extends People {
    clan = 'Sin Clan';
    constructor(name, code, message){
        super(name, code, message);
        this.clan = 'The Avengers';
    }

    amI() {
        console.log(`Soy ${this.name} y mi clan es ${this.clan}`);
        super.amI();
    }
}

const spiderMan = new Hero('Peter Parker', 'Spiderman', 'Hello, I am Spiderman');
console.log(spiderMan);
spiderMan.amI();