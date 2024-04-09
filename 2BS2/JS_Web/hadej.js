let hra = true;
while(hra){
//Vygeneruje to číslo od 1 do 50!
let cislo = Math.floor((Math.random() * 50) + 1);
let podminka = true;
let pokus = 0;
while(podminka)
{
    pokus++;
    console.log(`Tohle je tvůj ${pokus}.pokus`);
    let tip = window.prompt("Zadej svůj tip",0);
    if(tip == cislo) {
        console.log('Uhádl jsi to! Čislo je ' + cislo);
        podminka = false;
    } else if(tip > cislo) {
        console.log("Moc!");
    } else {
        console.log('Málo!');
    }

    if(pokus == 5){
        podminka = false;
        console.log("Prohrál jsi!")
    }
}

let potvrzeni = window.confirm('Chceš hrát znova?')
if(potvrzeni != true){
    hra = false;
}
}