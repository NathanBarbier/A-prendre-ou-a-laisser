function jouer() {
var joueur1 = document.getElementById('joueur1');

    if(joueur1.value.length == 0 ){
        joueur1.style.borderColor = "red";
        joueur1.style.boxShadow = "0em 0em 1em red";
        document.getElementById("error1").innerHTML = "*Veuillez remplir ce champs";
    } else {
        document.getElementById('divNomJoueur').style.display = 'none';
        document.getElementById('partie2').style.display = 'block';
        document.getElementById('banque').style.display = 'block';
        for (i = 0; i<22; i++) {
            var x = Math.round(Math.random() * (valeur.length - 1) );
            valeurBoite[i].textContent = valeur[x];
            valeurBoiteMoyenne[i].textContent = valeur[x];
            console.log("x = " + x);
            console.log("i = " + i);
            console.log("valeur[x] = " + valeur[x]);
            console.log(valeur)
            valeur.splice(x, 1);
            }
            valeurBoiteJoueur.textContent = valeurBoite[a-1].textContent;
            boite1[a-1].style.visibility = 'hidden';
    }

document.getElementById('J1').innerHTML = "<u>PARTICIPANT<u>";
document.getElementById('info').innerHTML = joueur1.value;
}

var valeur = ["0.01 €","0.20 €","0.50 €","1 €","5 €","10 €","20 €","50 €","100 €","250 €","500 €","1000 €","5000 €","10 000 €","15 000 €","20 000 €","25 000 €","50 000 €","75 000 €","100 000 €","250 000 €","500 000 €"];


console.log("nombre random = " + Math.round(Math.random() * 22))

// valeurBoite[0].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[1].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[2].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[3].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[4].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[5].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[6].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[7].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[8].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[9].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[10].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[11].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[12].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[13].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[14].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[15].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[16].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[17].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[18].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[19].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[20].textContent = valeur[Math.round(Math.random() * 22)];
// valeurBoite[21].textContent = valeur[Math.round(Math.random() * 22)];

var valeurBoite = document.getElementsByClassName('pValeur');
var valeurBoiteMoyenne = document.getElementsByClassName('pValeurMoyenne');

var numBoiteJoueur = document.getElementById('pNumBoiteJoueur');
numBoiteJoueur.textContent = Math.round(Math.random() * 22);
var a = numBoiteJoueur.textContent;
var valeurBoiteJoueur = document.getElementById("valeurBoiteJoueur");

var boite1 = document.getElementsByClassName('boite');
console.log(boite1);

boite1[0].addEventListener("click", afficherBoite0);
boite1[1].addEventListener("click", afficherBoite1);
boite1[2].addEventListener("click", afficherBoite2);
boite1[3].addEventListener("click", afficherBoite3);
boite1[4].addEventListener("click", afficherBoite4);
boite1[5].addEventListener("click", afficherBoite5);
boite1[6].addEventListener("click", afficherBoite6);
boite1[7].addEventListener("click", afficherBoite7);
boite1[8].addEventListener("click", afficherBoite8);
boite1[9].addEventListener("click", afficherBoite9);
boite1[10].addEventListener("click", afficherBoite10);
boite1[11].addEventListener("click", afficherBoite11);
boite1[12].addEventListener("click", afficherBoite12);
boite1[13].addEventListener("click", afficherBoite13);
boite1[14].addEventListener("click", afficherBoite14);
boite1[15].addEventListener("click", afficherBoite15);
boite1[16].addEventListener("click", afficherBoite16);
boite1[17].addEventListener("click", afficherBoite17);
boite1[18].addEventListener("click", afficherBoite18);
boite1[19].addEventListener("click", afficherBoite19);
boite1[20].addEventListener("click", afficherBoite20);
boite1[21].addEventListener("click", afficherBoite21);

var pBanque = document.getElementById("pBanque");
var click = 0;
var boitesRestantes = 22


function banque() {

    if (click % 2 == 0 && click != 0) {
    pBanque.textContent = "Offre du banquier";
    pBanque.style.color = "#e0e0e0";
    moyenne();
    document.getElementById('accepteOffre').style.display = "block";
    document.getElementById('refuseOffre').style.display = "block";
    boite1[0].removeEventListener("click", afficherBoite0);
    boite1[1].removeEventListener("click", afficherBoite1);
    boite1[2].removeEventListener("click", afficherBoite2);
    boite1[3].removeEventListener("click", afficherBoite3);
    boite1[4].removeEventListener("click", afficherBoite4);
    boite1[5].removeEventListener("click", afficherBoite5);
    boite1[6].removeEventListener("click", afficherBoite6);
    boite1[7].removeEventListener("click", afficherBoite7);
    boite1[8].removeEventListener("click", afficherBoite8);
    boite1[9].removeEventListener("click", afficherBoite9);
    boite1[10].removeEventListener("click", afficherBoite10);
    boite1[11].removeEventListener("click", afficherBoite11);
    boite1[12].removeEventListener("click", afficherBoite12);
    boite1[13].removeEventListener("click", afficherBoite13);
    boite1[14].removeEventListener("click", afficherBoite14);
    boite1[15].removeEventListener("click", afficherBoite15);
    boite1[16].removeEventListener("click", afficherBoite16);
    boite1[17].removeEventListener("click", afficherBoite17);
    boite1[18].removeEventListener("click", afficherBoite18);
    boite1[19].removeEventListener("click", afficherBoite19);
    boite1[20].removeEventListener("click", afficherBoite20);
    boite1[21].removeEventListener("click", afficherBoite21);
    }
    else if (click % 2 != 0 && click != 21) {
    document.getElementById('accepteOffre').style.display = "none";
    document.getElementById('refuseOffre').style.display = "none";
    pBanque.textContent = 'Sélectionnez une autre boîte';
    }
    else if (click == 21 ) {
    laGagne();
    }


}
var e = 0;
// le monstre
function afficherBoite0() {
    valeurBoite[0].style.display = "block";
    boite1[0].removeEventListener("click", afficherBoite0);
    click++;
    boitesRestantes = 22 - click;
    e = 0;
    boiteColor();
    valeurBoiteMoyenne[0].textContent = "";
    boite1[0].removeEventListener("click", recupValNumBoite0);
    banque();
}
function afficherBoite1() {
    valeurBoite[1].style.display = "block";
    boite1[1].removeEventListener("click", afficherBoite1);
    click++;
    boitesRestantes = 22 - click;
    e = 1;
    boiteColor();
    valeurBoiteMoyenne[1].textContent = "";
    boite1[1].removeEventListener("click", recupValNumBoite1);
    banque();
}

function afficherBoite2() {
    valeurBoite[2].style.display = "block";
    boite1[2].removeEventListener("click", afficherBoite2);
    click++;
    boitesRestantes = 22 - click;
    e = 2;
    boiteColor();
    valeurBoiteMoyenne[2].textContent = "";
    boite1[2].removeEventListener("click", recupValNumBoite2);
    banque();
}

function afficherBoite3() {
    valeurBoite[3].style.display = "block";
    boite1[3].removeEventListener("click", afficherBoite3);
    click++;
    boitesRestantes = 22 - click;
    e = 3;
    boiteColor();
    valeurBoiteMoyenne[3].textContent = "";
    boite1[3].removeEventListener("click", recupValNumBoite3);
    banque();
}
function afficherBoite4() {
    valeurBoite[4].style.display = "block";
    boite1[4].removeEventListener("click", afficherBoite4);
    click++;
    boitesRestantes = 22 - click;
    e = 4;
    boiteColor();
    valeurBoiteMoyenne[4].textContent = "";
    boite1[4].removeEventListener("click", recupValNumBoite4);
    banque();
}
function afficherBoite5() {
    valeurBoite[5].style.display = "block";
    boite1[5].removeEventListener("click", afficherBoite5);
    click++;
    boitesRestantes = 22 - click;
    e = 5;
    boiteColor();
    valeurBoiteMoyenne[5].textContent = "";
    boite1[5].removeEventListener("click", recupValNumBoite5);    
    banque();
}
function afficherBoite6() {
    valeurBoite[6].style.display = "block";
    boite1[6].removeEventListener("click", afficherBoite6);
    click++;
    boitesRestantes = 22 - click;
    e = 6;
    boiteColor();
    valeurBoiteMoyenne[6].textContent = "";
    boite1[6].removeEventListener("click", recupValNumBoite6);    
    banque();
}
function afficherBoite7() {
    valeurBoite[7].style.display = "block";
    boite1[7].removeEventListener("click", afficherBoite7);
    click++;
    boitesRestantes = 22 - click;
    e = 7;
    boiteColor();
    valeurBoiteMoyenne[7].textContent = "";
    boite1[7].removeEventListener("click", recupValNumBoite7);    
    banque();
}
function afficherBoite8() {
    valeurBoite[8].style.display = "block";
    boite1[8].removeEventListener("click", afficherBoite8);
    click++;
    boitesRestantes = 22 - click;
    e = 8;
    boiteColor();
    valeurBoiteMoyenne[8].textContent = "";
    boite1[8].removeEventListener("click", recupValNumBoite8);    
    banque();
}
function afficherBoite9() {
    valeurBoite[9].style.display = "block";
    boite1[9].removeEventListener("click", afficherBoite9);
    click++;
    boitesRestantes = 22 - click;
    e = 9;
    boiteColor();
    valeurBoiteMoyenne[9].textContent = "";
    boite1[9].removeEventListener("click", recupValNumBoite9);    
    banque();
}
function afficherBoite10() {
    valeurBoite[10].style.display = "block";
    boite1[10].removeEventListener("click", afficherBoite10);
    click++;
    boitesRestantes = 22 - click;
    e = 10;
    boiteColor();
    valeurBoiteMoyenne[10].textContent = "";
    boite1[10].removeEventListener("click", recupValNumBoite10);    
    banque();
}
function afficherBoite11() {
    valeurBoite[11].style.display = "block";
    boite1[11].removeEventListener("click", afficherBoite11);
    click++;
    boitesRestantes = 22 - click;
    e = 11;
    boiteColor();
    valeurBoiteMoyenne[11].textContent = "";
    boite1[11].removeEventListener("click", recupValNumBoite11);    
    banque();
}
function afficherBoite12() {
    valeurBoite[12].style.display = "block";
    boite1[12].removeEventListener("click", afficherBoite12);
    click++;
    boitesRestantes = 22 - click;
    e = 12;
    boiteColor();
    valeurBoiteMoyenne[12].textContent = "";
    boite1[12].removeEventListener("click", recupValNumBoite12);    
    banque();
}
function afficherBoite13() {
    valeurBoite[13].style.display = "block";
    boite1[13].removeEventListener("click", afficherBoite13);
    click++;
    boitesRestantes = 22 - click;
    e = 13;
    boiteColor();
    valeurBoiteMoyenne[13].textContent = "";
    boite1[13].removeEventListener("click", recupValNumBoite13);    
    banque();
}
function afficherBoite14() {
    valeurBoite[14].style.display = "block";
    boite1[14].removeEventListener("click", afficherBoite14);
    click++;
    boitesRestantes = 22 - click;
    e = 14;
    boiteColor();
    valeurBoiteMoyenne[14].textContent = "";
    boite1[14].removeEventListener("click", recupValNumBoite14);    
    banque();
}
function afficherBoite15() {
    valeurBoite[15].style.display = "block";
    boite1[15].removeEventListener("click", afficherBoite15);
    click++;
    boitesRestantes = 22 - click;
    e = 15;
    boiteColor();
    valeurBoiteMoyenne[15].textContent = "";
    boite1[15].removeEventListener("click", recupValNumBoite15);    
    banque();
}
function afficherBoite16() {
    valeurBoite[16].style.display = "block";
    boite1[16].removeEventListener("click", afficherBoite16);
    click++;
    boitesRestantes = 22 - click;
    e = 16;
    boiteColor();
    valeurBoiteMoyenne[16].textContent = "";
    boite1[16].removeEventListener("click", recupValNumBoite16);    
    banque();
}
function afficherBoite17() {
    valeurBoite[17].style.display = "block";
    boite1[17].removeEventListener("click", afficherBoite17);
    click++;
    boitesRestantes = 22 - click;
    e = 17;
    boiteColor();
    valeurBoiteMoyenne[17].textContent = "";
    boite1[17].removeEventListener("click", recupValNumBoite17);    
    banque();
}
function afficherBoite18() {
    valeurBoite[18].style.display = "block";
    boite1[18].removeEventListener("click", afficherBoite18);
    click++;
    boitesRestantes = 22 - click;
    e = 18;
    boiteColor();
    valeurBoiteMoyenne[18].textContent = "";
    boite1[18].removeEventListener("click", recupValNumBoite18);    
    banque();
}
function afficherBoite19() {
    valeurBoite[19].style.display = "block";
    boite1[19].removeEventListener("click", afficherBoite19);
    click++;
    boitesRestantes = 22 - click;
    e = 19;
    boiteColor();
    valeurBoiteMoyenne[19].textContent = "";
    boite1[19].removeEventListener("click", recupValNumBoite19);   
    banque();
}
function afficherBoite20() {
    valeurBoite[20].style.display = "block";
    boite1[20].removeEventListener("click", afficherBoite20);
    click++;
    boitesRestantes = 22 - click;
    e = 20;
    boiteColor();
    valeurBoiteMoyenne[20].textContent = "";
    boite1[20].removeEventListener("click", recupValNumBoite20);    
    banque();
}
function afficherBoite21() {
    valeurBoite[21].style.display = "block";
    boite1[21].removeEventListener("click", afficherBoite21);
    click++;
    boitesRestantes = 22 - click;
    e = 21;
    boiteColor();
    valeurBoiteMoyenne[21].textContent = "";
    boite1[21].removeEventListener("click", recupValNumBoite21);    
    banque();
}
function afficherBoiteJoueur() {
    document.getElementById("valeurBoiteJoueur").style.display = "block";
}

var varMoyenne = 0;

function moyenne() {
    
var contenu = 0;
var somme = 0;

    for (i = 0; i < 22; i++) {
        contenu = valeurBoiteMoyenne[i].textContent.substring(0, valeurBoiteMoyenne[i].textContent.length - 1).replaceAll(' ','');
        somme += contenu * 1;
    }

varMoyenne = somme / boitesRestantes;
pBanque.textContent += " : " + varMoyenne.toFixed(2) + " €";
}

function accepteOffre() {
    document.getElementById('boiteJoueur').addEventListener("click", afficherBoiteJoueur);
    document.getElementById('laGagne').textContent = "Vous avez gagné" + " : " + varMoyenne.toFixed(2) + " € ";
    document.getElementById('accepteOffre').style.display = "none";
    document.getElementById('refuseOffre').style.display = "none";
    document.getElementById('banque').style.display = 'none';
    for (i = 0 ; i < 22; i++) {
    valeurBoite[i].style.display = 'block';
    }
    valeurBoiteJoueur.style.display = 'block';
    pBanque.textContent = "";
    document.getElementById('reload').style.display = 'block';
    for (e = 0; e < 22; e++){
    boiteColor();
    boiteColorJoueur()
    }

}

function refuseOffre() {

    pBanque.textContent = "Voulez vous changer votre boite ?";
    document.getElementById('accepteOffre').style.display = "none"
    document.getElementById('refuseOffre').style.display = "none"
    document.getElementById('echangeBoite').style.display = "block"
    document.getElementById('continuer').style.display = "block"
    // boite1[a].style.display = 'block';
}
var numBoite = document.getElementsByClassName('numBoite');

function recupValNumBoite0() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[0].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite1() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[1].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite2() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[2].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite3() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[3].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite4() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[4].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite5() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[5].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite6() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[6].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite7() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[7].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite8() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[8].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite9() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[9].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite10() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[10].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite11() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[11].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite12() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[12].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite13() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[13].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite14() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[14].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite15() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[15].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite16() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[16].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite17() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[17].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite18() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[18].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite19() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[19].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite20() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[20].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}
function recupValNumBoite21() {
    a--
    boite1[a].style.visibility = 'visible';
    a = numBoite[21].textContent;
    recupval();
    addAfficherBoite();
    removeRecupVal();
}

function echangeBoite() {

    pBanque.textContent = "Choississez une boite à échanger";
    document.getElementById('accepteOffre').style.display = "none";
    document.getElementById('refuseOffre').style.display = "none";
    document.getElementById('echangeBoite').style.display = "none";
    document.getElementById('continuer').style.display = "none";

    if (valeurBoite[0].style.display != 'block'){
        boite1[0].addEventListener("click", recupValNumBoite0);
    }
    if (valeurBoite[1].style.display != 'block'){
        boite1[1].addEventListener("click", recupValNumBoite1);
    }
    if (valeurBoite[2].style.display != 'block'){
        boite1[2].addEventListener("click", recupValNumBoite2);
    }
    if (valeurBoite[3].style.display != 'block'){
        boite1[3].addEventListener("click", recupValNumBoite3);
    }
    if (valeurBoite[4].style.display != 'block'){
        boite1[4].addEventListener("click", recupValNumBoite4);
    }
    if (valeurBoite[5].style.display != 'block'){
        boite1[5].addEventListener("click", recupValNumBoite5);
    }
    if (valeurBoite[6].style.display != 'block'){
        boite1[6].addEventListener("click", recupValNumBoite6);
    }
    if (valeurBoite[7].style.display != 'block'){
        boite1[7].addEventListener("click", recupValNumBoite7);
    }
    if (valeurBoite[8].style.display != 'block'){
        boite1[8].addEventListener("click", recupValNumBoite8);
    }
    if (valeurBoite[9].style.display != 'block'){
        boite1[9].addEventListener("click", recupValNumBoite9);
    }
    if (valeurBoite[10].style.display != 'block'){
        boite1[10].addEventListener("click", recupValNumBoite10);
    }
    if (valeurBoite[11].style.display != 'block'){
        boite1[11].addEventListener("click", recupValNumBoite11);
    }
    if (valeurBoite[12].style.display != 'block'){
        boite1[12].addEventListener("click", recupValNumBoite12);
    }
    if (valeurBoite[13].style.display != 'block'){
        boite1[13].addEventListener("click", recupValNumBoite13);
    }
    if (valeurBoite[14].style.display != 'block'){
        boite1[14].addEventListener("click", recupValNumBoite14);
    }
    if (valeurBoite[15].style.display != 'block'){
        boite1[15].addEventListener("click", recupValNumBoite15);
    }
    if (valeurBoite[16].style.display != 'block'){
        boite1[16].addEventListener("click", recupValNumBoite16);
    }
    if (valeurBoite[17].style.display != 'block'){
        boite1[17].addEventListener("click", recupValNumBoite17);
    }
    if (valeurBoite[18].style.display != 'block'){
        boite1[18].addEventListener("click", recupValNumBoite18);
    }
    if (valeurBoite[19].style.display != 'block'){
        boite1[19].addEventListener("click", recupValNumBoite19);
    }
    if (valeurBoite[20].style.display != 'block'){
        boite1[20].addEventListener("click", recupValNumBoite20);
    }
    if (valeurBoite[21].style.display != 'block'){
        boite1[21].addEventListener("click", recupValNumBoite21);
    }

    // boite1[1].addEventListener("click", recupValNumBoite1);
    // boite1[2].addEventListener("click", recupValNumBoite2);
    // boite1[3].addEventListener("click", recupValNumBoite3);
    // boite1[4].addEventListener("click", recupValNumBoite4);
    // boite1[5].addEventListener("click", recupValNumBoite5);
    // boite1[6].addEventListener("click", recupValNumBoite6);
    // boite1[7].addEventListener("click", recupValNumBoite7);
    // boite1[8].addEventListener("click", recupValNumBoite8);
    // boite1[9].addEventListener("click", recupValNumBoite9);
    // boite1[10].addEventListener("click", recupValNumBoite10);
    // boite1[11].addEventListener("click", recupValNumBoite11);
    // boite1[12].addEventListener("click", recupValNumBoite12);
    // boite1[13].addEventListener("click", recupValNumBoite13);
    // boite1[14].addEventListener("click", recupValNumBoite14);
    // boite1[15].addEventListener("click", recupValNumBoite15);
    // boite1[16].addEventListener("click", recupValNumBoite16);
    // boite1[17].addEventListener("click", recupValNumBoite17);
    // boite1[18].addEventListener("click", recupValNumBoite18);
    // boite1[19].addEventListener("click", recupValNumBoite19);
    // boite1[20].addEventListener("click", recupValNumBoite20);
    // boite1[21].addEventListener("click", recupValNumBoite21);

}

function continuer() {
    
    if (click == 20) {
        pBanque.textContent = 'Ouvrez la dernière boîte';
    } else {
        pBanque.textContent = "Sélectionnez deux boîtes";
    }
    document.getElementById('accepteOffre').style.display = "none";
    document.getElementById('refuseOffre').style.display = "none";
    document.getElementById('echangeBoite').style.display = "none";
    document.getElementById('continuer').style.display = "none";

    if (valeurBoite[0].style.display != 'block'){
        boite1[0].addEventListener("click", afficherBoite0);
    }
    if (valeurBoite[1].style.display != 'block'){
        boite1[1].addEventListener("click", afficherBoite1);
    }
    if (valeurBoite[2].style.display != 'block'){
        boite1[2].addEventListener("click", afficherBoite2);
    }
    if (valeurBoite[3].style.display != 'block'){
        boite1[3].addEventListener("click", afficherBoite3);
    }
    if (valeurBoite[4].style.display != 'block'){
        boite1[4].addEventListener("click", afficherBoite4);
    }
    if (valeurBoite[5].style.display != 'block'){
        boite1[5].addEventListener("click", afficherBoite5);
    }
    if (valeurBoite[6].style.display != 'block'){
        boite1[6].addEventListener("click", afficherBoite6);
    }
    if (valeurBoite[7].style.display != 'block'){
        boite1[7].addEventListener("click", afficherBoite7);
    }
    if (valeurBoite[8].style.display != 'block'){
        boite1[8].addEventListener("click", afficherBoite8);
    }
    if (valeurBoite[9].style.display != 'block'){
        boite1[9].addEventListener("click", afficherBoite9);
    }
    if (valeurBoite[10].style.display != 'block'){
        boite1[10].addEventListener("click", afficherBoite10);
    }
    if (valeurBoite[11].style.display != 'block'){
        boite1[11].addEventListener("click", afficherBoite11);
    }
    if (valeurBoite[12].style.display != 'block'){
        boite1[12].addEventListener("click", afficherBoite12);
    }
    if (valeurBoite[13].style.display != 'block'){
        boite1[13].addEventListener("click", afficherBoite13);
    }
    if (valeurBoite[14].style.display != 'block'){
        boite1[14].addEventListener("click", afficherBoite14);
    }
    if (valeurBoite[15].style.display != 'block'){
        boite1[15].addEventListener("click", afficherBoite15);
    }
    if (valeurBoite[16].style.display != 'block'){
        boite1[16].addEventListener("click", afficherBoite16);
    }
    if (valeurBoite[17].style.display != 'block'){
        boite1[17].addEventListener("click", afficherBoite17);
    }
    if (valeurBoite[18].style.display != 'block'){
        boite1[18].addEventListener("click", afficherBoite18);
    }
    if (valeurBoite[19].style.display != 'block'){
        boite1[19].addEventListener("click", afficherBoite19);
    }
    if (valeurBoite[20].style.display != 'block'){
        boite1[20].addEventListener("click", afficherBoite20);
    }
    if (valeurBoite[21].style.display != 'block'){
        boite1[21].addEventListener("click", afficherBoite21);
    }
}

function addAfficherBoite() {
    
    boite1[0].addEventListener("click", afficherBoite0);
    boite1[1].addEventListener("click", afficherBoite1);
    boite1[2].addEventListener("click", afficherBoite2);
    boite1[3].addEventListener("click", afficherBoite3);
    boite1[4].addEventListener("click", afficherBoite4);
    boite1[5].addEventListener("click", afficherBoite5);
    boite1[6].addEventListener("click", afficherBoite6);
    boite1[7].addEventListener("click", afficherBoite7);
    boite1[8].addEventListener("click", afficherBoite8);
    boite1[9].addEventListener("click", afficherBoite9);
    boite1[10].addEventListener("click", afficherBoite10);
    boite1[11].addEventListener("click", afficherBoite11);
    boite1[12].addEventListener("click", afficherBoite12);
    boite1[13].addEventListener("click", afficherBoite13);
    boite1[14].addEventListener("click", afficherBoite14);
    boite1[15].addEventListener("click", afficherBoite15);
    boite1[16].addEventListener("click", afficherBoite16);
    boite1[17].addEventListener("click", afficherBoite17);
    boite1[18].addEventListener("click", afficherBoite18);
    boite1[19].addEventListener("click", afficherBoite19);
    boite1[20].addEventListener("click", afficherBoite20);
    boite1[21].addEventListener("click", afficherBoite21);
}

function removeRecupVal() {
    boite1[0].removeEventListener("click", recupValNumBoite0);
    boite1[1].removeEventListener("click", recupValNumBoite1);
    boite1[2].removeEventListener("click", recupValNumBoite2);
    boite1[3].removeEventListener("click", recupValNumBoite3);
    boite1[4].removeEventListener("click", recupValNumBoite4);
    boite1[5].removeEventListener("click", recupValNumBoite5);
    boite1[6].removeEventListener("click", recupValNumBoite6);
    boite1[7].removeEventListener("click", recupValNumBoite7);
    boite1[8].removeEventListener("click", recupValNumBoite8);
    boite1[9].removeEventListener("click", recupValNumBoite9);
    boite1[10].removeEventListener("click", recupValNumBoite10);
    boite1[11].removeEventListener("click", recupValNumBoite11);
    boite1[12].removeEventListener("click", recupValNumBoite12);
    boite1[13].removeEventListener("click", recupValNumBoite13);
    boite1[14].removeEventListener("click", recupValNumBoite14);
    boite1[15].removeEventListener("click", recupValNumBoite15);
    boite1[16].removeEventListener("click", recupValNumBoite16);
    boite1[17].removeEventListener("click", recupValNumBoite17);
    boite1[18].removeEventListener("click", recupValNumBoite18);
    boite1[19].removeEventListener("click", recupValNumBoite19);
    boite1[20].removeEventListener("click", recupValNumBoite20);
    boite1[21].removeEventListener("click", recupValNumBoite21);
}

function recupval() {
    document.getElementById('pNumBoiteJoueur').textContent = a;
    a--
    valeurBoiteJoueur.textContent = valeurBoite[a].textContent;
    boite1[a].style.visibility = 'hidden';
    a++
    pBanque.textContent = "Vous avez choisi la boite numéro " + a + " ! " + "Sélectionnez deux boîtes";
}

function laGagne() {

    document.getElementById('laGagne').textContent = "Vous avez gagné : " + valeurBoiteJoueur.textContent + " !!!";
    valeurBoiteJoueur.style.display = 'block';
    document.getElementById('reload').style.display = 'block';
    document.getElementById('banque').style.display = 'none';
    boiteColorJoueur();

}

function boiteColor() {
    var contenu = '';
    var argentBoite = 0;
    
    contenu = valeurBoiteMoyenne[e].textContent.substring(0, valeurBoiteMoyenne[e].textContent.length - 1).replaceAll(' ','');
    argentBoite = contenu * 1;

    if ( argentBoite <= 5 && argentBoite > 0) {
        boite1[e].style.background = 'url(image/bronze.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em rgb(148, 88, 38)';
        
    }
    else if ( argentBoite == 10) {
        boite1[e].style.background = 'url(image/bronze.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em rgb(148, 88, 38)';
    }
    else if ( argentBoite <= 500 && argentBoite > 10) {
        boite1[e].style.background = 'url(image/argent.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em silver';
    }
    else if ( argentBoite <= 20000 && argentBoite > 500) {
        boite1[e].style.background = 'url(image/gold.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em gold';
    }
    else if ( argentBoite == 25000) {
        boite1[e].style.background = 'url(image/gold.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em gold';
    }
    else if ( argentBoite < 500000 && argentBoite > 25000) {
        boite1[e].style.background = 'url(image/rubis.jpg)' ;
        boite1[e].style.boxShadow = '0 0 1em red';
    }
    else if ( argentBoite == 500000) {
        boite1[e].style.background = 'url(image/diam.jpg)';
        boite1[e].style.boxShadow = '0 0 3em  rgb(42, 174, 218)';

    }
}

function boiteColorJoueur() {

    var contenuBoiteJoueur ='';
    var argentBoiteJoueur = 0;

    contenuBoiteJoueur = document.getElementById('valeurBoiteJoueur').textContent.substring(0, valeurBoiteJoueur.textContent.length - 1).replaceAll(' ','');
    argentBoiteJoueur = contenuBoiteJoueur * 1;

    if ( argentBoiteJoueur <= 5 && argentBoiteJoueur > 0) {
        boiteJoueur.style.background = 'url(image/bronze.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em rgb(148, 88, 38)';
        
    }
    else if ( argentBoiteJoueur == 10) {
        boiteJoueur.style.background = 'url(image/bronze.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em rgb(148, 88, 38)';
    }
    else if ( argentBoiteJoueur <= 500 && argentBoiteJoueur > 10) {
        boiteJoueur.style.background = 'url(image/argent.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em silver';
    }
    else if ( argentBoiteJoueur <= 20000 && argentBoiteJoueur > 500) {
        boiteJoueur.style.background = 'url(image/gold.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em gold';
    }
    else if ( argentBoiteJoueur == 25000) {
        boiteJoueur.style.background = 'url(image/gold.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em gold';
    }
    else if ( argentBoiteJoueur < 500000 && argentBoiteJoueur > 25000) {
        boiteJoueur.style.background = 'url(image/rubis.jpg)' ;
        boiteJoueur.style.boxShadow = '0 0 1em red';
    }
    else if ( argentBoiteJoueur == 500000) {
        boiteJoueur.style.background = 'url(image/diam.jpg)';
        boiteJoueur.style.boxShadow = '0 0 3em  rgb(42, 174, 218)';

    }
}