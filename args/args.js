#!/usr/bin/env node

let [, , ...input] = process.argv;
if (input.length === 0) {
    console.log(0);
}
const sumArray = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    };
    return total
};

let numberString = input.filter(item => !isNaN(item));
let numbers = numberString.map(a => +a);
let sum = sumArray(numbers);
console.log(sum);