class People{
    static _count = 0;
    static getCount(){
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

const spiderMan = new People('Peter Parker', 'Spiderman', 'Hello, I am Spiderman');
const ironMan = new People('Tony Stark', 'Ironman', 'Hello, I am Ironman');
spiderMan.amI();
spiderMan.myMessage();
spiderMan.setFavoriteFood = 'Apple pie';
console.log(spiderMan.getFavoriteFood);
console.log(spiderMan);
People.getCount();
People.setMessage();