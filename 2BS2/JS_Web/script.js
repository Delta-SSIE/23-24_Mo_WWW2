//Vepsání obsahu na stránku
document.write(5+5);
document.write("<h1>Hello World!</h1>");

//Pop-up win s hláškou
window.alert("Pozor! Chyba!");

//Pop-up se vstupem pro uživatele
let veta = window.prompt('Napiš mi větu a já jí vložím na web',"věta");
document.write(`<p>${veta}</p>`);

//Pop-up s potvrzením
let potvrzeni = window.confirm("Potrvď operaci!");
if(potvrzeni){
    document.write("Operace byla potvrzena!");
} else {
    document.write("Operace nebyla potvrzena!")
}

//innerHTML
document.getElementById('p1').innerHTML = "Toto je text, který se objeví v odstavci s id p1!";
document.getElementById('p1').innerHTML += "Toto je další přípis k odstavci p1!";