let string1 = require('../string1.cjs');

let stringFormat ='$1,00222.9807';
const result = string1(stringFormat);

console.log(typeof result);
console.log( result);