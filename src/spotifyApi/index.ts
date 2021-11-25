import SpotifyWebApi from "spotify-web-api-node";
import { getUser } from "./db";

export const user = getUser();

const spotifyApi = new SpotifyWebApi({
  accessToken: user.access_token,
  refreshToken: user.refresh_token,
  clientId: user.clientId,
  clientSecret: user.clientSecret,
});

export default spotifyApi;

export { refreshTokenWhenExpire } from "./refreshTokenWhenExpire";
