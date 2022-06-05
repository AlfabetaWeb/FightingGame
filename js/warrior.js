
//Descripción de la clase warrior
class Warrior {
    constructor(name,strenght,speed){
        this.name = name;
        this.strenght = strenght;
        this.speed = speed;
               
        this.strenght = 0;
        this.speed = 0;

        this.blow = 0;  //golpe ejecutado
    };

    //Funciones que ejecuta esta clase
    hit(){  //Golpea al otro guerrero
        this.blow = Math.floor(this.blow + (this.strenght * this.speed) + 10);
    };

   // advance(){  //Avanza hacia su rival

    //};

   // back(){  //retrocede para esquivar un golpe

   // };
};

//Instanciar
let warrior1 = new Warrior("Warrior",100,150);
let warrior2 = new Warrior("StickWarrior",110,140);
let warrior3 = new Warrior("SpearWarrior",120,130);
let warrior4 = new Warrior("AxeWarrior",130,120);
let warrior5 = new Warrior("ArcherWarrior",140,110);
let warrior6 = new Warrior("FireWarrior",150,100);

//Diccionario de JS
let allWarriors = {
    "1": warrior1,
    "2": warrior2,
    "3": warrior3,
    "4": warrior4,
    "5": warrior5,
    "6": warrior6
}