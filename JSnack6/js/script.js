/* 1A:
Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
Peso = 10 */

//Assegno esternamente i valori che riprenderà nella costante
let nome = "palla";
let peso = 10;

const palla = {
  nome, //nella costante le chiavi siccome coincidono (nome : nome e peso:peso) posso semplicemente omettere il valore della proprietà
  peso,
};

console.log(palla);

/* 1B:
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
 */

var modifica = parseInt(prompt("inserisci nuovo peso palla")); //creo variabile con prompt

palla["peso"] = modifica; //modifico il valore di peso con il valore inserito nel prompt

console.log(palla); //vedo il nuovo oggetto con valore modificato

//prova TEMPLATE LITERAL in output
//nuovo peso
console.log(
  `
  Il nuovo peso della palla è:
  ${palla.peso} kg
  `
);
