const fs = require("fs");

//synchronously read input
let data;
const readFile = () => {
  try {
    data = fs.readFileSync("./input.txt", "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("./input.txt is not found");
    } else {
      throw err;
    }
  }
  console.log(data);
};

module.exports = readFile;
