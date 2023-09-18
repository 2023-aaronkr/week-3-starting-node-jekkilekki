// numbers.js 
"use strict";

let numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];
// function printNumbers() {...}
let printNumbers = () => {
    // for(int i = 0; i < 5; i++ ) {...}
    numbers.forEach(num => console.log(num));
}

printNumbers();