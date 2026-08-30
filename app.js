const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application Started");

console.log("Is 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));

logger("Application Finished");