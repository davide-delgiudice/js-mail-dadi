// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo farejavascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare si ma noi cosa vogliamo fare? torniamo a scrivere in italiano proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Creare due variabili che possono contenere un numero da 1 a 6, una per me e una per il computer
// Il numero deve essere randomico, come se tirassimo dei dadi
// Fare un paragone tra i due risultati per stabilire il vincitore

let dadoUser = Math.floor(Math.random() * 6) + 1;

console.log(dadoUser);

let dadoCom = Math.floor(Math.random() * 6) + 1;

console.log(dadoCom);