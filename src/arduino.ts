import { Board, Led } from "johnny-five";
import { main } from "./main";

const board = new Board({ repl: false });

board.on("ready", () => {
  const anode = new Led.RGB({
    pins: [11, 10, 9],
  });

  const handleColor = async () => {
    const color = await main();
    anode.color((color as string) || "000000");
  };

  handleColor();
  anode.on();
  board.loop(30 * 1000, handleColor);
});
