#!/usr/bin/env node

const { createReadStream, createWriteStream, writeFile } = require('fs');
const { Transform, Writable } = require('stream');
const [, , input, output] = process.argv;

const writeStream = Writable();
writeStream._write = (buffer, _, callback) => {
    callback(
        writeFile(`${output}`, buffer, (err) => {
            if (err) throw err;
        }));
}

const uppercaseFile = Transform();
uppercaseFile._transform = (buffer, _, callback) => {
    // let uppercase = `${JSON.stringify(buffer.toString().toUpperCase())}`;
    callback(null, `${buffer.toString().toUpperCase()}\n`);
}

createReadStream(input)
    .pipe(uppercaseFile)
    .pipe(writeStream);