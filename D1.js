/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* i datatype sono quei dati che inseriamo all'interno di una variabile. i principali dati sono
 stringa, numeri, valorei booleani (cioè vero o falso). mettiamo che tu hai una grande scatola vuota (chiamata variabile) al quale hai dato il nome di pippo e mettiamo 
 che all'interno di quella scatola tu voglia inserire degli oggetti differenti, appunto dei dati, in base ai dati che inserisci uscirà sullo schermo una risposta diversa,
 ad esempio dentro la scatola pippo inseriamo delle stringhe di testo. Quindi quando andremo ad aprire la scatola "pippo" all'interno troveremo soltanto ciò che ci abbiamo messo dentro
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Valerio";
console.log("questo è il mio nome:", myName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
console.log("questo è il risultato:", number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Galletti";
/*const test = "Il mio nome è";
test = "Non ricordo il mio nome";*/

// basta decommentare il codice scritto qui sopra per far uscire l'errore in console

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("La sottrazione tra la variabile x e il numero 4 è:", x - 4);
// non ho dichiarato nessuna variabile poichè non mi è stato richiesto ma qualora volessi farlo potrei dichiarare una variabile dargli il valore 4 ed eseguire la stessa operazione

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log("adesso verifico l'uguaglianza fra i due nomi:", name1 === name2);
let lowerCaseName2 = name2.toLowerCase();
console.log(
  "dopo aver effettuato la modifica sulla stringa il risultato della comparazione apparirà così:",
  name1 === lowerCaseName2
);
// console.log('Questa è la visualizzaione del nome prima della modifica:', name2)
// console.log('Questa è la visualizzaione del nome prima della modifica:', lowerCase);
/* SCRIVI QUI LA TUA RISPOSTA */
