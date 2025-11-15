class Rectagle{
    #area = 0;
    constructor(base = 0, height = 0){
        this.base = base;
        this.height = height;
        this.#area = base * height;
    }
    calculateArea(){
        console.log(this.#area);
    }
}

const rectangle = new Rectagle(10, 15);
console.log(rectangle);
console.log(rectangle.calculateArea());