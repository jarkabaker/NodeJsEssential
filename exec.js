const childProcess = require("child_process");

// childProcess.exec("open http://www.linkedin.com/learning");
// childProcess.exec("open -a Terminal .");

childProcess.exec("dr", (err, data, stderr) => {
    if (stderr) {
        console.log("STD ERROR:");
        console.log(stderr);
    }
    if (err) {
        throw err;
    }
    console.log(data);
})