let hra = true;

while(hra){
let cislo = Math.floor((Math.random() * 50) + 1); 
let podminka = true;
let pocitadlo = 0;

while(podminka){
    let hadaneCislo = window.prompt("Zadej mi čislo",0);
    if(hadaneCislo == cislo){
        podminka = false
        console.log("Uhádl jsi číslo!")
    } else if (hadaneCislo < cislo) {
        console.log(`Tvé hadané číslo ${hadaneCislo} je menší, než čislo, co musíš uhádnout`);
    } else {
        console.log(`Tvé hadané číslo ${hadaneCislo} je větší, než čislo, co musíš uhádnout`);
    }
    pocitadlo++;
    console.log(`Hádal jsi po ${pocitadlo}`);
    if(pocitadlo == 5){
        podminka = false;
        console.log(`Došli ti pokusy! Číslo, co si měl uhádnout bylo ${cislo}`);
    }
}

pocitadlo = 0;

let potvrzeni = window.confirm("Chceš hrát znovu?");
if(potvrzeni == false)
{
    hra = false;
}
}