/* jsnack 2
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale */

//array di partenza
const arrayObj = [
  { name: "Poppy", type: "tshirt", color: "red" },
  { name: "Jumping", type: "occhiali", color: "blue" },
  { name: "CrissCross", type: "scarpe", color: "black" },
  { name: "Jenny", type: "borsa", color: "pink" },
];

console.log("Array prima dell'aggiunta: ", arrayObj); //stampo array di partenza

//creo copia arrayObj

// ALTERNATIVA CON JSON PARSE STRINGIFY

// const arrayObjCopy = JSON.parse(JSON.stringify(arrayObj));

//ciclo for in per assegnare lettera random

/* for (var key in arrayObjCopy) {
  arrayObjCopy[key].letter = randLetter();
} */

//ALTERNATIVA CON MAP E OBJECT ASSIGN

const arrayObjCopy = arrayObj.map((u) => {
  const copiedElement = Object.assign({}, u);
  copiedElement.letter = randLetter();
  return copiedElement;
});

//ALTERNATIVA 2 CON MAP E SPREAD

//Per copiare posso usare map con spread di ogni item ad ogni ciclo più la lettera random

/* const arrayObjcopy = arrayObj.map((item) => {
  return {...item, letter:randLetter()}
});
 */

// il livello di array è 1, all'interno ho degli oggetti senza sottolivelli, quindi in questo caso va bene
//map fa la copia dell'array e spread mi copia i singoli oggetti

//OUTPUT FINALE NUOVO ARRAY COPIA

console.log("Array dopo l'aggiunta: ", arrayObjCopy); //mostro nuovo array copia

/* =================================== FUNZIONI GENERALI =========================================================================== */

//funzione per generare lettera casuale

function randLetter() {
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}
