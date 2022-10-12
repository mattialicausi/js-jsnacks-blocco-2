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
