//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let primoNum = 29;
let secondoNum = 37;

if (primoNum > secondoNum) {
  console.log("Il primo numero è maggiore")
} else {
  console.log("Il secondo numero è maggiore")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let taglia = 25;

if (taglia<5) {
  console.log("Tiny")
} else if (taglia>=5 && taglia<10) {
  console.log("Small")
} else if (taglia>=10 && taglia<15) {
  console.log("Medium")
} else if (taglia>=15 && taglia<20) {
  console.log("Large")
} else {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let varNum=0; varNum<=10; varNum++){
  if ((varNum==3)||(varNum==8)) continue;
  console.log(varNum)
  }
  

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let x=0;

while(x<=15){
  x++;
  if(x%2==0) {console.log(x + ': questo numero è pari')
} else {console.log(x + ': questo numero è dispari')}
}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*Non sono sicura di aver compreso bene la richiesta, ma questo è ciò che ho fatto*/

let varA=9;
let varB=1;

if ((varA==8)||(varB==8)){
  console.log('Uno dei due numeri inseriti è uguale a 8')
} else if (varA-varB==8){
  console.log('La sottrazione dei due numeri è uguale a 8')
} else if (varA+varB==8){
  console.log('La somma dei due numeri è uguale a 8')
} else {
  console.log('In nessun caso appare il numero 8')
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 52;

if (totalShoppingCart>50){
  console.log('Spedizione gratuita! Il totale da pagare è di: ' + totalShoppingCart + ' euro')
} else { console.log('La spedizione costa 10€. Il totale da pagare è di: ' + (totalShoppingCart+10) + ' euro')
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = (totalShoppingCart-(totalShoppingCart*20/100));
if (totalShoppingCart>50){
  console.log('Spedizione gratuita! Il totale da pagare è di: ' + totalShoppingCart + ' euro')
} else { console.log('La spedizione costa 10€. Il totale da pagare è di: ' + (totalShoppingCart+10) + ' euro')
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale=false;

let gender=isMale?'male':'female'
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

let y=0;

while (y<=100){
  y++;
  if (y%3==0 && y%5==0) {
    console.log('FizzBuzz')
  } else if (y%3==0){
    console.log('Fizz')
  } else if (y%5==0) {
    console.log('Buzz')
  } else {
    console.log(y)
  }
}