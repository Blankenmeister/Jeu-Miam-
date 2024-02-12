import BarreDeVie from "./Classe/BarreDeVie.js";

// On prépare le tableau qui contiendra toutes nos barres de vies.
//const tableau = [];
// On instancie ensuite notre classe.
//tableau.push(new BarreDeVie());

let barre = new BarreDeVie;



// On lit le tableau, pour retrouver toutes les barres :
//tableau.forEach(barre => {
  barre.boutonPerteVie.addEventListener('click', () => {
    barre.perdreVie(10);
  })

  barre.boutonGainVie.addEventListener('click', () => {
    barre.gagnerVie(10);
  })

  barre.boutonGainVieCollier.addEventListener('click', () => {
    barre.gagnerVie(30);
  })
