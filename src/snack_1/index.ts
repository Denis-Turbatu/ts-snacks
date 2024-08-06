// 1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.

import * as readlineSync from 'readline-sync';


let myName: string = readlineSync.question("Inserisci il nome: ");
let myAge: string = readlineSync.question("Inserisci la tua eta: ");

console.log(`Ciao, ${myName}! Hai ${myAge} anni`);
console.log(typeof myName, typeof myAge);
