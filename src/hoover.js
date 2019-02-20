const fs = require("fs");

//synchronously read input
let data;
const readFile = () => {
  data = fs.readFileSync("./input.txt", "utf8");
  console.log(data);
};

module.exports = readFile;
