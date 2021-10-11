const path = require("path");

// Construct path name
// const dirUploads = path.join(__dirname, "www", "files", "uplodads");
// console.log(dirUploads);

// Output with date
// const util = require("util");
// util.log(" Hello");

// const v8 = require("v8");
// util.log(v8.getHeapStatistics());

// Shortcut:
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());