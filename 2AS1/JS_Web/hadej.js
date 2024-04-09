
let hra = true
let money = 10;
while(hra){
//Generace náhodného čísla od 1 do 50!
let cislo = Math.floor((Math.random()*50)+1);
let podminka = true;
let pocitadlo = 0;

while(podminka)
{
    document.getElementById('penize').innerHTML = money;
    pocitadlo++;
    console.log(`Toto je tvůj ${pocitadlo}. pokus`);
    let vstup = window.prompt("Zadej svůj tip",0);
    if(vstup == cislo){
        console.log(`Uhádl jsi čislo ${cislo}!`);
        money += 4;
        podminka = false;
    } else if (vstup > cislo){
        money--;
        console.log(`Tvůj tip ${vstup} je vetší!`);
    } else {
        money--;
        console.log(`Tvůj tip ${vstup} je menší!`);
    }

    if(pocitadlo == 5){
        podminka = false;
        console.log("Došli ti pokusy!")
    }

}
pocitadlo = 0;
let potvrzeni = window.confirm("Chceš hrát dál?")
if(potvrzeni != true){
    hra = false;
}

}