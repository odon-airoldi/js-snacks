let numeroMaggiore;

const primoNumero = Number(prompt('Inserisci un numero'));
const secondoNumero = Number(prompt('Inserisci un altro numero'));

if (primoNumero > secondoNumero) {
    numeroMaggiore = `${primoNumero} è maggiore di ${secondoNumero}`;
} else if (secondoNumero > primoNumero) {
    numeroMaggiore = `${secondoNumero} è maggiore di ${primoNumero}`;
} else {
    numeroMaggiore = `${primoNumero} è uguale a ${secondoNumero}`;
}

console.log(numeroMaggiore);