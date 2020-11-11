/* Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente */

//creo il mio array iniziale

var nomi = ["Michele", "Giovanni", "Fabio", "Simone", "Chiara", "Lucia"];

//array vuoto con nomi filtrati

var nomiRange = [];

//prompt con richiesta numeri

//primo prompt

var primoNum = parseInt(prompt("Primo numero"));

//cliclo while finchè utente non mette numeri range o non mette numeri
while (primoNum > nomi.length - 1 || isNaN(primoNum)) {
  alert("Numero fuori range inserisci numero da 0 a " + (nomi.length - 1));
  primoNum = parseInt(prompt("Primo numero"));
}

//secondo prompt

var secondoNum = parseInt(prompt("Secondo numero"));

//cliclo while finchè utente non mette numeri range o non mette numeri
while (secondoNum > nomi.length - 1 || isNaN(secondoNum)) {
  alert("Numero fuori range inserisci numero da 0 a " + (nomi.length - 1));
  secondoNum = parseInt(prompt("Secondo numero"));
}

console.log(primoNum, secondoNum); //vedo numeri immessi

//caso limite in cui il primo numero sia > del secondo
if (primoNum > secondoNum) {
  for (var i = secondoNum + 1; i < primoNum; i++) {
    console.log(nomi[i]);
    nomiRange.push(nomi[i]); // pusho i nuovi nomi nell' array vuoto
  }
}

//caso in cui primo numero sia < del secondo
else {
  for (var i = primoNum + 1; i < secondoNum; i++) {
    console.log(nomi[i]);
    nomiRange.push(nomi[i]); // pusho i nuovi nomi nell' array vuoto
  }
}

// OUTPUT finale
console.log("Nuovo array nomi filtrato: ", nomiRange); // stampo array nuovo filtrato
