// 1. Crea due array che hanno un numero di elementi diversi.
const firstArray = [1, 2, 3, 4, 5, 6, 7];
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let resultOfLength
if (firstArray.length > secondArray.length) {
    resultOfLength = "Il primo array è più lungo."
} else {
    resultOfLength = "Il secondo array è più lungo."
}
console.log(resultOfLength);
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

while (firstArray.length !== secondArray.length) {
    firstArray.push(Math.floor(Math.random() * 99) + 1);
    console.log(firstArray);
    console.log(secondArray);
    if (firstArray.length === secondArray.length) {
        resultOfLength = "I due array sono ora uguali."
    };
};

console.log(resultOfLength);