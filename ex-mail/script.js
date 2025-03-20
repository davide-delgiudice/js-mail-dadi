// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

// Creare un array con all'interno diverse mail già esistente
// Creare una variabile di controllo
// Creare un ciclo for con cui controllare le mail presenti
// Creare un comando prompt con cui chiedere la mail ad un nuovo utente
// Creare un if per verificare la condizione vero o falso della presenza della mail inserita


const eMail = 
[
    'davidedelgiudice@gmail.com',
    'mariateresa@gmail.com',
    'danielefagiano@gmail.com',
    'ilariafontana@outlook.com',
    'danielerossi@outlook.com',
    'micheleguerra@libero.it',
    'giulianosangiorgi@gmail.com',
    'andreasparta@outlook.com'
];

console.log(eMail);

let presenzaMail = false;

for (i=0; i<=eMail.length; i++){

    let nuovaMail = prompt('Inserisci la tue e-mail');
    
    if (nuovaMail == i){
        console.log(presenzaMail=true);
    }
}

