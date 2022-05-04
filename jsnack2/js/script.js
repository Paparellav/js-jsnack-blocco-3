// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
const voidArray = [];
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
let sum = 0;
let userNumber = "";
while (sum <= 50) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    sum += userNumber;
    console.log(sum);
    if (sum <= 50) {
        voidArray.push(userNumber);
    }
};

console.log(userNumber);
console.log(voidArray);