const { TellMeAbout } = require("./dist/tellMeAbout.js");

let mystery = "hi";

// ! Edge Cases Tested:
// Infinity, -Infinity, null, "", '',
// 0, Nan, false, undefined, [], {},
// Nested Arrays, Nested Objects, Symbol()
// "😊", "é", BigInt(9007199254740991)

console.log(TellMeAbout(mystery, 69));
