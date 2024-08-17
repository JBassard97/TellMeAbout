"use strict";
const {
  CyanText,
  MagentaText,
  GreenText,
  RedText,
  YellowText,
  OrangeText,
  RainbowText,
} = require("jbassard97nodecolors");

// ! You can't infer if a value passed into a function is a variable unless explicitly stated.
// ? This is done here by providing the variableName parameter
// both TellMeAbout parameters are optional, but variableName must be a string

const TellMeAbout = (input: any, variableName: string) => {
  if (variableName && typeof variableName !== "string") {
    return RedText("variableName parameter provided must be a string\n");
  }

  let inputName;
  if (typeof input === 'object' && input !== null) {
    if (Array.isArray(input)) {
      inputName = CyanText(`[${input.map(item => JSON.stringify(item)).join(', ')}]`);
    } else {
      inputName = CyanText(JSON.stringify(input, null, 2));
    }
  } else {
    inputName = CyanText(input?.toString() ?? "undefined");
  }

  let dialogue = "";

  // Is it a variable or just a value?
  if (variableName) {
    variableName = MagentaText(variableName);
    dialogue += `The variable ${variableName + "'s"} value is: \n${inputName}\n`;
  } else {
    dialogue += `You want to know about the ${MagentaText("value")}: \n${inputName}\n`;
  }

  // Quick function to check if input is a palindrome (string or number)
  const isPalindrome = (input: any) => {
    let stringInput = input.toString();
    let reverse = stringInput.split("").reverse().join("");
    return stringInput == reverse;
  };

  // What's its type?
  const type = typeof input;
  dialogue += `Its type is ${GreenText(type)}.\n`;

  switch (type) {
    case "undefined":
      dialogue += "That's all there is to say!";
      break;
    case "string":
      dialogue += `Its length is ${YellowText(input.length)} characters long.\n`;
      if (isPalindrome(input)) {
        dialogue += `It is a ${RainbowText("palindrome")}!\n`;
      }
      break;
    case "number":
      if (Number.isInteger(input)) { // Is an Integer
        if (input === 0) { // Is Zero
          dialogue += "It's zero!\n"
        } else { // Not Zero
          dialogue += `It's a ${YellowText(input > 0 ? "positive" : "negative")}, ${YellowText(input % 2 === 0 ? "even" : "odd")} integer.\n`
          dialogue += `It is ${OrangeText(inputName.length)} digits long.\n`
          if (input > 99) { // Could be Palindrome
            if (isPalindrome(input)) {
              dialogue += `It is also ${RainbowText("palindrome")}!\n`;
            }
          }
        }
      } else { // Not an Integer
        let decimalPlaces = input.toString().split('.')[1].length;
        dialogue += `It's a ${OrangeText("float")} with ${YellowText(decimalPlaces)} decimal place${decimalPlaces > 1 ? "s" : ""}.\n`;
      }
      break;
    case "object":
      if (input === null) {
        dialogue += "It's null.\n";
      } else if (Array.isArray(input)) {
        dialogue += `It is an ${OrangeText("array")}, containing ${YellowText(input.length)} items.\n`;
      } else {
        const keys = Object.keys(input);
        dialogue += `It's an object with ${YellowText(keys.length)} keys.\n`;
        if (keys.length > 0) {
          dialogue += `Keys: ${OrangeText(keys.join(', '))}.\n`;
        }
      }
      break;
    case "boolean":
      dialogue += "That's all there is to say!\n";
      break;
    case "function":
      dialogue += `It's a ${input.toString().startsWith('function') ? OrangeText('regular') : OrangeText('arrow')} ${OrangeText("function")}.\n`;
      dialogue += `It expects ${YellowText(input.length)} parameter${input.length === 1 ? '' : 's'}.\n`;
      break;
  }

  // Final vertical space add
  dialogue += "\n";

  return dialogue;
};

module.exports = { TellMeAbout };