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

    // job = "driver";                                     // .. fährt TAXI! / UBER
    // job = "diver";                                      // .. taucht im Rhein!
    job = "artist";                                     // .. malt ein Bild!
    // job = "pilot";                                      // .. macht etwas anderes! --> default
    // job = "teacher";                                    // .. unterrichtet!
    // job = "instructor";                                 // .. unterrichtet!

    switch (job) {                                                      // wenn variabel job...
        case "driver":                                                  // ... ist driver
            console.log( firstName + " fährt TAXI! / UBER" );               // dann Ausgabe
            break;                                                          // wenn Ausgabe fertig dann brich den switch ab
        case "diver":                                                   // ... ist diver
            console.log( firstName + " taucht im Rhein!" );                 // dann Ausgabe
            break;                                                          // wenn Ausgabe fertig dann brich den switch ab
        case "artist":                                                  // ... ist artist
            console.log( firstName + " malt ein Bild!" );                   // dann Ausgabe
            break;                                                          // wenn Ausgabe fertig dann brich den switch ab
        case "teacher":                                                 // ... ist teacher
        case "instructor":                                              // oder ist instructor
            console.log( firstName + " unterrichtet!" );                    // dann Ausgabe
            break;                                                          // wenn Ausgabe fertig dann brich den switch ab
        default:                                                        // ... nicht oder gar nicht definiert
            console.log( firstName + " strickt Boxershorts!" );             // dann Standart Ausgabe, kommt bei allen Fällen die keinen Case haben
            break;                                                          // wenn Ausgabe fertig dann brich den switch ab
    }


/***************************************************************/
/*********  if elseif else Alternative switch case 2  **********/
/***************************************************************/
    const cond = true;
    const a = 2;

    switch (cond) {
        case (a == 1):
            console.log("a ist gleich 1")
            break;
        case (a == 2):
            console.log("a ist gleich 2")
            break;
        default:
            console.log("a hat einen anderen Wert")
            break;
    }

/*
    Ternäre Schreibweise erklärt: 
        (let foo kann auch einfach ein console.log sein)


    einfache if else Ternärität
                Operand 1    Operand 2   Operand 3
                   |            |           |
    let foo = (Bedingung) ? wenn true : wenn false;


    weiterführende if elseif else Ternärität
                Operand 1    Operand 2             Operand 3          Operand 4     Operand 5
                   |            |                     |                  |             |
    let foo = (Bedingung) ? wenn true : (wenn false - 2. Bedingung) ? wenn true : wenn false;
*/
