/* Singleton: Instancia única de la clase */

class Singleton{
    static #instance;
    name = '';
    constructor(name = ''){
        if(!!Singleton.#instance) return Singleton.#instance;
        Singleton.#instance = this;
        this.name = name;
        return this;
    }
}

const instance1 = new Singleton('SpiderMan');
console.log(instance1);
console.log(`Nombre de la instancia1 es: ${instance1.name}`);

const instance2 = new Singleton('IronMan');
console.log(instance2);
console.log(`Nombre de la instancia1 es: ${instance2.name}`);