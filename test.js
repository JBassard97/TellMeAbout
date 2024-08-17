const { TellMeAbout } = require("./dist/tellMeAbout.js");

let testVariable = Symbol();

// ! Edge Cases Tested: 
// Infinity, -Infinity, null, "", '',
// 0, Nan, false, undefined, [], {}, 
// Nested Arrays, Nested Objects, Symbol()

console.log(TellMeAbout(testVariable, "testVariable"));
