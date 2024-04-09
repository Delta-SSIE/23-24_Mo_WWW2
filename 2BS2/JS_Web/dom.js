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