const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split('\n')

console.log(input[0][input[1]-1])
