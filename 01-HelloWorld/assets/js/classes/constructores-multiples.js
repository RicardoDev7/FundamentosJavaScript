class People{

    static fromObject({name, lastName, country}){
        return new People(name, lastName, country);
    }

    constructor(name, lastName, country){
        this.name = name;
        this.lastName = lastName;
        this.country = country;
    }
    getInfo(){
        console.log(`Info: ${this.name} - ${this.lastName} - ${this.country}`)
    }
}

const   name1 = 'Ricardo',
        lastName1 = 'Metzger',
        country1 = 'Peru';

const rosa = {
    name: 'Rosa',
    lastName: 'Chumpitaz',
    country: 'Peru'
}        

const person1 = new People(name1, lastName1, country1);
const person2 = People.fromObject(rosa);
person1.getInfo();
person2.getInfo();