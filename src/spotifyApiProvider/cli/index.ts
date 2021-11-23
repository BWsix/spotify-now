import chalk from "chalk";
import { getAuthUrl } from "./getAuthUrl";
import { getToken } from "./getToken";

export async function bootstrap(clientId: string, clientSecret: string) {
  const url = await getAuthUrl(clientId, clientSecret);

  console.log(
    chalk.yellow("Follow the link below and login to your spotify account:")
  );
  console.log(url);

  await getToken(clientId, clientSecret);
}
