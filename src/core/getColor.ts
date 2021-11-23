import chalk from "chalk";
import { getColorFromURL } from "color-thief-node";
import { getCurrentTrackId } from "./getCurrentTrackId";
import { getCurrentTrackImageUrl } from "./getCurrentTrackImageUrl";

export async function getColor() {
  console.log(chalk.gray("Updating data..."));

  const currentTrackId = await getCurrentTrackId();

  if (!currentTrackId) {
    console.log("Currently not playing.");
    return;
  }

  const imageUrl = await getCurrentTrackImageUrl(currentTrackId);

  if (!imageUrl) {
    console.log("This track dose not have an image.");
    return;
  }

  const color = await getColorFromURL(imageUrl);

  console.log(
    chalk.gray("Color:"),
    chalk.bgRgb(...color)("  "),
    `(${color.toString()})`
  );

  return color;
}
