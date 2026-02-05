let numeroMaggiore;

const primoNumero = Number(prompt('Inserisci un numero'));
const secondoNumero = Number(prompt('Inserisci un altro numero'));

if (primoNumero > secondoNumero) {
    numeroMaggiore = primoNumero;
} else {
    numeroMaggiore = secondoNumero;
}

console.log(numeroMaggiore);