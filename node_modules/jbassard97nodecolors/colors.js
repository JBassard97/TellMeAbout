// TODO: EASILY CONSOLE.LOG COLORS, PATTERNS, YOU NAME IT
// Foreground (text) colors:
const CyanText = (text) => `\x1b[36m${text}\x1b[0m`;
const BlackText = (text) => `\x1b[30m${text}\x1b[0m`;
const GreenText = (text) => `\x1b[32m${text}\x1b[0m`;
const RedText = (text) => `\x1b[31m${text}\x1b[0m`;
const YellowText = (text) => `\x1b[33m${text}\x1b[0m`;
const BlueText = (text) => `\x1b[34m${text}\x1b[0m`;
const MagentaText = (text) => `\x1b[35m${text}\x1b[0m`;
const WhiteText = (text) => `\x1b[37m${text}\x1b[0m`;
const OrangeText = (text) => `\x1b[38;5;208m${text}\x1b[0m`;

// Bright foreground colors:
const BrightCyanText = (text) => `\x1b[96m${text}\x1b[0m`;
const BrightBlackText = (text) => `\x1b[90m${text}\x1b[0m`;
const BrightGreenText = (text) => `\x1b[92m${text}\x1b[0m`;
const BrightRedText = (text) => `\x1b[91m${text}\x1b[0m`;
const BrightYellowText = (text) => `\x1b[93m${text}\x1b[0m`;
const BrightBlueText = (text) => `\x1b[94m${text}\x1b[0m`;
const BrightMagentaText = (text) => `\x1b[95m${text}\x1b[0m`;
const BrightWhiteText = (text) => `\x1b[97m${text}\x1b[0m`;
const BrightOrangeText = (text) => `\x1b[1;38;5;214m${text}\x1b[0m`;

// Background colors:
const CyanBackground = (text) => `\x1b[46m${text}\x1b[0m`;
const BlackBackground = (text) => `\x1b[40m${text}\x1b[0m`;
const GreenBackground = (text) => `\x1b[42m${text}\x1b[0m`;
const RedBackground = (text) => `\x1b[41m${text}\x1b[0m`;
const YellowBackground = (text) => `\x1b[43m${text}\x1b[0m`;
const BlueBackground = (text) => `\x1b[44m${text}\x1b[0m`;
const MagentaBackground = (text) => `\x1b[45m${text}\x1b[0m`;
const WhiteBackground = (text) => `\x1b[47m${text}\x1b[0m`;
const OrangeBackground = (text) => `\x1b[48;5;208m${text}\x1b[0m`;

// Bright background colors:
const BrightCyanBackground = (text) => `\x1b[106m${text}\x1b[0m`;
const BrightBlackBackground = (text) => `\x1b[100m${text}\x1b[0m`;
const BrightGreenBackground = (text) => `\x1b[102m${text}\x1b[0m`;
const BrightRedBackground = (text) => `\x1b[101m${text}\x1b[0m`;
const BrightYellowBackground = (text) => `\x1b[103m${text}\x1b[0m`;
const BrightBlueBackground = (text) => `\x1b[104m${text}\x1b[0m`;
const BrightMagentaBackground = (text) => `\x1b[105m${text}\x1b[0m`;
const BrightWhiteBackground = (text) => `\x1b[107m${text}\x1b[0m`;
const BrightOrangeBackground = (text) => `\x1b[1;48;5;214m${text}\x1b[0m`;

// ! ------------------------------------------------------------------------------------------------

const RainbowText = (text) => {
  const colors = [
    "\x1b[31m", // Red
    "\x1b[33m", // Yellow
    "\x1b[32m", // Green
    "\x1b[36m", // Cyan
    "\x1b[34m", // Blue
    "\x1b[35m", // Magenta
  ];
  const reset = "\x1b[0m";
  let rainbowOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    rainbowOutput += color + text[i];
  }
  return rainbowOutput + reset;
};

const ChristmasText = (text) => {
  const colors = [
    "\x1b[31m", // Red
    "\x1b[37m", // White
    "\x1b[32m", // Green
  ];
  const reset = "\x1b[0m";
  let christmasOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    christmasOutput += color + text[i];
  }
  return christmasOutput + reset;
};

const IcyText = (text) => {
  const colors = [
    "\x1b[94m", // Bright Blue
    "\x1b[37m", // White
    "\x1b[96m", // Bright Cyan
  ];
  const reset = "\x1b[0m";
  let icyOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    icyOutput += color + text[i];
  }
  return icyOutput + reset;
};

const FieryText = (text) => {
  const colors = [
    "\x1b[91m", // Bright Red
    "\x1b[93m", // Bright Yellow
    "\x1b[37m", // White
  ];
  const reset = "\x1b[0m";
  let fieryOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    fieryOutput += color + text[i];
  }
  return fieryOutput + reset;
};

const ZebraText = (text) => {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    // Alternate between black and white background
    const backgroundColor = i % 2 === 0 ? "\x1b[40m" : "\x1b[47m";

    // Set text color to black or white
    const textColor = i % 2 === 0 ? "\x1b[37m" : "\x1b[30m";

    // Add ANSI escape codes for background and text color
    result += `${backgroundColor}${textColor}${text[i]}`;
  }

  // Reset colors at the end
  result += "\x1b[0m";

  return result;
};

// ! ------------------------------------------------------------------------------------------------

const ItalicText = (text) => `\x1b[3m${text}\x1b[0m`;
const BoldText = (text) => `\x1b[1m${text}\x1b[0m`;
const UnderlineText = (text) => `\x1b[4m${text}\x1b[0m`;
const OverlineText = (text) => `\x1b[53m${text}\x1b[0m`;
const DoubleUnderlineText = (text) => `\x1b[21m${text}\x1b[0m`;
// ? These do not work, at least not in my environment
// const DottedUnderlineText = (text) => `\x1b[4:3m${text}\x1b[0m`;
// const CurlyUnderlineText = (text) => `\x1b[4:4m${text}\x1b[0m`;
// const FramedText = (text) => `\x1b[51m${text}\x1b[0m`;
// const EncircledText = (text) => `\x1b[52m${text}\x1b[0m`;

const InverseColors = (text) => `\x1b[7m${text}\x1b[0m`;
const FaintText = (text) => `\x1b[2m${text}\x1b[0m`;

// ? Blink is outdated, poses accessibility concerns, and doesn't work in general. I'm still keeping it here commented out.
// const Blink = (text) => `\x1b[5m${text}\x1b[0m`;
// const SlowBlinkText = (text) => `\x1b[6m${text}\x1b[0m`;
// const FastBlinkText = (text) => `\x1b[25m${text}\x1b[0m`;

const Hidden = (text) => `\x1b[8m${text}\x1b[0m`;
const CrossedOut = (text) => `\x1b[9m${text}\x1b[0m`;

// ! ------------------------------------------------------------------------------------------------

const colors = {
  CyanText,
  BlackText,
  GreenText,
  RedText,
  OrangeText,
  YellowText,
  BlueText,
  MagentaText,
  WhiteText,
  BrightCyanText,
  BrightBlackText,
  BrightGreenText,
  BrightRedText,
  BrightOrangeText,
  BrightYellowText,
  BrightBlueText,
  BrightMagentaText,
  BrightWhiteText,
  RainbowText,
  ChristmasText,
  IcyText,
  FieryText,
  ZebraText,
  UnderlineText,
  DoubleUnderlineText,
  ItalicText,
  BoldText,
  OverlineText,
  InverseColors,
  FaintText,
  Hidden,
  CrossedOut,
  CyanBackground,
  BlackBackground,
  GreenBackground,
  RedBackground,
  OrangeBackground,
  YellowBackground,
  BlueBackground,
  MagentaBackground,
  WhiteBackground,
  BrightCyanBackground,
  BrightBlackBackground,
  BrightGreenBackground,
  BrightRedBackground,
  BrightOrangeBackground,
  BrightYellowBackground,
  BrightBlueBackground,
  BrightMagentaBackground,
  BrightWhiteBackground,
};

const testPrint = () => {
  const colorFunctions = {};
  // Iterate over the functions in the module
  for (const functionName in colors) {
    const functionValue = colors[functionName];

    // Check if it's a function
    if (typeof functionValue === "function") {
      // Add the function to the colorFunctions object
      colorFunctions[functionName] = functionValue;
    }
  }

  // Now you can use colorFunctions in the loop
  for (const [colorName, colorFunction] of Object.entries(colorFunctions)) {
    const coloredText = colorFunction(colorName);
    console.log(coloredText);
  }
};

// ! ------------------------------------------------------------------------------------------------

const RGBtoANSIfuncs = require("./RGBtoANSI");
const CSStoANSIfuncs = require("./CSStoANSI");
const HEXtoANSIfuncs = require("./HEXtoANSI");

const allFunctions = {
  ...colors,
  testPrint,
  ...RGBtoANSIfuncs,
  ...CSStoANSIfuncs,
  ...HEXtoANSIfuncs,
};

module.exports = allFunctions;
