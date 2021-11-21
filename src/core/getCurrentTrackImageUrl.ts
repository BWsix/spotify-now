import spotifyApi from "../spotifyApiProvider";

export async function getCurrentTrackImageUrl(currentTrackId: string) {
  const {
    body: {
      name: trackName,
      album: { images: trackImages },
    },
  } = await spotifyApi.getTrack(currentTrackId);
  const url = trackImages[0]?.url;

  console.log(`now playing: ${trackName}`);
  console.log(`cover url: ${url}`);

  return url;
}
