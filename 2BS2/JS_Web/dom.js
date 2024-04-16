//Zaměření elementu pomocí id
let nadpis1 = document.getElementById('h1');
console.log(nadpis1);
nadpis1.innerHTML = "Tohle je lepší nadpis!";

//Zaměření elementů pomocí tagu
let odstavce = document.getElementsByTagName('p')
console.log(odstavce);
odstavce[0].innerHTML = "Tohle je lepší text odstavce!";

//Zaměření elementů pomocí classy
let superTrida = document.getElementsByClassName('superTrida');
console.log(superTrida);
superTrida[0].style = "background-color: red";

//Query selektory
let selekce1 = document.querySelector('main p');
console.log(selekce1);
let selekce2 = document.querySelectorAll('main p');
console.log(selekce2);
selekce2[1].style = "color: red";

//Manipulace s atributy DOM uzlů
let obrazek = document.querySelector('img');
obrazek.src = "https://d15-a.sdn.cz/d_15/c_img_F_E/6blBqh3.jpeg?fl=cro,0,0,798,450%7Cres,1200,,1%7Cjpg,80,,1"

//Manipulace s stylem u DOM uzlů
let teloStranky = document.body;
teloStranky.style.color = "white";
teloStranky.style.backgroundColor = "Brown";

//Přidání odstavců (a jiný html tagů) pomocí innerHTML
let box = document.getElementById('box');
box.innerHTML = "<p>1. odstavec</p>";
//přidání prvku pomocí innerHTML
box.innerHTML += "<p>2. odstavec</p>";
for(i = 3; i < 13; i++){
    box.innerHTML += `<p>${i}. odstavec</p>`;
}

//Práce s rodičovskými prvky a jejich podřadnými prvky
let obalka = document.getElementById('obalka');
let newImg = document.createElement('img');
newImg.width = 450;
newImg.height = 250;
newImg.src = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
obalka.appendChild(newImg);

let text = document.createTextNode('Ahoj, jak se máš?');
let par = document.createElement('p');
par.appendChild(text);
obalka.appendChild(par);
