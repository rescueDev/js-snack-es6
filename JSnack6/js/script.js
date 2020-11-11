/* 1A:
Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
Peso = 10 */

var palla = {
  nome: "palla",
  peso: 10,
};

console.log(palla);

/* 1B:
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
 */

var modifica = parseInt(prompt("inserisci nuovo peso palla")); //creo variabile con prompt

palla["peso"] = modifica; //modifico il valore di peso con il valore inserito nel prompt

console.log(palla); //vedo il nuovo oggetto con valore modificato
console.log("Nuovo peso :", palla.peso); //nuovo peso
