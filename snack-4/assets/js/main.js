// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


let numeriDispari = []

for (i = 0; i < 6; i++ ) {

    const numero = Number(prompt('inserisci un numero'));
    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }

}

console.log(numeriDispari);