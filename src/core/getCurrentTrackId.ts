import spotifyApi from "../spotifyApiProvider";

export async function getCurrentTrackId() {
  const currentPlayingResult = await spotifyApi.getMyCurrentPlayingTrack();
  const trackId = currentPlayingResult.body.item?.id;

  return trackId;
}
