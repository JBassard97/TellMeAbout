# TellMeAbout

## Table of Contents

- [Title](#tellmeabout)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description

**TellMeAbout** is a powerful backend/Node.js JavaScript/TypeScript utility that allows you to plug in any variable or value and automatically infers as much information about it as possible. Whether you're dealing with objects, arrays, strings, numbers, or even more complex data types, **TellMeAbout** provides insights and details to help you understand your data better. Perfect for debugging, data analysis, or just satisfying your curiosity about what a variable holds, this tool is a must-have for any developer looking to dive deeper into their code.

## Installation

- [npm](https://www.npmjs.com/package/jbassard97nodecolors#installation)
- [GitHub Repo](https://github.com/JBassard97/TellMeAbout)

Install the npm package! In the root directory of your code base, open your IDE's integrated terminal and enter `npm install tellmeabout`. To stay current with the most recent version, enter `npm install tellmeabout@latest`. And that's it! 

## Usage

The **TellMeAbout** function is a versatile tool that provides detailed information about a given input. It accepts two optional parameters:

`input`: The value or variable you want to analyze. This can be of any type (string, number, object, array, etc.).

`variableName`: A string representing the name of the variable (if applicable). This helps distinguish whether the input is a variable or just a value.

This function returns a `string`, and it can be readily viewed with `console.log`.

### What It Does

- Type Detection: The function determines the data type of the input and provides relevant information such as length (for strings), factors and prime status (for numbers), and keys (for objects).
  
- Detailed Analysis: Depending on the input type, the function checks for specific characteristics:

- Strings: Length and palindrome detection.
- Numbers: Type (integer, float, BigInt), sign, parity (odd/even), prime status, and whether it’s a perfect square or cube.
- Objects/Arrays: Key and length analysis.
- Functions: Function type (regular or arrow), the number of expected parameters, and in some cases - **the entire code it contains**.
- Falsy/Truthy Check: The function also determines if the input is truthy or falsy.

The function returns a colored, detailed report about the input, making it useful for debugging, data analysis, or simply understanding more about the variables and values in your code.

### How To Use It

After installing the package, you'll want to create a reference to it using the backend specific `require()` syntax like so:

```javascript
const {TellMeAbout} = require("tellmeabout");
```
For demonstration, let's declare a variable called *"mystery"* and assign anything we want to it.

```javascript
let mystery = "Hello World!"
```
From here, we can either:
- Store **TellMeAbout's** return in a variable and `console.log` that very variable
```javascript
let dialogue = TellMeAbout(mystery);
console.log(dialogue);
```
### OR
- Directly `console.log` the **TellMeAbout** function with parameters filled in
```javascript
console.log(TellMeAbout(mystery));
```
The above example should display this in your terminal console when you run the source file with the `node` command:

<img width="187" alt="TellMeAbout_simple_test" src="https://github.com/user-attachments/assets/657a92c4-9a82-4237-bd41-18d0d097c281">

<br>

That's pretty cool, *but wait...* I thought that if I directly plugged in a variable into the function that it would also give the name of the variable? I originally thought the same thing, until I learned that in the eyes of a JavaScript function, a value is a value. A variable is simply a reference to a value stored in memory, and not the literal name of said variable. While there are a few tricks to get that to work, they are quite vulnerable and leave you quite hackable.

To get around this, **TellMeAbout** has an optional second parameter `variableName: string` to explicitly have the variable's name accounted for:

```javascript
const fullDialogue = TellMeAbout(mystery, "mystery");
console.log(fullDialogue);
```
That should yield a more informative response:

<img width="187" alt="tellmeabout_full_test" src="https://github.com/user-attachments/assets/93514b4d-c940-4db1-9fec-b4d1d307f551">

That's much better, and should help turn your debugging capabilities up to 11! **TellMeAbout** isn't simply limited to strings, either. You can plug in *all kinds* of variables and values, and learn more about the tools you use every day without realizing how deep they go. 

## Examples
- Number (also if it's a Perfect Square or a Perfect Cube)
<img width="187" alt="tellmeabout_number_test" src="https://github.com/user-attachments/assets/3b7331b6-4916-4d2b-8ecf-765877107079">

- String (also if it's a Palindrome)
<img width="182" alt="tellmeabout_string_palindrome" src="https://github.com/user-attachments/assets/de4db568-38df-4392-b49f-3015540a153f">

- Falsy value (such as `null`)
<img width="254" alt="tellmeabout_null_test" src="https://github.com/user-attachments/assets/37937f0b-00eb-4528-9365-1bc9978ac1dc">

- Objects
<img width="182" alt="tellmeabout_object_test" src="https://github.com/user-attachments/assets/9694d901-44e2-4bf9-8e04-0c269c982904">

- Arrays (which are also Objects)
<img width="284" alt="tellmeabout_array_test" src="https://github.com/user-attachments/assets/1c575e15-7ab0-40ea-a0a3-4bcd337b0d5e">

- Error return if `variableName` parameter is not a String
<img width="272" alt="tellmeabout_error" src="https://github.com/user-attachments/assets/7d22fad7-4427-4b49-8fb0-d53322402f71">

## License

ISC

## Contributors

- [jbassard97](https://github.com/JBassard97)

## Questions

Noticed an edge case not covered or see an opportunity to improve this package's functionality?
- Shoot a nice quick email [here](mailto:cool2codeyt@gmail.com)
- Or make a pull request [here](https://github.com/JBassard97/TellMeAbout)
