//Funkce pro výpis na stránku!
document.write("Hello world!");
document.write(5+5);
document.write("<p>Tohle je odstavec!</p>")

//Funkce pro vyskakovací okno se zprávou!
window.alert("Ahoj!");

//Funkce pro vyskovací okno se vstupem od uživatele!
let jmeno = window.prompt("Napiš mi své jméno","Jméno");
document.write(`<h1>Ahoj ${jmeno} </h1>`);

let x = window.prompt("Napiš mi číslo X:",0);
let y = window.prompt("Napiš mi číslo Y:",0);
document.write(`<p> číslo x je ${x} a čislo y je ${y}</p>`);

//Funkce pro získání potvrzení od uživatele
let potvrzeni = window.confirm("Potvrdíš mi další úkon?");

if(potvrzeni){
    document.write("Potrvzeno!");
} else {
    document.write("Zakázáno!")
}