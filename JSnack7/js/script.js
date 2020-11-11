// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const biciclette = [
  {
    nome: "atala",
    peso: 50,
  },
  {
    nome: "trix",
    peso: 80,
  },
  {
    nome: "vortex",
    peso: 40,
  },
  {
    nome: "rex",
    peso: 18,
  },
  {
    nome: "raptor",
    peso: 45,
  },
];

//ciclo forEach per ciclare tutti i valori peso
biciclette.forEach((element) => {
  console.log(`
  La bicicletta ${element.nome} pesa ${element.peso} kg
  `);
});

// ordino le bici nell'array in base al peso
//implemento Arrow function al posto di una normale anonima funzione
biciclette.sort((a, b) => {
  return a.peso - b.peso; //essendo tra le graffe metto sempre return
});

//applico filter method per estrapolare la bici più leggera in un nuovo array
const biciLeggera = biciclette.filter((element) => {
  return element === biciclette[0]; // indice 0 dell'array corrisponde alla bici più leggera dopo averle ordinate con il sort
});
// var min = biciclette[0];
console.log(biciLeggera); //mostro la bicicletta con il peso minore
