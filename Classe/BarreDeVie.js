export default class BarreDeVie {
  #vie;
  #couleur;
  #id;

  static affichage = document.querySelector("#affichageBarresDeVie");

  constructor(vie = 0, couleur = "#0189B4") {
    this.vie = vie;
    this.id = "";
    this.couleur = couleur;

    this.creerBarre();
  }

  get couleur() {
    return this.#couleur;
  }

  set couleur(couleur) {
    this.#couleur = couleur;
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

  get id() {
    return this.#id;
  }

  set id(id) {
    if (id.length === 0) {
      this.#id = this.idAleatoire(0, 100000000000);
    } else {
      this.#id = id;
    }
  }
  get conteneur() {
    let conteneur = document.querySelector("#conteneur" + this.#id);
    return conteneur;
  }
  get barredevie() {
    let barredevie = document.querySelector("#barredevie" + this.#id);
    return barredevie;
  }

  get boutonPerteVie() {
    let bouton = this.conteneur.querySelector(".perdre");
    return bouton;
  }

  get boutonGainVie() {
    let bouton = this.conteneur.querySelector(".gagner");
    return bouton;
  }

  get boutonGainVieCollier() {
    let bouton = this.conteneur.querySelector(".gagner30");
    return bouton;
  }

  // Méthode qui permet d'augmenter la vie.

  augmenterVie(vie) {
    if (this.vie + vie <= 100) {
      this.vie += vie;
      if (this.vie > 70) {
        this.couleur = "orange";
      }
      this.modifierBarre(this.vie, this.couleur);
    } else {
      this.vie = 90;
      this.mort();
    }
  }

  // Méthode pour diminuer les points de vie
  diminuerVie(vie) {
    if (this.vie - vie > 0) {
      this.vie -= vie;
      if (this.vie <= 70) {
        this.couleur = "#0189B4";
      }
    } else {
      this.vie = 0;
    }
    this.modifierBarre(this.vie, this.couleur);
  }

  // Méthode qui créer la barre de vie
  creerBarre() {
    BarreDeVie.affichage.innerHTML +=
      '<div id="conteneur' +
      this.id +
      '"><div id= "bordure' +
      this.id +
      '" style="width:500px; margin: 50px auto; border: 3px solid #0189B4; border-radius: 5px;"><div id="barredevie' +
      this.id +
      '" style="background-color:' +
      this.couleur +
      ";width:" +
      this.vie +
      '%; border-radius: 2px; height:20px; text-align:center; color:#FFF;"></div></div></div>';

    // on écrit la vie dans la barre
    // on appelle la méthode barredevie de la classe, qui renvoie l'élément html.
    this.barredevie.innerHTML = this.vie;

    // création des trois boutons
    this.conteneur.innerHTML +=
      '<input type="image" class="perdre" alt="brocoli" src="./img/brocoli3.png" style="margin-left: 100px";/><input type="image" class="gagner" alt="Saucisse" src="./img/saucisse2.png" style="margin-left: 100px";/><input type="image" class="gagner30" alt="Saucisse" src="./img/collierSauc2.png" style="margin-left: 100px";/>';

    // création du personnage chien dans le Html
    let fondJeu = document.querySelector("#fondJeu");
    let imageChien = document.createElement("img");
    imageChien.src = "./img/chien1.svg";
    imageChien.alt = "dessin de chien";
    imageChien.style.paddingLeft = "450px";
    imageChien.style.paddingTop = "60px";
    imageChien.classList.add("chien");

    fondJeu.appendChild(imageChien);
  }

  // Méthode qui permet de changer les paramètres de la barre de vie

  modifierBarre(vie, couleur) {
    this.barredevie.style.backgroundColor = couleur;
    this.barredevie.style.width = vie + "%";
    this.barredevie.innerHTML = vie;
  }

  //Méthode qui permet d'écrire du texte quand le personnage meurt
  mort() {
    let fondJeu = document.querySelector("#fondJeu");
    if (this.vie === 90) {
      fondJeu.innerHTML = "Perdu! Tu as mangé trop de saucisse!";
      fondJeu.style.fontSize = "50px";
      fondJeu.style.fontFamily = "Lemon";
      fondJeu.style.textAlign = "center";
      fondJeu.style.paddingTop = "100px";
      fondJeu.style.color = "#0189B4";
    }


    // this.modifierBarre(100, "red");
    
  }

  // méthode qui donne un chiffre aléatoire entre deux valeurs.
  idAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
