const contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantChoixUtlisateur = document.getElementById("choix-utilisateur");
const contenantResultats = document.getElementById("resultats");

const contenantMessagefin = document.getElementById("message_fin");
const SectionGagnant = document.getElementById("gagnant");

const contenantscorejoueur = document.getElementById("scorejoueur");
const contenatscoreOrdinateur = document.getElementById("scoreordinateur");

const choixpossible = document.querySelectorAll("button");
let resultat;
let Message;
let choixUtilisateur;
let choixOdinateurs;
let scorejoueur = 0;
let scoreodinateur = 0;
//Evenement 'Click sur les buttons'
choixpossible.forEach((choixpossible) =>
  choixpossible.addEventListener("click", (e) => {
    //récuperation de l'Id du boutton cliqué
    choixUtilisateur = e.target.id;
    //on ajoute l'image qui correspont au choix de l'utilisateur
    contenantChoixUtlisateur.innerHTML = `<img src ="${choixUtilisateur}.png">`;
    choixOdinateur();
    verification();
    gagnantJeu();
    afficheGagnant();
    reload();
  })
);
nouvellePartie();
function choixOdinateur() {
  const choix = ["pierre", "papier", "ciseau"];
  choixOdinateurs = choix[Math.floor(Math.random() * choix.length)];
  contenantChoixOrdinateur.innerHTML = `<img src ="${choixOdinateurs}.png">`;
}
//fonction vérification du gagnant
function verification() {
  if (choixUtilisateur === choixOdinateurs) {
    resultat = "ÉGALITÉ";
  } else if (
    (choixUtilisateur === "pierre" && choixOdinateurs === "ciseau") ||
    (choixUtilisateur === "papier" && choixOdinateurs === "pierre") ||
    (choixUtilisateur === "ciseau" && choixOdinateurs === "papier")
  ) {
    resultat = "GAGNÉ";
    scorejoueur++;
  } else {
    resultat = "PERDU";
    scoreodinateur++;
  }

  contenantResultats.innerHTML = `${resultat}`;
  contenantscorejoueur.innerHTML = `${scorejoueur}`;
  contenatscoreOrdinateur.innerHTML = `${scoreodinateur}`;
}
//fonction gagnant de la partie
function gagnantJeu() {
  if (scorejoueur === 10 && scoreodinateur < 10) {
    contenantMessagefin.innerHTML = "Super Vous avez Gagné Le Jeu";
  } else if (scorejoueur < 10 && scoreodinateur === 10) {
    contenantMessagefin.innerHTML = "Désolé L'ordinateur a Gagné Le Jeu";
  } else {
    contenantMessagefin.innerHTML = "";
  }
}
function afficheGagnant() {
  if (scorejoueur === 10 || scoreodinateur === 10) {
    SectionGagnant.style.display = "flex";
  }
}

function reload() {
  if (scorejoueur > 10 || scoreodinateur > 10) {
    window.location.reload();
  }
}
