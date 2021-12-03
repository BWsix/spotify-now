import chalk from "chalk";
import { updateUser } from "./db";
import spotifyApi from "./provider";

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
    updateUser({ access_token });

    return await fn();
  }
}
