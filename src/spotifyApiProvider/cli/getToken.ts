import { saveUser } from "../fs_db";
import { askQuestion } from "./askQuestion";
import { getSpotifyAPi } from "./spotifyApiBootstrap";

export async function getToken(clientId: string, clientSecret: string) {
  const spotifyApi = await getSpotifyAPi(clientId, clientSecret);

  const code = await askQuestion("code:\n");

  spotifyApi.authorizationCodeGrant(code, (error, res) => {
    if (error) return console.error(error);

    const { access_token, refresh_token } = res.body;
    saveUser({ access_token, refresh_token, clientId });
  });
}
