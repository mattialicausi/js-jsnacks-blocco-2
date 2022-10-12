'use strict';

// **Snack1**
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', evento1);

function evento1(){

let numero1 = document.getElementById('numero1').value;
let risultato1 = document.getElementById('risultato1');

    let vero1 = false;

    if(numero1 % 2 == 0){
       vero1 = true;
   }

    if(vero1 == true){
        risultato1.innerHTML = numero1;
        console.log(numero1);
    } else{
        risultato1.innerHTML = parseInt(numero1) + 1 ;
        console.log(parseInt(numero1));
    }
}

// **Snack2**
// Generatore di “nomi cognomi” casuali: 
//il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e 
//da queste vuole generare una falsa lista di invitati con nome e cognome.


const btnLista = document.getElementById('btn-lista');
btnLista.addEventListener('click', evento2);

let contenutoLista = document.getElementById('contenutoLista');

function evento2(){
    const nomi = ["Mattia", "Giacomo", "Alessia", "Francesca", "Leonardo", "Cristina"];
    // console.log(nomi);
    const cognomi = ["Rossi", "Di Caprio", "Esposito", "Roma", "Firenze", "Russo"];
    // console.log(cognomi);

    let listaInvitati = [];

   for(let n = 0; n <= 5; n++){

    let nR = Math.floor(Math.random() * nomi.length);
    let cR = Math.floor(Math.random() * cognomi.length);
    // console.log(nR, cR);

    let valore1 =  nomi[nR];
    let valore2 = cognomi[cR];
    // console.log(valore1, valore2);

    listaInvitati.push(valore1 + ' ' + valore2 + '<br>');
    // console.log(listaInvitati);

    contenutoLista.innerHTML = listaInvitati;

     }
}


// **Snack3**
// Crea un array di numeri interi e fai la somma di tutti gli elementi  
//che sono in posizione dispari

const btnSomma = document.getElementById('btn-somma');
btnSomma.addEventListener('click', evento3);

let numero1Utente = document.getElementById('numero1Utente');
let numero2Utente = document.getElementById('numero2Utente');
let numero3Utente = document.getElementById('numero3Utente');
let numero4Utente = document.getElementById('numero4Utente');
let numero5Utente = document.getElementById('numero5Utente');
let numero6Utente = document.getElementById('numero6Utente');


function evento3(){
    let listaNumeri = [];

    const contenitoreSomma = document.getElementById('contenitoreSomma');

    listaNumeri[0] = numero1Utente.value;
    listaNumeri[1] = numero2Utente.value;
    listaNumeri[2] = numero3Utente.value;
    listaNumeri[3] = numero4Utente.value;
    listaNumeri[4] = numero5Utente.value;
    listaNumeri[5] = numero6Utente.value;

    contenitoreSomma.innerHTML = parseInt(listaNumeri[1]) + parseInt(listaNumeri[3]) + parseInt(listaNumeri[5]);
    console.log(contenitoreSomma.innerHTML);

}
