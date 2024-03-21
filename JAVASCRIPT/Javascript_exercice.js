// fichier script.js

/*
// Test         partie 3    afficher texte
alert("Hello 1'AFPA!");

var nom = "Triomphe";
var aide = "En quoi puis-je t'aider?";
window.alert("Bonjour");
window.alert(nom);
window.alert(aide);

var tutu = prompt("Saisissez la longueur");
var toto = prompt("Saisissez la largeur");

console.log("la longueur est de :" + tutu + " mètres");
console.log("la largeur est de :" + toto + " mètres");


-------------------------------------
/*
// Exercices    partie 3        afficher texte
var nom, prenom;

nom = prompt("Saisissez votre nom");
prenom = prompt ("Saisissez votre prénom");

alert(nom + " " + prenom);


var nb1, nb2;
nb1 = prompt("Entrez un 1er nombre");
nb2 = prompt("Entrez un 2è nombre");
console.log(nb1*nb2);


--------------------------------------------
// Exercices        partie 3 afficher texte convertir température 
let c,f;
c = prompt("Saisissez la température en ° Celcius");
f = ((c*(9/5)) + 32)
alert ("La température en ° Fahrenheit est " + f);



 // Exercices partie 3 afficher texte convertir température !!! Autre méthode !!!
var temperatureenCaconvertir = prompt("Entrez la température en Celsius")
console.log(temperatureenCaconvertir*9/5+32)

-----------------------------------
/*
//      Exercice d'entrainement perso
let admin, name;
name="john";
admin=name;
alert(admin);

let planet
name="terre";
alert(name);


let monage = 42
console.log(monage)
const monprenom = "triomphe"
console.log(monprenom)



const a = 100 ;
const b = 100 ;
const c = a+b ;
console.log(c);

---------------------


let a;
a = 220;
a = a + a ;


--------------------------
let d = 200
d = d + 10
console.log(d);

let e= 200
e += 10      ===    e = e + 10
e -= 10      ===    e = e - 10
e *= 10      ===    e = e * 10
e ++         ===    e + 1
e --         ===    e - 1
console.log(e)

---------------------------------------------
/*
//La concaténation   openclassroom TD
let premierePartie = "Mon nom est Bond"
let deuxiemePartie = ", James Bond."
let punchline = premierePartie + deuxiemePartie
console.log(punchline)
// punchline vaut “Mon nom est Bond, James Bond.”


-----------------------------------------------

/*
// Les opérateurs OPenclassroom TD
let totallivres = 500;
totallivres += 50;
totallivres -= 10;
totallivres+=5;
console.log(totallivres)

let affichagetotallivres = "Notre bibliothèque possède "
affichagetotallivres += totallivres
affichagetotallivres += " livres."
console.log(affichagetotallivres)

----------------------------------------------
/*
//Exercices             /partie 4 Les opérateurs
let a, b, c, d;
a ="100";  //une chaîne de caractères est entre doubles quotes
b = 100
c = 1.00
d = true

let b = a-- ; //sans les quotes c'est un nombre
c += a;
d = faux;
console.log(d)
*/

//-----------------------------------------------------

/*
let a, b, c, d;
a = "100";  //une chaîne de caractères est entre doubles quotes
b = 100
c = 1.00
d = true

//let b = a-- ; //sans les quotes c'est un nombre
//c += a;
//d = faux;
console.log("Ceci est une chaîne de caractères : " + a)
console.log("Valeur de b : " + b)
b--
console.log("on applique -- à b : " + b)


console.log("Valeur de c : " + c)
c+=a // c = c + a
console.log("on applique +=a à c : " + c)


console.log("Valeur de d : " + d)
d = !(d)
console.log("on inverse d : " + d)

----------------------------------------------
// Quelques explications  

a=prompt("entrez un chiffre")

// if (!(a === b))   console.log(age)===   if (a != b)    != correspond à "différent" ou l'inverse d'une variable

if (a == 5)      console.log(age) 
{
    alert("gagné ^_^ !!!!")
}
else{
    alert("perdu :( !!! ")
}

------------------------------------------
// Mémo: === correspond à "strictement égal"    == correspond à "à peu près égal" 
----------------------------------------------
// Exercices        partie 5 Les conditions

if (condition) {
    // Code exécuté si la condition est vraie
} else {
    // Code exécuté si la condition est fausse
}

-----------------------
/* QUELQUES TESTS       / PARTIE 5 LES CONDITIONS

t = prompt("entrez votre temperature")

if (t > 38)
{
    alert ("Le patient a de la fievre")
}

//---------------------------
if (réponse == "oui")
console.log ("Bonne reponse!");
*/

/*
permis = oui
age = prompt ("entrez votre age")
permis = prompt ("Avez vous le permis?")
if (age > 18) 
//2ème condition
if (permis == "oui")
{
    alert ("vous pouvez passer votre examen de permis de conduire")
}
*/

/*-----------------------------------------------
// Exercice 1 PARITÉ/       partie 5 "conditions"

let nbr;
nb = prompt ("entrez un nombre")
if(nbr%2 == 0)
{
    alert("Nombre pair");
}
else
{
    alert("Nombre impair");
}

*/
/*
------------------------------------------------
// Exercice 2 Age/      partie 5 "conditions"

let annee;
annee= prompt ("entrez votre année de naissance")
console.log(annee)
age=2024
if (2024-annee>=18)
{
    alert ("vous êtes majeur")
}
else{
    alert ("vous êtes mineur")
}
console.log(2024-annee)
*/
//----------------------------------------------------

/* Exercice 3 Calculette/       partie 5 "conditions"

let nb1, nb2, op, op1, op2, op3, op4;
nb1 = prompt ("entrez un premier nombre entier")
nb2 = prompt ("entrez un deuxième nombre entier")
op = prompt ("entrez un opérateur +, -, * ou /")
op1 = "+ "
op2 = "-"
op3 = "*"
op4 = "/"
switch (op =)
{

case"+";
case "-";
case"*"
case "/"
default:
    console.log("op"+"op": "message d'erreur");
}

----------------------------------
/*
if (op!=op1)
{
    alert("message d'erreur")
}
else if (op!=op2)
{
    alert ("message d'erreur")

}
/*if (! (op === op1) (op===op2)  (op===op3) (op===op4) )  
{
alert("message d'erreur")
}
-------------------------------------------------------*/

// TEST2 /           partie 6 "Les boucles"

/*
i =5
console.log (5+" * 0");

console.log("Table de multiplication par 5");
console.log("=============================");

for (i=0; i<=10; i++)
{
    resultat = 5 * i;

    console.log("5 * "+i+" = "+resultat);
}
console.log("fin de la boucle");

---------------------------------------------------------

// TEST3 /      partie 6 "Les boucles"              FOR

console.log("Table de multiplication par 5");
console.log("=============================");

for (i=0; i<=10; i++)
{
    resultat = 5 * i;

    console.log("5 * "+i+" = "+resultat);
}
// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");

---------------------------------------------------------

// TEST4 /          partie 6 "Les boucles"    WHILE
var i = 0;

console.log("Table de multiplication par 5");
console.log("=============================");

while (i <= 10) 
{   
    // Exécute le calcul et stocke le résultat   
    // dans une variable nommée ‘resultat’  
    resultat = 5 * i;

    // A chaque tour, on affiche le résultat courant à l’utilisateur
    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    // A chaque tour, on ajoute +1 à la variable i  
    i++; 
}
// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");
--------------------------------------------------------------
// Dans cet exemple, i=1
i = 1;

while (i <= 10)
{
    // Instructions :
    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    // Actualisation :
    i++;
}
--------------------------------------------------------------
i = 1;

while (i <= 10)
{
    // Instructions :
    console.log("Le résultat de 5 x "+i+" est : "+resultat);

    // Actualisation :
    i++;
}
-------------------------------------------------------
// EXERCICE 1 "SAISIE"       / Partie 6 Les boucles

let prenom =[];
for (let i = 1; i<4; i++){
    prenom [i]= prompt ("saisissez votre prénom N°"+i+" ou clic sur annuler pour arrêter la saisie");
if (prenom[i] == ""){
    break
}
console.log("prenom");
}
alert ("Les prenoms sont " + prenom +"." +prenom.length);

-------------------------------------------------------

// EXERCICE 2 "Entiers inférieurs à N"    / Partie 6 Les boucles
var n;
n = prompt ("saisir un nombre");
while (n>0)
  {
    n--;
    console.log(n)
  }

-------------------------------------------------------*/
/*
// EXERCICE 3 "Moyenne"         / Partie 6 Les boucles

var n = 1;
var somme = 0;
var i = 0;


while (n>0) {
  n = parseInt(prompt ("saisir un nombre"));
  somme += n;
  i++;
}

console.log(somme);
console.log(somme/i);
//-----------------------------------------------------
/*
// EXERCICE 4 "Multiples"          / Partie 6 Les boucles
var n,  x
n = prompt ("entrez un premier nombre")
x= prompt ("entrez un second nombre")



for (i=1; i<=n; i++)
{
    console.log(i+"x"+x+"="+(x*i));
}
console.log ("fin de la boucle");
-------------------------------------------------------

// EXERCICE 5 "Nombre de voyelles"    / Partie 6 Les boucles

var m, nombrevoyelle, compteur
m=prompt ("saisir un mot")
nombrevoyelle = "m"
compteur = nombrevoyelle++

-----------------------------------------------------------
//      TEST            PARTIE 7 LES FONCTIONS
function maFonction() 
    {
     var plop1 = 123;       
       return plop1;
    }

    function maFonction2() 
    {
       plop2 = 456;     
    }

    plop1 = maFonction();

    console.log("fonction 1 / plop1 : "+plop1);

    maFonction2();

    console.log("mafonction2 > plop2 : "+plop2);

--------------------------------------------------------------
// EXERCICE 1          / PARTIE 7 LES FONCTIONS   
    //Question 1 produit  
function produit(x,y)
{
    return x*y;
}

console.log(produit(6, 7))
        //Question 2 affiche img "Voir fichier td2fonctions.html pour tester avec l'image"

-----------------------------------------------------------------
// EXERCICE 2      STRING TOKEN   / PARTIE 7 LES FONCTIONS 

    //Première proposition
function strtok(str1, str2, n){
  return str1.split(str2)[n-1]
}

var a="1wdfgjhbdfhstlshgls";    //on a un ensemble de caractères avec un séparateur qui est le h
strtok(a,"h", 2)    //le h entre guillement est le séparateur

    //Deuxième proposition
function bonjour(prenom) {
  return "Bonjour, " + prenom;
}
    //Troisième proposition
function strtok(str1, str2, n){
    return str1.split(str2)[n-1]
      }
      
var a="robert;dupont;amiens;80000";
      strtok(a,";", 2)
-------------------------------------------------------------------*/
//      TEST            PARTIE 8 LES TABLEAUX
