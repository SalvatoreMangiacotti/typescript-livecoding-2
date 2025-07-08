// Union Types

// Un Union Type permette a una variabile di aver più di un tipo.
// Si usa | per definire un'unione di tipi.

let valore: string | number;
valore = "Test";
valore = 42;
// valore = true; => Errore: boolean non è stato definito.

console.log(valore)

// Si usa solo quando è necessario.



// Literal Types

// Invece di usare tipi generici(string, number, boolean), 
// possiamo specificare valori precisi che una variabile può assumere.

let ruolo: "admin" | "user" = "admin";
// ruolo = "superuser" // Errore!

// let ruoloUser: "admin"; // Dichiarare un Literal Type con un solo valore è inutile!
const ruoloUserDue = "admin"; // Piuttosto utilizziamo const

console.log(ruolo, ruoloUserDue);



// Dati sconosciuti

// unknown type, come any, ma con più sicurezza

let dati: unknown;
dati = "Ciao";
dati = 42;
dati = true;

console.log(dati)

// Non è come any.
// unknown obbliga a verificare il tipo prima di usarlo!



// Type Narrowing

// Dobbiamo restringere il tipo di unknown con typeof!

// const response = await fetch('https://dummyjson.com/test');
// const valoreDue: unknown = await response.json();

// if (typeof valoreDue === "number") {
//   const risultato = valoreDue + 10;
//   console.log("Risultato:", risultato);
// } else {
//   console.log("Il valore non è un numero!");
// }



// Live coding

// Array Tuple

// In typescript posso specificare il tipo di elementi che un array puo contenere

const numeri: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parole: string[] = ["ciao", "hello", "hola"];

console.log(numeri, parole)

// Tuple

// Le tuple sono array con una lunghezza fissa e tipi predefiniti per ogni posizione

const coordinate: [number, number] = [10, 20];
const datiPersonali: [string, number] = ["Clara", 30]

console.log(coordinate, datiPersonali)

// Questo tipo di array può essere modificato con metodi come .push

datiPersonali.push("Developer");

// Per evitare che l'array venga modificato, possiamo aggiungere la parola chiave readonly

const datiPersonaliDue: readonly [string, number] = ["Clara", 30]

console.log(datiPersonaliDue)

// Se si vuole creare un array, che magari subirà cambiamenti futuri, possiamo dichiararlo con let
// per poi riassegnarli un valore in caso di necessità

let arrayDiInformazioni: readonly [string, number] = ["Tigre", 100];

arrayDiInformazioni = ["Zebra", 200];

console.log(arrayDiInformazioni)

// Tuple con Rest Parameters

// Possiamo usare il rest parameter (...) per permettere più elementi opzionali dello stesso tipo.

const percorsoImmagine: [string, ...string[]] = ["C:", "Users", "User", "Documents", "monte-fuji.img"]

console.log(percorsoImmagine);



// Type Alias

// Il Type Alias è ciò che permette di dare un nome a una struttura di dati e riutilizzarla più volte.

type Utente = {
    nome: string;
    eta: number;
    hobby: string[];
    indirizzo: { via: string; citta: string };
    contatti: { email: string; telefono?: string }
}

const utenteUno: Utente = {
    nome: "Anna",
    eta: 25,
    hobby: ["Lettura", "Yoga"],
    indirizzo: { via: "Via Verdi, 15", citta: "Roma" },
    contatti: { email: "anna@email.com", telefono: "12345678910" }
}

console.log(utenteUno);


type UtenteDue = {
    nome: string;
    eta: number;
    email: string;
}

type Dipendente = UtenteDue & {
    ruolo: string;
    stipendio: number;
}

const user: UtenteDue = {
    nome: "Anna",
    eta: 25,
    email: "anna@email.com"
}

const worker: Dipendente = {
    nome: "Marco",
    eta: 30,
    email: "marco@email.com",
    ruolo: "Developer",
    stipendio: 3000
}

console.log(user, worker)



type User = {
    id: number;
    nome: string;
    email: string;
}

const utenti: User[] = [
    { id: 1, nome: "Alice", email: "alice@email.com" },
    { id: 2, nome: "Luca", email: "luca@email.com" },
    { id: 3, nome: "Giulia", email: "giulia@email.com" },
    { id: 4, nome: "Marco", email: "marco@email.com" },
    { id: 5, nome: "Sara", email: "sara@email.com" }
]

console.log(utenti)

// Import & Export dei tipi

// // types.ts
// export type Utente = {
//     id: number;
//     nome: string;
//     email: string;
// }


// // main.ts
// import { Utente } from "./types";

// const user: Utente = {
//     nome: "Anna",
//     eta: 25,
//     email: "anna@email.com"
// }
