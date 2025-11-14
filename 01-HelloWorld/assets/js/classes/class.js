class People{
    constructor(name, code, message){
        this.name = name;
        this.code = code;
        this.message = message;
    }
}

const spiderMan = new People('Peter Parker', 'Spiderman', 'Hello, I am Spiderman');
const ironMan = new People('Tony Stark', 'Ironman', 'Hello, I am Ironman');
console.log(spiderMan);
console.log(ironMan);