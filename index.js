var moment = require("moment");

console.log("Hello from Javscript!");
var datetime = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(datetime);

var name = "Jess";
var dog = "Mary Jane";
var hobby = "gardening";

console.log(`${name} loves spending time with ${dog} and ${hobby}`);
