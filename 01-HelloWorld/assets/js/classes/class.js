class People{
    constructor(name, code, message){
        this.name = name;
        this.code = code;
        this.message = message;
    }
    amI(){
        console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
    }
    myMessage(){
        console.log(`${this.code} dice ${this.message}`);
    }
}

const spiderMan = new People('Peter Parker', 'Spiderman', 'Hello, I am Spiderman');
const ironMan = new People('Tony Stark', 'Ironman', 'Hello, I am Ironman');
console.log(spiderMan);
console.log(ironMan);
spiderMan.amI();
spiderMan.myMessage();
ironMan.amI();
ironMan.myMessage();