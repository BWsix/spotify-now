import { getSpotifyAPi, allScopes } from "./spotifyApiBootstrap";

export async function getAuthUrl(clientId: string, clientSecret: string) {
  const spotifyApi = await getSpotifyAPi(clientId, clientSecret);

  return spotifyApi.createAuthorizeURL(allScopes, "");
}
