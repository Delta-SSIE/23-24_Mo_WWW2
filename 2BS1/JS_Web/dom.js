//Výběr prvku z HTML pomocí id
let nazev = document.getElementById('nadpis');
console.log(nazev);
//Přidání do prvku vnitřní HTML (neboli se to vepíše do daného tagu)
nazev.innerHTML = "Tohle je lepší nadpis";

//Výběr prvků pomocí tagu, vyberou se všechny tagy a vloží do kolekce
let odstavec = document.getElementsByTagName('p');
console.log(odstavec);
//Přidání stylu daným prvkům v kolekci. 
odstavec[0].style = "color: red";
odstavec[1].style.backgroundColor = "blue";

//Výběr pomocí třídy 
let p = document.getElementsByClassName('odsta');
console.log(p);
//Přidání třídy danému prvku
p[1].className = "modra";

//Query selektor, který vybírá první prvek z třídy "odsta"
let odstav = document.querySelector('.odsta')
console.log(odstav);

//Query selektor, který vybírá všechny prvky z třídy odsta
let odstavce = document.querySelectorAll('.odsta')
console.log(odstavce);

//Výběr obrázku pomocí query selektoru
let obrazek = document.querySelector('img');
//Změna zdroje obrázku
obrazek.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%D0%90pple_.png/220px-%D0%90pple_.png";

//Výběr body HTML stránky a manipulace s ní
let teloStranky = document.body;
teloStranky.style.fontFamily = "Arial";

//Přidání odstavce pomocí innerHTML
let obalka = document.getElementById('box');
obalka.innerHTML += "<p> 1. odstavec<p> ";
obalka.innerHTML += "<p> 2. odstavec<p> ";

for(let i = 3; i < 10;i++){
    obalka.innerHTML += `<p> ${i}. odstavec<p> `;
}


let box = document.getElementById('box2');
//vytvoření nového elementu img a zadaní jeho atributů
let newImg = document.createElement('img');
newImg.src = "https://www.delta-skola.cz/static/delta/img/logo.png";
//Připojení prvku newImg jako prvku podřazeného rodičovského prvku box;
box.appendChild(newImg);
//Vytvooření nového elementu p
let newPar = document.createElement('p');
newPar.innerHTML = "Ahoooj!";
//přidání prvku newPar pod nadřazený prvek box
box.appendChild(newPar);

//Vytvoření textového prvku, který se přiřadí jako děstký prvek k prvku odstavce
let text = document.createTextNode("čus");
newPar.appendChild(text);
box.appendChild(newPar);
