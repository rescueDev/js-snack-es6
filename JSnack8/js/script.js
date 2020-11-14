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

  // Caso limite: se ci sono due squadri con gli stessi punti mi ordini alfabeticamente
  if ([element.punti] === [element.punti]) {
    squadreCopy.sort((c) => c.nome);
    return squadreCopy;
  }
});

console.log("Classifica squadre: ", squadreCopy);

//BONUS
//aggiungo ad ogni squadra le proprietà differenza reti creata dopo con numero random in un nuovo array

const differenzaRetiClass = squadreCopy.map((element) => {
  return { ...element, differenza: randomGen() };
});

differenzaRetiClass.forEach((element) => {
  // Caso limite: se ci sono due squadre con gli stessi punti mi ordini in base alla differenza reti
  if ([element.punti] === [element.punti]) {
    differenzaRetiClass.sort((c, d) => c.differenza - d.differenza);
    // altrimenti mi ordini per punti
  } else {
    differenzaRetiClass.sort((a, b) => b.punti - a.punti);
  }
});

console.log("Classifica aggiornata finale : ", differenzaRetiClass);

const stampaClassifica = document.getElementById("classifica");

//stampo classifica in html

var len = differenzaRetiClass.length;
var text = "";

for (let index = 0; index < len; index++) {
  let myObj = differenzaRetiClass[index];
  console.log(myObj);

  for (var key in myObj) {
    text += myObj[key] + " ";
  }
  text += "<br/>";
}

stampaClassifica.innerHTML = text;

// =============================== FUNZIONI GENERALI

// funzione per generare numeri random
function randomGen() {
  return Math.floor(Math.random() * 100) + 1;
}

//funzione per generare differenza reti
function randomDiff(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
