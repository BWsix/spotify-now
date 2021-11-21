import { assert } from "console";
import SpotifyWebApi from "spotify-web-api-node";
import { getUser, saveUser } from "./fs_db";

const user = getUser();
assert(user.refresh_token, "no refresh token.");

const spotifyApi = new SpotifyWebApi({
  clientId: user.clientId,
  accessToken: user.access_token,
  refreshToken: user.refresh_token,
});

export default spotifyApi;

export async function refreshTokenWhenExpire(fn: () => unknown) {
  try {
    return await fn();
  } catch (error) {
    console.log("access token error. (might be expired)");

    const {
      body: { access_token },
    } = await spotifyApi.refreshAccessToken();

    console.log("access token refreshed.");

    spotifyApi.setAccessToken(access_token);
    saveUser({
      access_token,
      refresh_token: user.refresh_token,
      clientId: user.clientId,
    });

    return await fn();
  }
}
