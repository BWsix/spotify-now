import chalk from "chalk";
import { assert } from "console";
import SpotifyWebApi from "spotify-web-api-node";
import { getUser, saveUser } from "./fs_db";

const user = getUser();
assert(user.access_token, "no access token.");
assert(user.refresh_token, "no refresh token.");
assert(user.clientId, "no client id.");
assert(user.clientSecret, "no client secret.");

const spotifyApi = new SpotifyWebApi({
  accessToken: user.access_token,
  refreshToken: user.refresh_token,
  clientId: user.clientId,
  clientSecret: user.clientSecret,
});

export default spotifyApi;

export async function refreshTokenWhenExpire<T>(
  fn: () => Promise<T> | T
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.log("Access token error. (might be expired)");

    const {
      body: { access_token },
    } = await spotifyApi.refreshAccessToken();

    console.log(chalk.yellow("Access token refreshed."));

    spotifyApi.setAccessToken(access_token);
    saveUser({
      access_token,
      refresh_token: user.refresh_token,
      clientId: user.clientId,
      clientSecret: user.clientSecret,
    });

    return await fn();
  }
}
