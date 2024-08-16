const {
  CyanText,
  MagentaText,
  GreenText,
  RedText,
  RainbowText,
} = require("jbassard97nodecolors");

// ! You can't infer if a value passed into a function is a variable unless explicitly stated.
// ? This is done here by providing the variableName parameter
// both TellMeAbout parameters are optional, but variableName must be a string

const TellMeAbout = (input: any, variableName: string) => {
  if (variableName && typeof variableName !== "string") {
    return RedText("variableName parameter provided must be a string");
  }

  let inputName: string = CyanText(input.toString());
  let dialogue: string = "";

  // Is it a variable or just a value?
  if (variableName) {
    variableName = MagentaText(variableName);
    dialogue += `The variable ${variableName + "'s"} value is ${inputName}. `;
  } else {
    dialogue += `You want to know about the value ${inputName}. `;
  }

  // Quick function to check if input is a palindrome (string or number)
  const isPalindrome = (input: any) => {
    let stringInput = input.toString();
    let reverse = stringInput.split("").reverse().join("");
    return stringInput == reverse;
  };

  // What's its type?
  const type = typeof input;
  dialogue += `Its type is ${GreenText(type)}. `;

  switch (type) {
    case "undefined":
      break;
    case "string":
      if (isPalindrome(input)) {
        dialogue += `It is a ${RainbowText("palindrome")}! `;
      }
      break;
    case "number":
      if (isPalindrome(input)) {
        dialogue += `It is a ${RainbowText("palindrome")}! `;
      }
      break;
    case "object":
      const isArray = Array.isArray(input);
      if (isArray) {
      } else {
      }
      break;
    case "boolean":
      break;
  }

  dialogue += "\n";

  return dialogue;
};

module.exports = { TellMeAbout };
