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
p[2].className = "modra";

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