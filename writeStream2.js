const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFileOut.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/myFile.txt", "UTF-8");

readStream.on("data", data => {
    writeStream.write(data);
});