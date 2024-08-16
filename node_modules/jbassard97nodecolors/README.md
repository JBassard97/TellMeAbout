# jbassard97nodecolors

## Table of Contents

- [Title](#jbassard97nodecolors)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)


## Description

Easily apply ANSI escape codes to colorize your text, it's background, or both at the same time! The entire rainbow is at your disposal. There are a total of 58 easy-to-use functions included in this npm module to let your creativity fly, and 2 test print functions so you can see the project's true colors in an instant. Most styles are nestable. This project allows for the full conversion of:

    CSS color keywords to ANSI,
    RGB values to ANSI,
    and 4 or 7 digit HEXIDECIMAL color to ANSI

Give your eyes the treat they deserve, here's how:

## Installation

Install the npm package! In your root directory of your project, enter 'npm install jbassard97nodecolors'. To stay current with the most recent pushes, enter 'npm install jbassard97nodecolors@latest'. And that's it! 'jbassard97nodecolors' is a remarkably lightweight dependency to have and does a lot.

## Usage

Link to npm package: https://www.npmjs.com/package/jbassard97nodecolors

Link to GitHub repo: https://github.com/JBassard97/nodeColors

These functions can be broken down into 6 groups of thought:

- [Basic Colors](#Basic)
- [Patterns](#Patterns)
- [Styles](#Styles)
- [CSS coloring](#CSS)
- [RGB coloring](#RGB)
- [HEX coloring](#HEX)
- [Test Prints!](#TestPrint)

## Basic

In any ANSI-compatible terminal, the standard output colors are represented as 8 basic colors and 8 high-intensity colors. These are black, red, green, yellow, blue, magenta, cyan, and white. As a bonus, I found it disappointing that orange wasn't an OG color, so functions for that hue are included. Additionally, we need to understand that the text color (foreground) and background color can be styled separately. This gives us 36 functions to perform all of the most STANDARD output colors. They all only take in one string of text exactly and are called like this:

    // Foreground (text) colors:
    const CyanText = (text) => `\x1b[36m${text}\x1b[0m`;

    // Bright foreground colors:
    const BrightCyanText = (text) => `\x1b[96m${text}\x1b[0m`;

    // Background colors:
    const CyanBackground = (text) => `\x1b[46m${text}\x1b[0m`;

    // Bright background colors:
    const BrightCyanBackground = (text) => `\x1b[106m${text}\x1b[0m`;


    // Example use:
    console.log(CyanText("Ahh cyan, such a classic output color."));

<img width="140" alt="Screenshot 2024-01-13 234131" src="https://github.com/JBassard97/nodeColors/assets/142551579/1e3e205b-aefc-4534-a60e-471661bc031d">

<img width="140" alt="Screenshot 2024-01-13 234153" src="https://github.com/JBassard97/nodeColors/assets/142551579/e9e5a724-567e-4b69-ba47-ce245200b2e9">

## Patterns

These functions take in a string of text, loops through it, and applies a colored pattern to its output. These include: RainbowText(), ZebraText(), FieryText(), IcyText(), and for that time of the year - ChristmasText().

<img width="140" alt="Screenshot 2024-01-13 234222" src="https://github.com/JBassard97/nodeColors/assets/142551579/65419870-4c16-4512-a597-ff51562ce600">

## Styles

These 9 functions take in a string of text, and returns the text with the ANSI codes on either side to define a style. These styles are standard for CLI and include: ItalicText(), BoldText(), UnderlineText(), DoubleUnderlineText,(), OverlineText(), InverseColors(), FaintText(), Hidden(), and CrossedOut().

<img width="140" alt="Screenshot 2024-01-13 234246" src="https://github.com/JBassard97/nodeColors/assets/142551579/b98f85f6-16fb-4f74-beaa-6ccd9b9312c0">

## CSS

These functions are the stars of the show in my opinion. These 2 functions each take in a string of text, and a string containing a valid CSS color keyword (like "AliceBlue", is case insensitive!), and output your text in the color you requested. If you tried to use a nonexistent color or spelled it wrong, it'll notify you of the mismatch and return the original text. These functions are simply named: CSSkeywordText() and CSSkeywordBackground().

    // Example use:
    console.log(CSSkeywordText("this text is slateblue", "slateblue"));

<img width="350" alt="Screenshot 2024-01-14 000147" src="https://github.com/JBassard97/nodeColors/assets/142551579/e464fefe-9f60-4fd7-9629-1266cd28fc5a">

## RGB

These 3 functions can colorize text by the given RGB values. They take in a string of text, and 3 integers (R, G, B). The only 2 you'll need to use are named RGBText() and RGBBackground().

    // Example use:
    // console.log(RGBText("This text is aqua", 0, 255, 255));

## HEX

These 2 functions can colorize text by the given HEX color code. These codes can be either 4 or 7 characters long, and should start with '#' These functions are simply named: HexColorText() and HexColorBackground().

    // Example use:
    // console.log(HexColorText("Colored like a tomato", "#FF6347");

## TestPrint

Included are 2 functions that can be used to visualize all hues and intensities possible. Calling the function 'testPrint();' by itself will console.log a sample of all of the functions regarding basic colors, patterns, and styles. Calling the function 'CSSkeywordTestPrint();' by itself will console.log every CSS color keyword, demonstrating its ability to show in the foreground and background of the output. This test print is particularly beautiful.


<img width="300" alt="Screenshot 2024-01-13 234421" src="https://github.com/JBassard97/nodeColors/assets/142551579/9a9a047d-672c-4bdb-a354-f53f5f49609d">

<img width="300" alt="Screenshot 2024-01-13 234459" src="https://github.com/JBassard97/nodeColors/assets/142551579/c5a2438d-0ab8-44b3-8b83-93e8c594dcd1">

<img width="300" alt="Screenshot 2024-01-13 234521" src="https://github.com/JBassard97/nodeColors/assets/142551579/36c3dcce-af0f-492f-8f60-027c757c8723">

## Examples

<img width="600" alt="Screenshot 2024-01-17 123100" src="https://github.com/JBassard97/nodeColors/assets/142551579/fd25d0f0-9fe3-425e-806f-fc48579d4e0b">

## License

ISC

## Contributors

- [jbassard97](https://github.com/JBassard97)

## Questions

- With the ability to infinitely alter the hues of the output in our terminals, can this create intricate terminal art?
- Someone PLEASE try making pixel art on my behalf. It'd make me cry with joy.



