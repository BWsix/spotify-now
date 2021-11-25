import { getSpotifyApi } from "./getSpotifyApi";

const scopeList = [
  // "ugc-image-upload",
  // "playlist-modify-private",
  // "playlist-read-private",
  // "playlist-modify-public",
  // "playlist-read-collaborative",
  // "user-read-private",
  // "user-read-email",
  // "user-read-playback-state",
  // "user-modify-playback-state",
  "user-read-currently-playing",
  // "user-library-modify",
  // "user-library-read",
  // "user-read-playback-position",
  // "user-read-recently-played",
  // "user-top-read",
  // "app-remote-control",
  // "user-follow-modify",
  // "user-follow-read",
];

export async function getAuthUrl(clientId: string, clientSecret: string) {
  const spotifyApi = await getSpotifyApi(clientId, clientSecret);

  return spotifyApi.createAuthorizeURL(scopeList, "");
}
