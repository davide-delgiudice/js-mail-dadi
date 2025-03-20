// variabile array
const listaMail = 
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

// mostro l'array
console.log(listaMail);

// mail inserita dal nuovo utente
let nuovaMail = prompt('Inserisci la tue e-mail');

// variabile di controllo
let presenzaMail = false;

// ciclo for per controllare la presenza della mail inserita
for (let i=0; i<listaMail.length; i++){
    if (nuovaMail == listaMail[i]){
        presenzaMail = true;
    }
}

