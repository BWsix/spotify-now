import chalk from "chalk";
import spotifyApi from "../spotifyApiProvider";

export async function getCurrentTrackImageUrl(currentTrackId: string) {
  const {
    body: {
      name: trackName,
      album: { images: trackImages },
    },
  } = await spotifyApi.getTrack(currentTrackId);
  const url = trackImages[0]?.url;

  console.log(chalk.gray("Now playing:"), trackName);
  console.log(chalk.gray("Cover image url:"), url);

  return url;
}
