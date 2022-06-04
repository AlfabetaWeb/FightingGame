
let players = [];

let winner = "";

let vistaVersus = document.getElementById("chosenWarriors");

let warriorLeft = document.getElementById("warriorLeft");
let warriorRight = document.getElementById("warriorRight");
let blowLeft;
let blowRight;
let winnerIs = document.getElementById("winnerIs");

const screenSwitch = (pantallaDestino) => { //FUNCIÓN PARA CAMBIAR DE PANTALLA---FUNCIONA
    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["screenBoard1","screenBoard2","screenBoard3","screenBoard4","screenBoard5","screenBoard6","screenBoard7"];

    for(let screenBoard of arrayPantallas){
        if(screenBoard != pantallaDestino){
            document.getElementById(screenBoard).style.display = "none";
        };
    };   
};

const selecciona = (fighter) => {  
    if(players.length < 2){
        //Diccionario de js
        players.push(allWarriors[fighter]);
        console.log(players);
        //Una vez hemos introducido el guerrero en el array...
        //comprobamos si la longitud del array es 2. 
        //Eso significaría que ya tenemos los dos GUERREROS y que hay que cambiar de pantalla 

        if(players.length === 2){
            setTimeout(()=>{
                //Diseñamos el contenido de la pantalla3 antes de mostrarla dando el cambiazo con los dos guerreros selecionados    -----ESTO ES LO QUE FALLA
                vistaVersus.innerHTML = `<div class='chosenVersus'><img class='chosenVersus' src='img/${players[0].name}.png' alt='Warrior1'></div>
                <div class='chosenVersus'><img class='logoVersus' src='img/logo.jpg'/></div>  
                <div class='chosenVersus'><img class='chosenVersus' src='img/${players[1].name}.png' alt='Warrior2'></div>`;
                
                screenSwitch("screenBoard3");

                setTimeout(()=>{

                    warriorLeft.innerHTML = `<div><img class='warriorFight' src='img/${players[0].name}.png'/></div>
                    <div>${players[0].name}</div>
                    <div id='blowLeft'>${players[0].blow}</div>`;
                    warriorRight.innerHTML = `<div><img class='warriorFight' src='img/${players[1].name}.png'/></div>
                    <div>${players[1].name}</div>
                    <div id='blowRight'>${players[1].blow}</div>`;

                    blowLeft = document.getElementById("blowLeft");
                    blowRight = document.getElementById("blowRight");

                    screenSwitch("screenBoard4");
                },1000);
            },500);
        }
    }      
};
// --- HASTA AQUÍ FUNCIONA

const play = () => {   //función de la peleaa en pantalla 4  --ERROR EN EL CÁLCULO NUMERICO

    let random = Math.round(Math.random());

    players[random].hit();

    if(players[random].blow >= 200){
        setTimeout(()=>{
            winnerIs.innerHTML = `${players[random].name}`;
            screenSwitch("screenBoard5");
        },500)
    }

    if(random == 0){
        blowLeft.innerHTML = `${players[random].blow}`;
    } else {
        blowRight.innerHTML = `${players[random].blow}`;
    }
};

//pantallla 5
const clean = () => {

    players = [];

    winner = "";

    blowLeft.innerHTML = ``;

    blowRight.innerHTML = ``;

    warrior1.blow = 0;
    warrior2.blow = 0;
    warrior3.blow = 0;
    warrior4.blow = 0;
    warrior5.blow = 0;
    warrior6.blow = 0;

    setTimeout(()=>{
        screenSwitch("screenBoard6");
    },500);

};