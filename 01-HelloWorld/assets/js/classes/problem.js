/** Problems with different classes */
const rick = {
    name: 'Ricardo',
    age: 31,
    printInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const rose = {
    name: 'Rosa',
    age: 30,
    printInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const alvaro = {
    name: 'Álvaro',
    age: 2,
    printInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

function People (name, age){
    this.name = name;
    this.age = age;
    this.printInfo = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const rick2 = new People('Ricardo', 31);
const rose2 = new People('Rosa', 30);
const alvaro2 = new People('Álvaro', 2);
rick.printInfo();
rose.printInfo();
alvaro.printInfo();