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
let zmena = window.confirm("Chceš vidět opravdové jablko?");
if(zmena){
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%D0%90pple_.png/220px-%D0%90pple_.png";
}