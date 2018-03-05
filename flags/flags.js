#!/usr/bin/env node

const chalk = require('chalk');
const star = chalk.bold('*');
const space = " ";
let stripeString = "                                   ";
let solidStripe = "                                                  ";
let margin = " ";

let starsStripesOdd = {
    blueString: "",
    stars: `${star}${space}`,
    redOrWhite: 'red',
}
let starsStripesEven = {
    blueString: "",
    stars: `${space}${star}`,
    redOrWhite: "white",
}

let flagCallback = (odd, even) => {
    for (let i = 1; i <= 13; i++) {
        if (i % 2 !== 0 && i <= 7) {
            printStarsStripes(odd);
        } else if (i % 2 === 0 && i <= 7) {
            printStarsStripes(even);
        } else if (i % 2 === 0 && i > 7) {
            console.log( chalk.bgWhite(solidStripe));
        } else {
            console.log( chalk.bgRed(solidStripe));
        }
    }
}

let printStarsStripes = ({blueString, stars, redOrWhite}) => {
    for (let i = 1; i <= 6; i++) {
            blueString += `${stars}`;
        }    
    if(redOrWhite === 'red') {
        console.log(`${chalk.bgBlue(margin + blueString + star + margin)}${chalk.bgRed(stripeString)}`);
    } else {
    console.log(`${chalk.bgBlue(margin + blueString + space + margin)}${chalk.bgWhite(stripeString)}`);
    }
}

flagCallback(starsStripesOdd, starsStripesEven);
// printStarsStripes(starsStripesOdd);


