//Zaměření prvku na HTML stránce, pomocí id daného prvku
let nadpis = document.getElementById('h');
console.log(nadpis);
nadpis.innerHTML = "Tohle je lepší nadpis";

//Zaměření prvku na stránce pomocí tagu, kdy se všechny prvky daného tagu dají do kolekce.
let odstavce = document.getElementsByTagName('p');
console.log(odstavce);
odstavce[0].innerHTML = "Tohle je lepší text odstavce!";

//Zaměření prvku na stránce pomocí classy, kdy se všechny prvky dané classy dají do kolekce.
let odstTrid = document.getElementsByClassName('par');
console.log(odstTrid);
odstTrid[1].innerHTML = "Tohle je změnra textu u odstvce třídy par!";

//Zaměření prvku na stránce pomocí query selektoru, rozdíl mezi selector (první prvek) a selectorAll (kolekce)
let selektor1 = document.querySelector('section p');
console.log(selektor1);
let selektor2 = document.querySelectorAll('section p');
console.log(selektor2);

//Manipulace s atributy v uzlu DOM
let obrazek = document.querySelector('img');
obrazek.src = "https://d15-a.sdn.cz/d_15/c_img_F_E/6blBqh3.jpeg?fl=cro,0,0,798,450%7Cres,1200,,1%7Cjpg,80,,1";
selektor1.style = "color: red";
selektor1.style.color = "green";

//Manpulace s stylem
let telo = document.body;
telo.style.backgroundColor = "yellow";

//innerHTML
selektor1.innerHTML = "Tohle je nový text odstavce!";
selektor1.innerHTML += " Tohle se připíše k odstavci!";

//Přidávání prvků na stránku pomocí innerHTML
let box = document.getElementById('box');
box.innerHTML = "<p> 1. Odstavec </p>";
//přidávání hodnot pomocí innerHTML
box.innerHTML += "<p> 2. Odstavec </p>";

for(i = 3; i < 14; i++){
    box.innerHTML += `<p> ${i}. Odstavec </p>`;
}

//Vytváření nových prvků pomocí navěšování prvků na prvky rodičovské
let obalka = document.getElementById('obalka');
//vytvořený nový objekt
let div = document.createElement('div');
//připadané atributy k divu
div.style.width = '100px';
div.style.height = '100px';
div.style.border = '1px solid black';
//navěšení nového objektu na obalku
obalka.appendChild(div);

let text = document.createTextNode('Ahooooj');
let par = document.createElement('p');
par.appendChild(text);
obalka.appendChild(par);
