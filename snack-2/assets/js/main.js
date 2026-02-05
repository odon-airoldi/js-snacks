// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let Parole;

const primaParola = prompt('Inserisci una parola');
const secondaParola = prompt('Inserisci una parola');

if (primaParola.length > secondaParola.length) {
    Parole = `${secondaParola} ${primaParola}`;
} else if (secondaParola.length > primaParola.length) {
    Parole = `${primaParola} ${secondaParola}`;
}

console.log(Parole);