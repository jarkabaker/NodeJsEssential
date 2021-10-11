const fs = require("fs");
const colourData = require("./assets/colours.json");

colourData.colourList.forEach(c => {
    fs.appendFile("./storage-files/colours.md", `${c.colour}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});