const fs = require("fs");

const readInput = () => {
  let input;

  //synchronously read input if it the file is there
  try {
    input = fs.readFileSync("./input.txt", "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("./input.txt is not found");
    } else {
      throw err;
    }
  }

  return input;
};

module.exports = readInput;
