// fichier Contact exo js17_lesformulaires.js



//societe.length=1;
//console.log(soc);
//console.log(societe.length);
var societe= document.getElementById("societe");
var formValid = document.getElementById("boutondenvoi");
var contactabsent = document.getElementById("contactabsent");
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var choice = document.getElementById("selection").value;

/*
function "verif();"






------------------------
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
        alert("Rensiegner un code postal valide (exemple : 75000)"//);
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
    var choice = document.getElementById("selection").value;

    if (choice != "choix")
        document.getElementById("textarea").innerHTML = choice;
}
*/