// dichiaro la prima variabile dado per l'utente
let dadoUser = parseInt(prompt('Inserisci un valore da 1 a 6'));

if (dadoUser > 6){
    alert('Inserisci un valore corretto');
        dadoUser = parseInt(prompt('Inserisci un valore da 1 a 6'));
}

// mostro il primo numero
console.log(dadoUser);

// dichiaro la seconda variabile dado randomica per il computer
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