const RGBtoANSI = (r, g, b) => {
  const index =
    16 +
    36 * Math.round((r / 255) * 5) +
    6 * Math.round((g / 255) * 5) +
    Math.round((b / 255) * 5);
  return index;
};

const RGBText = (text, r, g, b) =>
  `\x1b[38;5;${RGBtoANSI(r, g, b)}m${text}\x1b[0m`;
const RGBBackground = (text, r, g, b) =>
  `\x1b[48;5;${RGBtoANSI(r, g, b)}m${text}\x1b[0m`;

const RGBtoANSIfuncs = { RGBtoANSI, RGBText, RGBBackground };

module.exports = RGBtoANSIfuncs;
