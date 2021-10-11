const { Console } = require("console");
const fs = require("fs");

// Synchronous
// const text = fs.readFileSync("./assets/Readme.md", "utf-8");
// console.log(text);

// Asynchronous
fs.readFile("./assets/Jarka.jpeg", "utf-8", (err, img) => {

    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }

    console.log("file contents read");
    console.log(img);
})