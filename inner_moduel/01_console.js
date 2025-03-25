// inner_moduel/01_console.js
// 폴더가 다르기 때문에 cd "js with server" => cd ../inner_moduel

const fs = require('fs');
const { Console } = require('console');

const logOutput = fs.createWriteStream('./logs/stdout.log');
const errOutput = fs.createWriteStream('./logs/stderr.log');

const logger = new Console({
  stdout : logOutput,
  stderr : errOutput
});
let count = 5;
logger.log('count : %d', count); //steout
logger.error(`count : ${++count}`); //stderr