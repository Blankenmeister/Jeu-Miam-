import BarreDeVie from "./Classe/BarreDeVie.js";
<<<<<<< HEAD
import Chien from "./Classe/Chien.js";


// instanciation de la classe BarreDeVie
let barre = new BarreDeVie;

// méthode pour faire augmenter ou faire diminuer la vie sur les trois boutons
  barre.boutonPerteVie.addEventListener('click', () => {
    barre.diminuerVie(10);
  })

  barre.boutonGainVie.addEventListener('click', () => {
    barre.augmenterVie(10);
  })

  barre.boutonGainVieCollier.addEventListener('click', () => {
    barre.augmenterVie(30);
  })

  let GrosChien = new Chien(60);
  GrosChien.grossirChien();


=======

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
>>>>>>> 59028f8be2cfbd420e65912e827f9b5dd65c7d9b
