#!/usr/bin/env node

import chalk from "chalk";
import yargs from "yargs";

yargs
  .scriptName("spotify-now")
  .command(
    "login [id] [secret]",
    "Login to your spotify account before making api calls.",
    (yargs) => {
      yargs
        .option("id", {
          alias: "i",
          describe: "The spotify client id",
        })
        .option("secret", {
          alias: "s",
          describe: "The spotify client secret",
        });
    },
    async (argv) => {
      const { getAuthUrl, getToken } = await import("./spotifyApiProvider/cli");

      const clientId = argv.id as string;
      const clientSecret = argv.secret as string;

      const url = await getAuthUrl(clientId, clientSecret);
      console.log(
        chalk.yellow("Follow the link below and login to your spotify account:")
      );
      console.log(url);

      await getToken(clientId, clientSecret);
    }
  )
  .command(
    "start [pins]",
    "Start the app.",
    (yargs) => {
      yargs.option("pins", {
        alias: "p",
        array: true,
        type: "number",
        default: [11, 10, 9],
        describe: "light up the led using the given pins(r, g, b)",
      });
    },
    async (argv) => {
      const { bootstrap } = await import("./core");

      const pins = argv.pins as [number, number, number];
      console.log(chalk.green(`Starting the app using pins ${pins}...`));

      bootstrap(pins);
    }
  )
  .help().argv;
