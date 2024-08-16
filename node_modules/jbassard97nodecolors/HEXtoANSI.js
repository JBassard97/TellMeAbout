function HexColorText(text, hexColor) {
  // Validate hex color length
  if (hexColor.length !== 4 && hexColor.length !== 7) {
    throw new Error("Hex color must be either 4 or 7 characters long");
  }

  // Remove '#' if present
  hexColor = hexColor.replace("#", "");

  // Convert hex to RGB
  const rgb = [
    parseInt(hexColor.substring(0, 2), 16),
    parseInt(hexColor.substring(2, 4), 16),
    parseInt(hexColor.substring(4, 6), 16),
  ];

  // ANSI escape codes for color
  const colorCode = `\x1b[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`;

  // ANSI escape code for resetting color
  const resetCode = "\x1b[0m";

  // Combine color code, text, and reset code
  const coloredText = `${colorCode}${text}${resetCode}`;

  return coloredText;
}

function HexColorBackground(text, hexColor) {
  // Validate hex color length
  if (hexColor.length !== 4 && hexColor.length !== 7) {
    throw new Error("Hex color must be either 4 or 7 characters long");
  }

  // Remove '#' if present
  hexColor = hexColor.replace("#", "");

  // Convert hex to RGB
  const rgb = [
    parseInt(hexColor.substring(0, 2), 16),
    parseInt(hexColor.substring(2, 4), 16),
    parseInt(hexColor.substring(4, 6), 16),
  ];

  // ANSI escape codes for color
  const colorCode = `\x1b[48;2;${rgb[0]};${rgb[1]};${rgb[2]}m`;

  // ANSI escape code for resetting color
  const resetCode = "\x1b[0m";

  // Combine color code, text, and reset code
  const coloredText = `${colorCode}${text}${resetCode}`;

  return coloredText;
}

const HEXtoANSIfuncs = { HexColorText, HexColorBackground };

module.exports = HEXtoANSIfuncs;
