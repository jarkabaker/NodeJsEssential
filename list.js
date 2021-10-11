const fs = require("fs");

// Synchronous
//const files = fs.readdirSync("./assets");

// Asynchronous
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
})

//console.log(files);