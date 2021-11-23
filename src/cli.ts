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
    "start [pins] [interval]",
    "Start the app.",
    (yargs) => {
      yargs
        .option("pins", {
          alias: "p",
          array: true,
          type: "number",
          default: [11, 10, 9],
          describe: "Light up the led using the given pins(r, g, b)",
        })
        .option("interval", {
          alias: "i",
          type: "number",
          default: 20,
          describe: "Time interval between updates. (in second)",
        });
    },
    async (argv) => {
      const { bootstrap } = await import("./core");

      const pins = argv.pins as [number, number, number];
      const interval = argv.interval as number;

      bootstrap(pins, interval);
    }
  )
  .help().argv;
