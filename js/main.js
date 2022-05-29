let players = [];

let vistaVersus = document.getElementById("padreTres");

const screenSwitch = (pantallaDestino) => {

    let destino = document.getElementById(pantallaDestino);
    destino.style.display = "flex";

    let arrayPantallas = ["screenBoard1","screenBoard2","screenBoard3","screenBoard4","screenBoard5"];

    for(let screenBoard of arrayPantallas){
        if(screenBoard != pantallaDestino){
            document.getElementById(screenBoard).style.display = "none";
        };
    };
   
};

const selecciona = (car) => {
    
    
    if(players.length < 2){

        //Diccionario de js
        players.push(allCars[car]);
        console.log(players);

        //Una vez hemos introducido el coche en el array...
        //comprobamos si la longitud del array es 2. 
        //Eso significaría que ya tenemos los dos coches y que hay que cambiar de pantalla

        if(players.length === 2){
            setTimeout(()=>{
                //Diseñamos el contenido de la pantalla3 antes de mostrarla dando el cambiazo
                vistaVersus.innerHTML = `<div class='hijoVersus'><img class='fotoVersus' src='img/${players[0].modelo}.jpg' alt='asdfasdf'></div><div class='hijo3'><img class='fotoVersus' src='img/logovs.jpg'/><div class='hijoVersus'><img class='fotoVersus' src='img/${players[1].modelo}.jpg' alt='asdfasdf'></div>`;
                screenSwitch("screenBoard3");

                setTimeout(()=>{
                    screenSwitch("screenBoard4");
                },2000);
            },500);
        }
    }      
};

