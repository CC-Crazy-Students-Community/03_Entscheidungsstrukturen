"use strict";


/***************************************************************/
/*********   Entscheidungsstrukturen | control flow   **********/
/***************************************************************/
/* Deklaration + Assigment */
    const ageJohn = 25;
    const ageMark = 30;

/* Deklaration */
    let isJohnOlder, isJohnEqual;                       // is oder has Variablen werden immer als geschlossene Frage gestellt: ist John älter? also nur ja oder nein / true / false

/* Test | Logische Aussage */
    isJohnOlder = ( ageJohn > ageMark );                // logische Operatroen, Vergleichsoperatoren wie ist größer
    isJohnEqual = ( ageJohn == ageMark );               // logische Operatroen, Vergleichsoperatoren wie ist exact gleich

/* Ausgabe */
    console.log("ageJohn: " + ageJohn);
    console.log("ageMark: " + ageMark);
    console.log("isJohnOlder: " + isJohnOlder);
    console.log("isJohnEqual: " + isJohnEqual);
    console.log("------------------");


/***************************************************************/
/*********            einfache if Abfrage             **********/
/***************************************************************/
    if ( isJohnOlder ) {                                // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
        console.log( "John ist älter" );                // Ja Zweig, wenn die if Condition erreicht ist, dann kommt das zum Tragen
    }


/***************************************************************/
/*********          einfache if else Abfrage          **********/
/***************************************************************/
    if ( isJohnOlder ) {                                // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
        console.log( "John ist älter" );                // Ja Zweig, wenn die if Condition erreicht ist, dann kommt das zum Tragen
    } else {                                            // logische Abfrage DANN
        console.log( "John ist jünger" );               // Sonst Zweig, wenn erste Abfrage nicht erreicht, dann kommt das else zum Tragen
    }
/* Ternäre Schreibweise eines if else Statements */
    console.log( (isJohnOlder) ? "John ist älter" : "John ist jünger" );


/***************************************************************/
/*********           if elseif else Abfrage           **********/
/***************************************************************/
    if ( isJohnOlder ) {                                // logische Abfragen sind True oder Fasle, somit geht das auch ohne Wert oder mit Wert von if ( isJohnOlder == true ) {
        console.log( "John ist älter" );                // Ja Zweig, wenn die if Condition erreicht ist, dann kommt das zum Tragen
    } else if ( isJohnEqual ) {                         // logische alternative Abfragen sind True oder Fasle, es können so viele wie benötigt gestellt werden
        console.log( "John ist gleich alt" );           // Ja Zweig, wenn die else if Condition erreicht ist, dann kommt das zum Tragen
    } else {                                            // logische Abfrage DANN
        console.log( "John ist jünger" );               // Sonst Zweig, wenn erste Abfrage nicht erreicht, dann kommt das else zum Tragen
}   
/* Ternäre Schreibweise eines if elseif else Statements */
    console.log( (isJohnOlder) ? "John ist älter" : (isJohnEqual) ? "John ist gleich alt" : "John ist jünger" );


/***************************************************************/
/*********   if elseif else Alternative switch case   **********/
/***************************************************************/
    const firstName = "Jane";
    let job;

    job = "driver";                                     // .. fährt TAXI! / UBER
    job = "diver";                                      // .. taucht im Rhein!
    job = "artist";                                     // .. malt ein Bild!
    job = "pilot";                                      // .. macht etwas anderes! --> default
    job = "teacher";                                    // .. unterrichtet!
    job = "instructor";                                 // .. unterrichtet!

switch (job) {
    case driver:
        console.log( firstName + " fährt TAXI! / UBER" ); 
        break;
    case diver:
        console.log( firstName + " taucht im Rhein!" ); 
        break;
    case artist:
        console.log( firstName + " malt ein Bild!" ); 
        break;
    case teacher:
        console.log( firstName + " unterrichtet!" ); 
        break;
    case teacher:
        console.log( firstName + " unterrichtet!" ); 
        break;
    default:
        console.log( firstName + " macht etwas anderes!" );
        break;
}


/*
    Ternäre Schreibweise erklärt:
    (let foo kann auch einfach ein console.log sein)

                Operand 1    Operand 2   Operand 3
                   |            |           |
    let foo = (Bedingung) ? wenn true : wenn false;

                Operand 1    Operand 2             Operand 3          Operand 4    Operand 5
                   |            |                     |                  |             |
    let foo = (Bedingung) ? wenn true : (wenn false - 2. Bedingung) ? wenn true : wenn false;
*/