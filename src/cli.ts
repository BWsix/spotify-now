import yargs from "yargs";
import { getAuthUrl } from "./spotifyApiProvider/cli/getAuthUrl";
import { getToken } from "./spotifyApiProvider/cli/getToken";

yargs
  .scriptName("bob")
  .usage("$0 <cmd> [args]")
  .command(
    "login [id] [secret]",
    "log in to your spotify app.",
    (yargs) => {
      yargs
        .positional("id", { type: "string" })
        .positional("secret", { type: "string" });
    },
    async (argv) => {
      const clientId = argv.id as string;
      const clientSecret = argv.secret as string;

      const url = await getAuthUrl(clientId, clientSecret);
      console.log(url);

      await getToken(clientId, clientSecret);
      console.log("ok!");
    }
  )
  .help().argv;
