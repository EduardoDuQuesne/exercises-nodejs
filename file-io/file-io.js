#!/usr/bin/env node

const { readFileSync } = require('fs');
const fs = require('fs');

let [,,input] = process.argv; 
let file = readFileSync(input);

process.stdout.write(file + "\n");
