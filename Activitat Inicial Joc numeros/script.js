//Creació de les variables necessaries
let numeroaleatori;
let numeroentrada;
let nIntents = 20;
let punts = 0;
let gia = document.getElementById("gia");
let textNintents = document.getElementById("nintens");
let textPunts = document.getElementById("punts");
let bakg = document.getElementById("body");

//Funció per a començar el joc relacionada amb el boto JUGAR
function setup() {
    numeroaleatori = Math.floor(Math.random() * 20 + 1);;
    nIntents = 20;
    textNintents.textContent = nIntents;
    textPunts.textContent = punts;
    document.getElementById("entrada").value = "";
    gia.textContent = "Molta sort"
    bakg.style.backgroundColor = "white"
}
//Funció per a reiniciar el joc relacionada amb el boto REINICIAR
function reiniciar(){
    punts = 0;
    numeroaleatori = Math.floor(Math.random() * 20 + 1);;
    nIntents = 20;
    textNintents.textContent = nIntents;
    textPunts.textContent = punts;
    document.getElementById("entrada").value = "";
    gia.textContent = "Molta sort"
    bakg.style.backgroundColor = "white";
}
//Funcio per a provar un numero relacionada amb el boto PROVA SORT
function prova(){
    numeroentrada = Number(document.getElementById("entrada").value)
    if(nIntents<1){
        bakg.style.backgroundColor = "red"
        alert("Has perdut");
        reiniciar();
    }
    if(numeroentrada){
        verificarNumero(numeroentrada);
    }else{
        alert("No has introduit cap valor ")
    }  
}

//Funcio auxiliar per a verificar si el numero es mes gran o més petit que el numero misterios i actuar en consecuencia del resultat
function verificarNumero(n) {
    if (n > numeroaleatori) {
        gia.textContent = "El numero es massa gran";
    } else {
        if (n < numeroaleatori) {
            gia.textContent = "El numero es massa petit";

        } else {
            bakg.style.backgroundColor = "green"
            alert("Has guanyat");
            punts+=nIntents;
            setup();
            nIntents++;
        }
    }
    textNintents.textContent = nIntents - 1;
    nIntents--;
}