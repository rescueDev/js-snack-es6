/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
STEP”:
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
 */

let punti = 0;
let falliSubiti = 0;

//oggetto squadre

const squadre = [
  {
    nome: "Real Madrid",
    punti,
    falliSubiti,
  },
  {
    nome: "Barcellona",
    punti,
    falliSubiti,
  },
  {
    nome: "Inter",
    punti,
    falliSubiti,
  },
  {
    nome: "Borussia",
    punti,
    falliSubiti,
  },
  {
    nome: "Juventus",
    punti,
    falliSubiti,
  },
];

console.log(squadre); //vedo l'oggetto prima delle operazioni

//clono l'array di squadre per non modificare i punti e falli subiti dell'array origine
//uso map con object assign
const squadreCopy = squadre.map((u) => {
  const copiedElement = Object.assign({}, u);
  copiedElement.punti = randomGen();
  copiedElement.falliSubiti = randomGen();
  return copiedElement;
});

console.log(squadreCopy);

/* //ciclo forEach che mi popola i valori di punti e falliSubiti con numeri random
squadre.forEach((element) => {
  return [(element.punti = randomGen())], [(element.falliSubiti = randomGen())];
});

// con clico for each mi stampo in tabelle ogni squadra con i suoi valori
squadre.forEach((element) => {
  console.log(`
  Nome squadra: ${element.nome}
  Punti: ${element.punti}
  Falli subiti: ${element.falliSubiti}
  `);
}); */

//BONUS
//Ordino secondo i punti le squadre come una classifica

squadreCopy.forEach((element) => {
  squadreCopy.sort((a, b) => b.punti - a.punti);
  return squadreCopy;
});

console.log("Classifica squadre: ", squadreCopy);

// funzione per generare numeri random
function randomGen() {
  return Math.floor(Math.random() * 100) + 1;
}
