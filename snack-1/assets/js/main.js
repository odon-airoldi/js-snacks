// prompt('Inserisci un numero');
// prompt('Inserisci un altro numero');

let numeromaggiore;

const primonumero = Number(prompt('Inserisci un numero'));
const secondonumero = Number(prompt('Inserisci un altro numero'));

if (primonumero > secondonumero) {
    numeromaggiore = primonumero;
} else {
    numeromaggiore = secondonumero;
}

console.log(numeromaggiore);