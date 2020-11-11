/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
STEP”:
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
 */

//oggetto squadre

var squadre = [
  {
    nome: "Real Madrid",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Barcellona",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Borussia",
    punti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falliSubiti: 0,
  },
];

console.log(squadre); //vedo l'oggetto prima delle operazioni

//ciclo for che mi popola i valori di punti e falliSubiti con numeri random
for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomGen();
  squadre[i].falliSubiti = randomGen();
}

console.log("Nuovi valori con punti e falli: ", squadre); // stampo oggetto dopo aver popolato i valori

// funzione per generare numeri random
function randomGen() {
  return Math.floor(Math.random() * 100) + 1;
}
