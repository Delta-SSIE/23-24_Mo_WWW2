let nazev = document.getElementById('nadpis');
console.log(nazev);

let odstavec = document.getElementsByTagName('p');
console.log(odstavec);

let p = document.getElementsByClassName('odsta');
console.log(p);

let firstHobby = document.querySelector('ul li.hobby');
let againAlsoHobbies = document.querySelectorAll('ul li.hobby');

console.log(firstHobby);
console.log(againAlsoHobbies[1]);