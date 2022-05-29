
//Descripción de la clase warrior

class Warrior {

    constructor(name,strenght,speed){
        this.name = name;
        this.strenght = strenght;
        this.speed = speed;
               
        this.strenght = 0;
        this.speed = 0;

    };

    // acelerar(){

    //     this.metros = (this.velocidad * this.peso) + 20;

    // };

};

//Instanciar

let warrior1 = new Warrior("Warrior",100,100);
let warrior2 = new Warrior("StickWarrior",100,100);
let warrior3 = new Warrior("SpearWarrior",100,100);
let warrior4 = new Warrior("AxeWarrior",100,100);
let warrior5 = new Warrior("ArcherWarrior",100,100);
let warrior6 = new Warrior("FireWarrior",100,100);

//Diccionario de JS

let allCars = {
    "1": warrior1,
    "2": warrior2,
    "3": warrior3,
    "4": warrior4,
    "5": warrior5,
    "6": warrior6

}