//funkce pro psaní na web
document.write("<p>Hello World</p>");
document.write(5+6);
document.write("<strong>Ahoj</strong>");

//funkce pro vyskakovací okno
window.alert("Ahoj!");

//funkce pro zadaní vstupu od uživatele skrze vyskakovací okno
let vek = window.prompt("Kolik ti je let",17);
console.log(vek);
document.write(vek);

//funkce na získání true/false hodnoty od uživatele
let potvrzeni = window.confirm("Chceš pokračovat?");
if(potvrzeni){
    document.write("Ano, pokračujeme!");
} else {
    document.write("Ne, nepokračujeme!")
}

