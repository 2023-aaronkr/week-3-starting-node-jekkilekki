// var.js
"use strict";

let charName = "Thor",
    charAge = 1500,
    charLocation = "Asgard";

let printVars = () => {
    // C, Python = print format string
    // printf();
    console.log("I am %s.", charName);
    console.log("I am %d years old.", charAge);
    console.log("I like", "chicken", "fish", "Groot.");
    console.log("I like " + "chicken " + "fish " + "Groot.");

    // JavaScript 특별한 print
    console.log(`I live in ${charLocation}`);
}

printVars();