//Funkce, co vepíše obsah na stránku!
document.write("Hello world!");
document.write(10+5);
document.write("<p>Tohle je odstavec</p>")


//pop-up win s hláškou
window.alert("Ahoooj");
alert("čus");

//pop-up okno s možností vstupu od uživatele
let jmeno = window.prompt("Napiš mi své jméno","jméno");
document.write(`Ahoj ${jmeno}`);

//pop-up okno s potvrzením
let pot = window.confirm("Potvrdíš mi operaci?");
if(pot){
    document.write("Operace potvrzena!")
} else {
    document.write("Operace zakázána!")
}

//práce s innerHTML
document.getElementById('odstavec').innerHTML = "Tohle je ten správný text odstavce! Žádné lorem ipsum!";