let hra = true;
while(hra){


let cislo = Math.floor((Math.random()*50)+1);
let podminka = true;

while(podminka)
{
    let tip = window.prompt("Zadeji mi svůj tip!",0);
    if(tip == cislo){
        console.log(`Dobrá práce, čislo je ${cislo}`);
        podminka = false;
    } else if(tip > cislo){
        console.log('Méně!');
    } else {
        console.log('Víc!');
    }
}

let opakovani = window.confirm("Chceš to zopakovat?");
if(opakovani != true) {
    hra = false;
}
}