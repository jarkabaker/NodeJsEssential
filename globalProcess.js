console.log("Print - Process id and version")
console.log(process.pid);
console.log(process.versions.node);

console.log("Print - All process arguments")
console.log(process.argv);

// Run as node globalProcess Jarka Baker
console.log("Print - selected arguments");
const [,,firstName,lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);