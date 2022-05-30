
let players = [];

let vistaVersus = document.getElementById("chosenWarriors");

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
        //Eso significaría que ya tenemos los dos GUERREROS y que hay que cambiar de pantalla ---- HASTA AQUÍ FUNCIONA

        if(players.length === 2){
            setTimeout(()=>{
                //Diseñamos el contenido de la pantalla3 antes de mostrarla dando el cambiazo con los dos guerreros selecionados    -----ESTO ES LO QUE FALLA
                vistaVersus.innerHTML = `<div class='chosenVersus'><img class='chosenVersus' src='img/${players[0].name}.png' alt='Warrior1'></div>
                <div class='chosenVersus'><img class='logoVersus' src='img/logo.jpg'/></div>  
                <div class='chosenVersus'><img class='chosenVersus' src='img/${players[1].name}.png' alt='Warrior2'></div>`;
                
                screenSwitch("screenBoard3");

                setTimeout(()=>{
                    screenSwitch("screenBoard4");
                },10000);
            },500);
        }
    }      
};
