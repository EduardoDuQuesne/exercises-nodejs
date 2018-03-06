"use strict";

module.exports.randomInt = (min, max) => {
    let highNum = max * min;
    let total = Math.floor(Math.random() * (highNum - min + 1) + min);
    return total;
};