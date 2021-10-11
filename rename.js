const fs = require("fs");

//fs.renameSync("./assets/colours.json", "./assets/colourData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {

    fs.unlinkSync("./assets/Jarka.jpg");

}, 4000)