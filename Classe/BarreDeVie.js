export default class BarreDeVie {
  #vie;
  #couleur;
  #id;

  // Créer une classe Barre de vie, qu'on pourra appeler autant de fois qu'on veut.
  // On rend cette classe exportable.

  // propriété statique qui donne, avec ou sans instanciation, l'élément HTML où l'on crée les barres de vie.
  static affichage = document.querySelector("#affichageBarresDeVie");

  // Si on nous passe les paramètres vie et couleur, on les utilise, sinon on prend les paramètres par défaut.
  constructor(vie = 0, couleur = "#0189B4") {
    // On appelle les différents setters (vous remarquez qu'on ne met pas le # comme si on appelait la propriété directement)
    this.vie = vie;
    this.id = "";
    this.couleur = couleur;

    // On crée notre élément dans le HTML
    // on appelle une méthode de notre classe, en faisant comme
    // avec les variables : this.methode()
    this.creerBarre();
  }

  /**
   * Tous les gettets et setters permettent de mettre à jour et récupérer les valeurs.
   *
   */

  get couleur() {
    return this.#couleur;
  }

  set couleur(couleur) {
    this.#couleur = couleur;
  }

  // getter qui permet d'afficher la vie.
  get vie() {
    return this.#vie;
  }

  set vie(vie) {
    // On vérifie aussi que vie est comprise entre 0 et 100.
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
  // Getter qui permet de récupérer l'objet conteneur de l'objet en cours.
  get conteneur() {
    let conteneur = document.querySelector("#conteneur" + this.#id);
    return conteneur;
  }
  // Permet de récupérer l'objet barredevie dans le html de l'objet en cours.
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

  

  // Méthode qui permet de rajouter de la vie.
  // Si la vie actuelle plus la vie ajoutée est inférieur à 100, on additionne la vie actuelle et la vie ajoutée. si elle dépasse 100, on met la vie à 100 (on ne peut pas aller au-dessus).
  // Puis on redessine la barre.
  gagnerVie(vie) {
    if (this.vie + vie <= 100) {
      this.vie += vie;
      if (this.vie > 70) {
        this.couleur = "orange";
      }
      this.modifierBarre(this.vie, this.couleur);
    } else {
      this.vie = 100;
      this.mort();
    }
    
  }

  // Méthode pour enlever de la vie.
  // Fonctionne comme gagnerVie.
  // Dans le cas où on atteint zéro, on appelle la fonction mort.
  // Dans le cas où la vie passe en-dessous de 40, on change la couleur.
  perdreVie(vie) {
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

  // Méthode qui permet de créer l'élement visuel.
  creerBarre() {
    // Dans l'élément général, on crée tous les éléments contenant la barre de vie.
    BarreDeVie.affichage.innerHTML +=
      '<div id="conteneur' +
      this.id +
      '"><div id= "bordure' +
      this.id +
      '" style="width:500px; margin: 50px auto; border: 3px solid lightblue; border-radius: 5px;"><div id="barredevie' +
      this.id +
      '" style="background-color:' + this.couleur + ";width:" + this.vie + '%; border-radius: 2px; height:20px; text-align:center; color:#FFF;"></div></div></div>';

    // On récupère ensuite ces différents éléments

    // on écrit la vie dans la barre :
    // on appelle la méthode barredevie de la classe, qui renvoie l'élément html.
    this.barredevie.innerHTML = this.vie;

    // On ajoute deux boutons pour enlever et ajouter de la vie, en faisant appel aux méthodes de l'objet.

    this.conteneur.innerHTML +=
      '<input type="image" class="perdre" alt="brocoli" src="./img/brocoli3.png" style="margin-left: 100px";/><input type="image" class="gagner" alt="Saucisse" src="./img/saucisse2.png" style="margin-left: 100px";/><input type="image" class="gagner30" alt="Saucisse" src="./img/collierSauc2.png" style="margin-left: 100px";/>'


    let fondJeu = document.querySelector('#fondJeu'); 
    let imageChien = document.createElement("img");
    imageChien.src = "./img/chien1.svg";
    imageChien.alt = "dessin de chien";
    imageChien.style.paddingLeft = "450px";
    imageChien.style.paddingTop = "60px";


    fondJeu.appendChild(imageChien);
  }

  // Méthode qui permet de changer les paramètres de la barre de vie :
  // - la taille de la barre,
  // - la couleur,
  // - le pourcentage écrit dans la barre.
  modifierBarre(vie, couleur) {
    this.barredevie.style.backgroundColor = couleur;
    this.barredevie.style.width = vie + "%";
    this.barredevie.innerHTML = vie;
  }

  //Méthode qui permet, Dans le cas où on meurt, de modifier la barre pour la mettre en rouge, puis d'écrire dedans un petit texte.
  mort() {
    this.modifierBarre(0, "red");
    let fondJeu = document.querySelector('#fondJeu'); 
    fondJeu.innerHTML = "Tu as mangé trop de saucisse!";
    fondJeu.style.fontSize = "50px";
    fondJeu.style.fontFamily = "Arial";
    fondJeu.style.fontWeight = "bold";
    fondJeu.style.textAlign = "center";
    fondJeu.style.paddingTop = "100px";
    fondJeu.style.color = "#D74A1F";
  }

  // Petite méthode qui donne un chiffre aléatoire entre deux valeurs.
  idAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}