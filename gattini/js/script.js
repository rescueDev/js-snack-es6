/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/

//abbiamo dei gattini
const cats = [
  {
    name: "Adam",
    age: 0.3,
    color: "#00ffff",
    gender: "male",
  },
  {
    name: "Emily",
    age: 0.8,
    color: "#f700ff",
    gender: "female",
  },
  {
    name: "Willoby",
    age: 1.3,
    color: "#ff6600",
    gender: "male",
  },
  {
    name: "Poppy",
    age: 0.2,
    color: "#00ff00",
    gender: "female",
  },
];

// console.log(cats);

// stampiamo tutti i gattini in fila nel 'container' [forEach + Tlit]

//mettiamo un fiocco colorato ad ogni gattino,
//base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciam dopo divisi
//colori base
const pink = "#ff00e6";
const blue = "#0084ff";
//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]

//console.log(cats, ribbonCats);

// dividiamoli per sesso [2 nuovi array con filter]
//console.log(femaleCats);
//console.log(maleCats);

// e facciamo output femmine in 'female'
// e invece maschi in 'male'

//creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]

//console.log(ordCats);

// ne facciamo output in 'container-new'
// stampiamo tutti i gattini in fila

//altro array con obj di soli ribbon and name [destructuring in map]
