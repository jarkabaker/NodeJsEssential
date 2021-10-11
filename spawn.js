const childProcess = require("child_process");

const questionApp = childProcess.spawn("node", ["questionsImproved.js"]);

questionApp.stdin.write("Jarka \n");
questionApp.stdin.write("London \n");
questionApp.stdin.write("not sure \n");


questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});