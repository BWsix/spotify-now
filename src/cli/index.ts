#!/usr/bin/env node

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
      const clientId = argv.id as string;
      const clientSecret = argv.secret as string;

      const { login } = await import("./login");
      login(clientId, clientSecret);
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
          describe: "Light up the led using the given pins(r, g, b)",
        })
        .option("interval", {
          alias: "i",
          type: "number",
          describe: "Time interval between two updates. (second)",
        });
    },
    async (argv) => {
      const pins = argv.pins as [number, number, number];
      const interval = argv.interval as number;

      const { start } = await import("./start");
      start(pins, interval);
    }
  )
  .command("*", "", {}, async () => {
    const { printLogo } = await import("./printLogo");

    printLogo();
  })
  .demandCommand()
  .help().argv;
