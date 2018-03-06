"use strict";

const { randomInt } = require('./math');

module.exports.toDiceNotation = ({count, sides}) => {
    return `${count}d${sides}`;
};

module.exports.roll = (dice) => {
    let [min, max] = dice.split('d');
    return randomInt(+min, +max);
};