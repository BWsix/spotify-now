import chalk from "chalk";
import { getUser, saveUser } from "./db";
import spotifyApi from "./provider";

const user = getUser();

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
