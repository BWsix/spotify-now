import { getColorFromURL } from "color-thief-node";
import chalk from "chalk";

export async function getImageColor(imageUrl: string) {
  const color = await getColorFromURL(imageUrl);

  console.log("color:", chalk.bgRgb(...color).bold("  "), `(${color})`);

  return color;
}
