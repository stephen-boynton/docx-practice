const JSZip = require("jszip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
var content = fs.readFileSync(__dirname + "/test.docx", "binary");

var zip = new JSZip(content);
var doc = new Docxtemplater().loadZip(zip);
var text = doc.getFullText();
console.log(text);
