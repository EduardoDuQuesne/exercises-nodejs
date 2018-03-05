#!/usr/bin/env node

const { readFile, readFileSync } = require('fs');
let [,,input] = process.argv;

readFile(input, (err, data) => {
    if (err) throw err;
    process.stdout.write(data + "\n");
});
