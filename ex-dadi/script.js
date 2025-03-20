// dichiaro prima variabile dado
let dadoUser = Math.floor(Math.random() * 6) + 1;

// mostro il primo numero
console.log(dadoUser);

// dichiaro la seconda variabile dado
let dadoCom = Math.floor(Math.random() * 6) + 1;

// mostro il secondo numero
console.log(dadoCom);

// if per comparare i due risultati e realtivo messaggio in console
if (dadoUser > dadoCom){
    console.log('Hai vinto!');
}
else if(dadoUser == dadoCom){
    console.log('Pareggio!')
}
else{
    console.log('Hai perso...')
}