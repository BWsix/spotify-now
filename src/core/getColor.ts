import chalk from "chalk";
import { getColorFromURL } from "color-thief-node";
import { getCurrentTrackId } from "./getCurrentTrackId";
import { getCurrentTrackImageUrl } from "./getCurrentTrackImageUrl";

export async function getColor() {
  console.log("[fetching data...]");

  const currentTrackId = await getCurrentTrackId();

  if (!currentTrackId) {
    console.log("currently not playing.");
    return;
  }

  const imageUrl = await getCurrentTrackImageUrl(currentTrackId);

  if (!imageUrl) {
    console.log("this track dose not have an image.");
    return;
  }

  const color = await getColorFromURL(imageUrl);

  console.log("color:", chalk.bgRgb(...color).bold("  "), `(${color})`);

  return color;
}
