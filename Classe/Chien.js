export default class Chien {
  
  #vie;

  constructor(vie) {
    this.vie = vie;
  }

  get vie() {
    return this.#vie;
  }

  set vie(vie) {
    if (vie >= 0 && vie <= 100) {
      this.#vie = vie;
    } else {
      throw "la vie doit être comprise entre 0 et 100";
    }
  }

  // méthode pour afficher le chien en plus gros
  grossirChien() {
    if (this.vie >= 60) {
      this.afficherChienGros();
    }
  }
  // méthode pour créer le html de l'image du gros chien
  créerChienGros() {
    let fondJeu = document.querySelector("#fondJeu");
    let imageGrosChien = document.createElement("img");
    imageGrosChien.src = "./img/chienGros.png";
    imageGrosChien.alt = "dessin de chien";
    imageGrosChien.style.paddingLeft = "400px";

    fondJeu.appendChild(imageGrosChien);
  }
}
