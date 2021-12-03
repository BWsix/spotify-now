import { Board, Led } from "johnny-five";
import { handleColor } from "../libs/arduino/handleColor";

export async function start(pins = [11, 10, 9], interval = 20) {
  const board = new Board({ repl: false });

  board.on("ready", async () => {
    const led = new Led.RGB({ pins });

    await handleColor(led);

    led.on();

    board.loop(interval * 1000, () => handleColor(led));
  });
}
