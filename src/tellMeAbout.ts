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

  // What's its type?
  const type = typeof input;
  dialogue += `Its type is ${GreenText(type)}. `;

  switch (type) {
    case "undefined":
      break;
    case "string":
      break;
    case "number":
      const isPalindromeNumber = (input: number) => {
        let stringInput = input.toString();
        let reverse = stringInput.split("").reverse().join("");
        return stringInput == reverse;
      };

      if (isPalindromeNumber(input)) {
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

  return dialogue;
};

let hi = 42;

console.log(TellMeAbout(hi, "hi"));
