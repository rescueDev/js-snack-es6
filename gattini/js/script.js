/*
icone:
<i class="fas fa-cat" style="color:......"></i>
 <i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
 nome gatto
*/

$(document).ready(function () {
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

  //mostro l'array di obj
  console.log(cats);

  const container = document.getElementById("container");
  // stampiamo tutti i gattini in fila nel 'container' [forEach + Tlit]

  cats.forEach((element) => {
    // console.log(element);

    let contenuto = container.innerHTML;

    container.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      ${element.name}
    </div>
  `;
  });

  //colori base
  const pink = "#ff00e6";
  const blue = "#0084ff";

  //mettiamo un fiocco colorato ad ogni gattino,
  //usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
  // opacity sarà in base all'age [age*100]
  const ribbonCats = cats.map((element) => {
    return {
      ...element,
      ribbon: {
        color: element.gender === "male" ? blue : pink,
        opacity: element.age * 100,
      },
    };
  });

  console.log(ribbonCats);

  //utilizzo filter per creare nuovo array cats female

  const femaleCats = ribbonCats.filter((element) => {
    return element.gender === "female";
  });

  console.log(femaleCats);

  //utilizzo filter per creare nuovo array cats male

  const maleCats = ribbonCats.filter((element) => {
    return element.gender === "male";
  });

  console.log(maleCats);

  // e facciamo output femmine in 'male'
  const floatDx = document.getElementById("male");

  maleCats.forEach((element) => {
    let contenuto = floatDx.innerHTML;

    //il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
    floatDx.innerHTML = `${contenuto}
    <div> 
      <i class="fas fa-cat" style="color:${element.color}"></i>
       <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
    `;
  });

  console.log(maleCats);

  // e facciamo output femmine in 'female'
  const floatSx = document.getElementById("female");

  femaleCats.forEach((element) => {
    let contenuto = floatSx.innerHTML;

    //il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
    floatSx.innerHTML = `${contenuto}
    <div> 
      <i class="fas fa-cat" style="color:${element.color}"></i>
       <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
    `;
  });

  //creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]

  const ordCats = [...femaleCats, ...maleCats];

  console.log(ordCats);

  // ne facciamo output in 'container-new'

  const orderCats = document.getElementById("container-new");
  ordCats.forEach((element) => {
    let contenuto = orderCats.innerHTML;
    orderCats.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      ${element.name}
    </div>
    `;
  });

  //altro array con obj di soli ribbon and name [destructuring in map]

  const ribbonName = ribbonCats.map((element) => {
    let { name, ribbon } = element;
    let newObj = {
      name,
      ribbon,
    };
    return newObj;
  });

  console.log(ribbonName);

  //Bonus stampare solo elenco nome e fiocco
  const nomeEfiocco = document.getElementById("nome-fiocco");

  ribbonName.forEach((element) => {
    let contenuto = nomeEfiocco.innerHTML;
    nomeEfiocco.innerHTML = `${contenuto}
    <div>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
    `;
  });
});
