import { getColorFromURL } from "color-thief-node";
import spotifyApi from "../spotifyApiProvider";

export async function getColor() {
  const currentPlayingResult = await spotifyApi.getMyCurrentPlayingTrack();
  const currentTrackId = currentPlayingResult.body.item?.id;

  if (!currentTrackId) {
    console.log("currently not playing.");
    return;
  }

  const currentTrack = await spotifyApi.getTrack(currentTrackId);
  const imageUrl = currentTrack.body.album.images[0]?.url;

  if (!imageUrl) {
    console.log("this track dose not have an image.");
    return;
  }

  const colors = getColorFromURL(imageUrl);
  return colors;
}
