// 3. Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const footballTeams = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0,
    },
];

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
footballTeams.forEach((e) => {
    let rndPts = e.punti;
    let rndFls = e.falli;
    let resultDescription = "";
    rndPts = Math.floor(Math.random() * 99) + 1;
    rndFls = Math.floor(Math.random() * 99) + 1;
    resultDescription = `La squadra ${e.nome} ha totalizzato un totale di ${rndPts} punti e ha subito ${rndFls} falli.`;
    console.log(resultDescription);
});
