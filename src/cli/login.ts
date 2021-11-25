import chalk from "chalk";
import { getAuthUrl, getToken } from "../libs/spotifyApi/authGrant";

export async function login(clientId: string, clientSecret: string) {
  const url = await getAuthUrl(clientId, clientSecret);

  console.log(
    chalk.yellow("Follow the link below and login to your Spotify account:\n"),
    url
  );

  await getToken(clientId, clientSecret);
}
