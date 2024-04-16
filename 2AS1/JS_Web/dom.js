//Zaměření dle Id
let h = document.getElementById('n1');
console.log(h);

//Zaměření prvku dle tagu
let p = document.getElementsByTagName('p');
console.log(p);

//Zaměření prvku dle classy
let odstavec = document.getElementsByClassName('trida1');
console.log(odstavec)

//Vybere první prvek odpovídající parametrům
let odst_main = document.querySelector('main p');
console.log(odst_main);

//Vybere všechny prvky odpovídající parametrům
let odstavce_main = document.querySelectorAll('main p');
console.log(odstavce_main);

//Jeden prvek z querySelectorAll
let prvni_odstavec = odstavce_main[0];
console.log(prvni_odstavec);

//Manipulace s nastavením HTML prvků
prvni_odstavec.style = "color: red";
h.style = "background-color: red"


let img = document.getElementById('jabko');
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%D0%90pple_.png/220px-%D0%90pple_.png";

//Změna stylu
let teloStranky = document.getElementById('telo');
teloStranky.style.color = "white";
teloStranky.style.backgroundColor = "black";

//Připisování do HTML
teloStranky.innerHTML += "<p>Tajný dovětek</p>";

//Připisování prvků na stránku pomocí innerHTML
let seznam = document.getElementById('list');
seznam.innerHTML = "<li> 1.položka </li>";
seznam.innerHTML += "<li> 2.položka </li>";
for(i = 3; i < 13;i++){
    seznam.innerHTML += `<li> ${i}.položka </li>`; 
}

//Tvorba nových elementů a jejich přidávání na rodičovské prvky

//Rodičovský prvek div
let obalka = document.getElementById('obalka');

//Tvorba prvku img
let newImg = document.createElement('img');
newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s";
//vložení prvku na rodičovský prvek
obalka.appendChild(newImg);

//Tvorba prvku p
let newPar = document.createElement('p');
//Node pro tvorbu textu
let text = document.createTextNode('Tohle je obrázek!');
newPar.appendChild(text);
obalka.appendChild(newPar);