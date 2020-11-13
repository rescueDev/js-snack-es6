/* Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente */

//creo il mio array iniziale

const nomi = ["Michele", "Giovanni", "Fabio", "Simone", "Chiara", "Lucia"];

//array vuoto con nomi filtrati

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

//con filter filtro in un nuovo array l'array precedente secondo i numeri inseriti nel prompt
const filteredArray = nomi.filter((element, index) => {
  //  questa è la condizione che automaticamente il return mi verifica e nel caso vero mi mette nell'array i nomi
  return (
    (index >= numeroUno && index <= numeroDue) ||
    (index >= numeroDue && index <= numeroUno)
  );
});

console.log(filteredArray);

// ---------- ALTERNATIVA CON CICLI FOR

//caso limite in cui il primo numero sia > del secondo
/* if (primoNum > secondoNum) {
  for (let i = secondoNum + 1; i < primoNum; i++) {
    console.log(nomi[i]);
    nomiRange.push(nomi[i]); // pusho i nuovi nomi nell' array vuoto
  }
}

//caso in cui primo numero sia < del secondo
else {
  for (let i = primoNum + 1; i < secondoNum; i++) {
    console.log(nomi[i]);
    nomiRange.push(nomi[i]); // pusho i nuovi nomi nell' array vuoto
  }
} */

// ------------------------ OUTPUT finale
console.log("Nuovo array nomi filtrato: ", filteredArray); // stampo array nuovo filtrato
