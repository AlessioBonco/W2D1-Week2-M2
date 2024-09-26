//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il piÃ¹ grande tra due numeri interi.
*/

    let numero1 = 11 ;
    let numero2 = 13 ;
    if (numero1>numero2) {
        console.log (numero1 +" è più grande");
    }
    else if (numero1<numero2) {
        console.log ( numero2 +" è piu grande");
    }
    else  {
        console.log ("i numeri sono uguali") 
    }

//////PER ESERCITARMI//////
function funzione () {
let numeroPrimo = parseInt (document.getElementById ("PrimoInput").value) ;
let numeroSecondo = parseInt (document.getElementById ("SecondoInput").value) ;
let DivVuoto = document.getElementById ("DivVuoto");
let risultato; 

if (numeroPrimo>numeroSecondo) {
     risultato = numeroPrimo ;
}
else if (numeroPrimo<numeroSecondo){
 risultato =  numeroSecondo;
}
else {
 risultato =  "i numeri sono guali"
}
let paragrafo = "<h1> il numero più grande è :" + risultato + "</h1>" ;

DivVuoto.innerHTML = paragrafo ;
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

    let num = 11 ;
    if ( num < 5) {
        console.log ("TINY")
    }
    else if (num > 5 && num <10) {
        console.log ("Small")
    }
    else if (num > 10  && num <15) {
        console.log ("Medium")
    }
    else if (num >15 && num<20){
        console.log ("Large")
    }
    else {
        console.log ("Huge")
    }

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (i = 0 ; i <11 ; i++){
    if ( i== 3 || i == 8){
        continue;
    }
    console.log (i)
}

///per me///
   function funzione2 () {
    let contenitore = document.getElementById ("contenitore");
    for (i = 0 ; i <11 ; i++){
        if ( i== 3 || i == 8){
            continue;
        }
        else {
            let lista = document.createElement ("li")
            lista.textContent= i
            contenitore.appendChild (lista)
        }

    }
   }



/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for (i=0 ; i<=15 ; i++) {
    if(i % 2 === 0) {
        console.log (i + "è pari")
    }
else {
    console.log (i +  "è dispari")
}
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1extra = 1
let numero2extra = 8
if (numero1extra === 8) {
    console.log ("il valore del primo numero è 8")
}
else if (numero2extra === 8) {
    console.log ("il valore del secondo numero è 8")
}
else if (numero1extra+numero2extra ===8 ){
    console.log ("sommando i due numeri abbiamo come risultato 8")
}
else if (numero1extra-numero2extra===8 || numero2extra-numero1extra ===8){
    console.log ("sottraendo i due numeri abbiamo come risultato 8")

}
else {
    console.log ("niente è uguale a 8")
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'Ã¨ una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 70
if (totalShoppingCart > 50){
    console.log ("l'ammontare della spesa è "  +  totalShoppingCart)
}
else { totalShoppingCart = totalShoppingCart+10
    console.log ("l'ammontare della spesa è "  + totalShoppingCart)
}

/* ESERCIZIO EXTRA 3
  Oggi Ã¨ il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let sconto = 0.20 
totalShoppingCart = totalShoppingCart-(totalShoppingCart*sconto)
if (totalShoppingCart>50){
    console.log (
    "l'ammontare con lo sconto sarà " + totalShoppingCart)
    }


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/////per questo esercizio ho dovuto guardare la soluzione ma lo tengo comuqnue qua mi sarà utile in futuro///
let gender
let isMale = true
if (isMale) {
  gender = "male"
} else gender = "female"

isMale ? (gender = "male") : (gender = "female")

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (i=1 ; i<=100 ; i++) {
 let risultato = i 
 let diviso3 = i % 3 === 0
 let diviso5 = i % 5 === 0

 if (diviso3 && diviso5 ){
    console.log ("fizzbuzz")
 }
 else if (diviso3){
    console.log ("fizz")
 }
 else if (diviso5){
    console.log ("buzz")
 }
else {
    console.log (i)
}
}


