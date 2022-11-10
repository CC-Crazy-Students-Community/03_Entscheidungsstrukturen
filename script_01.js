"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;               // is oder has Variablen werden immer als geschlossene Frage gestellt: ist John älter? also nur ja oder nein / true / false

// Test | Logische Aussage
isJohnOlder = ( ageJohn > ageMark );          // logische Operatroen, Vergleichsoperatoren wie ist größer
isJohnEqual = ( ageJohn == ageMark );         // logische Operatroen, Vergleichsoperatoren wie ist exact gleich

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/**********   if    **********/
if ( isJohnOlder ) {                            // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
    console.log( "John ist älter" );            
}

/**********   if else    **********/
if ( isJohnOlder ) {                            // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
    console.log( "John ist älter" );            // Ja Zweig, wenn das if Condition erreicht ist, dann kommt das zum Tragen
} else {                                        // logische Abfrage DANN
    console.log( "John ist jünger" );           // Sonst Zweig, wenn erste Abfrage nicht erreicht, dann kommt das else zum Tragen
}


/* Ternäre Schreibweise eines if else Statements*/
console.log( (isJohnOlder) ? "John ist älter" : "John ist jünger" );

/**********   if elseif else    **********/
if ( isJohnOlder ) {                            // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
    console.log( "John ist älter" );            // Ja Zweig, wenn das if Condition erreicht ist, dann kommt das zum Tragen
} else if ( isJohnEqual ) {                     // logische zusätzliche Abfragen sind True oder Fasle, es können so viele wie benötigt gestellt werden
    console.log( "John ist gleich alt" );       // Ja Zweig, wenn das if Condition erreicht ist, dann kommt das zum Tragen
} else {                                        // logische Abfrage DANN
    console.log( "John ist jünger" );           // Sonst Zweig, wenn erste Abfrage nicht erreicht, dann kommt das else zum Tragen
}
