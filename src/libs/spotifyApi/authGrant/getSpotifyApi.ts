import SpotifyWebApi from "spotify-web-api-node";

export async function getSpotifyApi(clientId: string, clientSecret: string) {
  return new SpotifyWebApi({
    clientId,
    clientSecret,
    redirectUri: "http://localhost:6969",
  });
}
