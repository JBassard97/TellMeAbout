"use strict";

import { randomBytes } from "crypto";

const {
  CyanText,
  MagentaText,
  GreenText,
  BlueText,
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

  // If it's an object or array, appropriately stringify to display
  let inputName;
  if (typeof input === 'object' && input !== null) {
    if (Array.isArray(input)) {
      inputName = CyanText(`[${input.map(item => JSON.stringify(item)).join(', ')}]`);
    } else {
      inputName = CyanText(JSON.stringify(input, null, 2));
    }
  } else {
    // Handle specific falsy values and ensure they are correctly stringified
    switch (input) {
      case "":
        inputName = CyanText('""'); // Empty string
        break;
      case 0:
        inputName = CyanText('0'); // Zero
        break;
      case false:
        inputName = CyanText('false'); // Boolean false
        break;
      case null:
        inputName = CyanText('null'); // Null
        break;
      case undefined:
        inputName = CyanText('undefined'); // Undefined
        break;
      case NaN:
        inputName = CyanText('NaN'); // Not a Number
        break;
      default:
        inputName = CyanText(input?.toString() ?? "undefined");
    }
  }

  let dialogue = "";

  // Is it a variable or just a value?
  if (variableName) {
    variableName = MagentaText(variableName);
    dialogue += `The variable ${variableName + "'s"} value is: \n${inputName}\n`;
  } else {
    dialogue += `You want to know about the ${MagentaText("value")}: \n${inputName}\n`;
  }

  // ! Helper Functions
  // Quick function to check if input is a palindrome (string or number)
  const isPalindrome = (input: any) => {
    let stringInput = input.toString();
    let reverse = stringInput.split("").reverse().join("");
    return stringInput == reverse;
  };

  function getFactorsAndCheckPrime(num: number): { factors: number[], isPrime: boolean } {
    const absNum = Math.abs(num);
    const factors: number[] = [];
    let isPrime = absNum > 1;

    for (let i = 1; i <= Math.sqrt(absNum); i++) {
      if (absNum % i === 0) {
        factors.push(i);
        if (i !== absNum / i) {
          factors.push(absNum / i);
        }
        if (i !== 1 && i !== absNum) {
          isPrime = false;
        }
      }
    }

    factors.sort((a, b) => a - b);
    return { factors, isPrime };
  }
  // ! End Helper Functions


  // What's its type?
  const type = typeof input;
  dialogue += `Its data type is ${GreenText(type)}.\n`;

  switch (type) {
    case "undefined":
      break;
    case "string":
      dialogue += `Its length is ${YellowText(input.length)} characters long.\n`;
      if (input.length > 2) {
        if (isPalindrome(input)) {
          dialogue += `It is a ${RainbowText("palindrome")}!\n`;
        }
      }

      break;
    case "number":
      if (isNaN(input)) {
        dialogue += "It's " + RedText("NaN") + "(Not a Number).\n"
        break;
      }

      if (!isFinite(input)) {
        dialogue += `It's ${input > 0 ? RainbowText("Infinity") : RainbowText("-Infinity")}.\n`;
        break;
      }

      if (Number.isInteger(input)) { // Is an Integer
        if (input === 0) { // Is Zero
          break;
        } else { // Not Zero
          dialogue += `It's a ${YellowText(input > 0 ? "positive" : "negative")}, ${YellowText(input % 2 === 0 ? "even" : "odd")} integer.\n`
          const digitLength: number = Math.abs(input).toString().length
          dialogue += `It's ${OrangeText(digitLength)} digit${digitLength > 1 ? "s" : ""} long.\n`
          // Is it Prime?
          const { factors, isPrime } = getFactorsAndCheckPrime(input);
          dialogue += `${isPrime ? `It is a ${BlueText("prime")} number, with only the factors ${YellowText("1 ") + "and " + YellowText(input)}` : `Its factors are ${BlueText(factors)}`}.\n`;
          // Is it a Perfect Square or Perfect Cube?
          if (input > 0) {
            const isSquare: boolean = Number.isInteger(Math.sqrt(input));
            if (isSquare) {
              dialogue += `It's a ${RainbowText("perfect square")}: ${MagentaText(Math.sqrt(input) + " x " + Math.sqrt(input))}\n`
            }

            const cubeRoot: number = (Math.round(Math.pow(input, 1 / 3)));
            const isCube: boolean = cubeRoot ** 3 === input;
            if (isCube) {
              dialogue += `It's a ${RainbowText("perfect cube")}: ${MagentaText(cubeRoot + " x " + cubeRoot + " x " + cubeRoot)}\n`
            }
          }
          if (input > 99) { // Could be Palindrome
            if (isPalindrome(input)) {
              dialogue += `It is also ${RainbowText("palindrome")}!\n`;
            }
          }
        }
      } else { // Not an Integer (Float)
        let decimalPlaces = input.toString().split('.')[1].length;
        dialogue += `It's a ${OrangeText("float")} with ${YellowText(decimalPlaces)} decimal place${decimalPlaces > 1 ? "s" : ""}.\n`;
      }
      break;
    case "object":
      if (input === null) {
        dialogue += `${BlueText("null")} being an ${GreenText("object")} is a quirk of ${YellowText("JavaScript")}\n`;
      } else if (Array.isArray(input)) {
        dialogue += `It is an ${OrangeText("array")}, containing ${YellowText(input.length)} items.\n`;
      } else {
        const keys = Object.keys(input);
        dialogue += `It contains ${YellowText(keys.length)} keys.\n`;
        if (keys.length > 0) {
          dialogue += `Keys: ${OrangeText(keys.join(', '))}.\n`;
        }
      }
      break;
    case "boolean":
      break;
    case "function":
      dialogue += `It's a ${input.toString().startsWith('function') ? OrangeText('regular') : OrangeText('arrow')} ${OrangeText("function")}.\n`;
      dialogue += `It expects ${YellowText(input.length)} parameter${input.length === 1 ? '' : 's'}.\n`;
      break;
  }

  // Truthy or Falsy
  dialogue += `Lastly, it is ${input ? GreenText("Truthy") : RedText("Falsy")}`

  // Final vertical space add
  dialogue += "\n";

  return dialogue;
};

module.exports = { TellMeAbout };