import chalk from "chalk";
import { Board, Led } from "johnny-five";
import { refreshTokenWhenExpire } from "../spotifyApiProvider";
import { getColor } from "./getColor";

export async function bootstrap(
  pins: [r: number, g: number, b: number],
  interval: number
) {
  console.log(chalk.green(`Starting the app using pins: ${pins}`));
  console.log(chalk.green(`Time interval between updates: ${interval}`));

  const board = new Board({ repl: false });

  board.on("ready", async () => {
    const anode = new Led.RGB({ pins });

    const handleColor = async () => {
      const color = await refreshTokenWhenExpire(getColor);

      // the type definition on this method is wrong. (should accept type of number[])
      anode.color((color as unknown as string) || "000000");
    };

    await handleColor();
    anode.on();
    board.loop(interval * 1000, handleColor);
  });
}
