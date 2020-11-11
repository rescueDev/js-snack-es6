// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var biciclette = [
  {
    nome: "atala",
    peso: 50 + " kg",
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

//ciclo for in per ciclare tutti i valori peso
for (var i = 0; i < biciclette.length; i++) {
  console.log(biciclette[i].nome + " : " + biciclette[i].peso);
}

// ordino le bici nell'array in base al peso
biciclette.sort(function (a, b) {
  return a.peso - b.peso;
});

var min = biciclette[0];
console.log(min); //mostro la bicicletta con il peso minore
