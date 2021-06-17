// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

 const cicloLibrary = [
    {nome : "tandem", peso : 4}, 
    {nome : "monociclo", peso : 2},
    {nome : "triciclo", peso : 9},
    {nome : "rampichino", peso : 6}
];

let bicLighter = cicloLibrary[0];

for (let i = 1; i < cicloLibrary.length; i++){
    if( bicLighter.peso > cicloLibrary[i].peso){
        bicLighter = cicloLibrary[i];
    }
}

const {nome, peso} = bicLighter;
document.getElementById("print").innerHTML =
`
<p>La bici che pesa di meno è: ${nome}</p>
<p>Il suo peso è: ${peso}</p>
`;



// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.

const squadre = [
    {
        nome : "Inter",
        goals : 0,
        falli : 0
    },
    {
        nome : "Milan",
        goals : 0,
        falli : 0
    },
    {
        nome : "Yuve",
        goals : 0,
        falli : 0
    }
];


const numRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// ora assegno numeri random a falli e goals, poi li pusho entrambi array vecchio, falli vecchio e nuovo

// var squadreNew = [];
// for (let i = 0; i <= squadre.length; i++){
//     for (key in squadre[i]){
//         let {nome, goals, falli} = squadre;
//         squadre[i].goals = numRandom(1,5);
//         squadre[i].falli = numRandom(1,10);
//         squadre.push(goals,falli);
//         squadreNew.push(nome, falli);

//     }
// }
// console.log(squadre);
// console.log(squadreNew);