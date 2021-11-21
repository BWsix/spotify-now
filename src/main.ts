import { Board, Led } from "johnny-five";
import { getColor } from "./core";
import { refreshTokenWhenExpire } from "./spotifyApiProvider";

const board = new Board({ repl: false });
const anode = new Led.RGB({
  pins: [11, 10, 9],
});

const handleColor = async () => {
  const color = await refreshTokenWhenExpire(getColor);

  // the type definition on this method is wrong. (should accept type of number[])
  anode.color((color as unknown as string) || "000000");
};

board.on("ready", async () => {
  await handleColor();
  anode.on();
  board.loop(30 * 1000, handleColor);
});
