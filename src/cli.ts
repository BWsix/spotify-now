#!/usr/bin/env node

import yargs from "yargs";
import { bootstrap } from "./main";
import { getAuthUrl } from "./spotifyApiProvider/cli/getAuthUrl";
import { getToken } from "./spotifyApiProvider/cli/getToken";

yargs
  .scriptName("spotify-now")
  .command("start", "start the app", {}, bootstrap)
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
