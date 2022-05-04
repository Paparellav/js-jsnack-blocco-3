// **BONUS
// Crea due tag div con due id diversi. 
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
const redDiv = document.createElement("div");
const greenDiv = document.createElement("div");
redDiv.setAttribute("id", "red");
greenDiv.setAttribute("id", "green");
redDiv.classList.add("box");
greenDiv.classList.add("box");
container.append(redDiv);
container.append(greenDiv);
console.log(container);
body.append(container);

// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const array = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const oddArray = [];
const evenArray = [];

array.forEach((e) => {
    console.log(e);
    let oddOrEven = "";
    if (e % 2 === 0) {
        oddOrEven = "Pari";
        evenArray.push(e);
    } else {
        oddOrEven = "Dispari";
        oddArray.push(e);
    }
    console.log(oddOrEven);
});

redDiv.innerHTML = `I numeri pari sono: ${evenArray}`;
greenDiv.innerHTML = `I numeri dispari sono: ${oddArray}`;
