// fichier Contact exo js17_lesformulaires.js
document.Contact exo js17_lesformulaires; 

const societe= "x";         //dans le fichier html, soc correspond à société
soc.length=1;
console.log(soc);
console.log(soc.length);

var formValid = document.getElementById("boutondenvoi");
var prenom = document.getElementById("prenom");
var contactabsent = document.getElementById("contactabsent");
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

/*
function 
// si le champ est vide
if (prenomabsent){
    prenomabsent
}
---------------
function    testcode()              //pour tester le code postal
{
    var filtre = /[0-9]{5}/;
    var CP = document.getElementById("code").value;
    var result = filtre.test(CP);
    if(!filtre.test(CP))
        alert("Rensiegner un code postal valide (exemple : 75000)");
    filtre.lastIndex;
}
----------------------
function    testmail()      //pour tester le mail
{
    var filtre = /[@]{1}/;
    var mail = document.getElementById("email").value;
    var result = filtre.test(mail);
    if(!filtre.test(mail))
        alert("Email non valide, comprenant au moins '@'");
    filtre.lastIndex;
}
----------------------
function    ad()
{
    var ch = document.getElementById("selection").value;

    if (ch != "choix")
        document.getElementById("arEa").innerHTML = ch;
}
*/