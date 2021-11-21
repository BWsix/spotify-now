#!/usr/bin/env node

import yargs from "yargs";

yargs
  .scriptName("spotify-now")
  .command(
    "login [id] [secret]",
    "log in to your spotify app.",
    (yargs) => {
      yargs
        .positional("id", { type: "string" })
        .positional("secret", { type: "string" });
    },
    async (argv) => {
      const { getAuthUrl, getToken } = require("./spotifyApiProvider/cli");

      const clientId = argv.id as string;
      const clientSecret = argv.secret as string;

      const url = await getAuthUrl(clientId, clientSecret);
      console.log(url);

      await getToken(clientId, clientSecret);
      console.log("ok!");
    }
  )
  .command("start", "start the app.", {}, () => {
    const { bootstrap } = require("./main");

    bootstrap();
  })
  .help().argv;
