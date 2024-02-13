import BarreDeVie from "./Classe/BarreDeVie.js";

// import Chien from "./Classe/Chien.js";

// affichage de la pop-up des règles du jeu:
const modal = document.getElementById('modal');
modal.style.display = 'block';


// fermeture de la pop-up:
const modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click', function(e) {
  modal.style.display = 'none';
})

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

  // let GrosChien = new Chien(60);
  // GrosChien.grossirChien();


  


