#!/usr/bin/env node

var args = process.argv.slice(2);
const pdfPlease = require('./index')

console.log(`making a pdf just for you 💕`)

pdfPlease(args[0])