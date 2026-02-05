// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const numeri = [prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'), prompt('Numero'),  prompt('Numero')]

let sommaNumeri = 0;

for (i = 0; i < numeri.length; i++ ) {
    sommaNumeri += Number(numeri[i]);
}

console.log(sommaNumeri);


// correzione
for (i = 0; i < 10; i++ ) {

}