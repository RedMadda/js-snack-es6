// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const cicloLibrary = [
    {nome : "tandem", peso : 4}, 
    {nome : "monociclo", peso : 2},
    {nome : "triciclo", peso : 9},
    {nome : "rampichino", peso : 6}
];

let biciLighter = cicloLibrary[0];
cicloLibrary.forEach(bici => {
    if(bici.peso < cicloLibrary[0].peso){
        biciLighter = bici;
    }
    return biciLighter;
})

console.log(`bici più leggera: ${biciLighter.nome};
peso: ${biciLighter.peso}
`);

// let bicLighter = cicloLibrary[0];

// for (let i = 1; i < cicloLibrary.length; i++){
//     if( bicLighter.peso > cicloLibrary[i].peso){
//         bicLighter = cicloLibrary[i];
//     }
// }

// const {nome, peso} = bicLighter;
// document.getElementById("print").innerHTML =
// `
// <p>La bici che pesa di meno è: ${nome}</p>
// <p>Il suo peso è: ${peso}</p>
// `;



//Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function).

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

squadre.forEach(squadra => {
    let numRandom =  Math.floor(Math.random() * 10) + 1;

    squadra.goals = numRandom;

    squadra.falli = numRandom;

    return squadra.goals, squadra.falli;
});
console.log("array squadre: ", squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.

const newArray = [];

squadre.forEach(squadra => {
    let {nome, falli} = squadra;
    newArray.push({nome, falli});
});

console.log("NewArray: ", newArray);


// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const nums = [1,2,3,4,5,6,7,8,9];

const numsInterval = filter(nums, 4, 8);

console.log("Array interval con filter: ", numsInterval);

function filter(array, min, max){
    const newArray = array.filter((el, i) => {
        if(i < max && i > min){
            return true;
        }
        return false;
    });
    return newArray;
};

// con forEach

const names = ["Maria", "Giulia", "Mario", "Giulio", "Ludovico", "Ludovica"];
"M", "i", "r", "l", "v", "i" 
const namesFiltered= filterFor(names, 0, 4);

console.log("New array forEach: ", namesFiltered);
function filterFor(array, min, max){
    const newArray = [];
    array.forEach((nome, i) => {
      
       if(i < max && i > min){
        newArray.push(nome);
       }

       return newArray;
    });
    return newArray;
};