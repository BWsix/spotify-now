import { Board, Led } from "johnny-five";
import { refreshTokenWhenExpire } from "../spotifyApi";
import { getColor } from "./getColor";

export async function bootstrap(
  pins: [r: number, g: number, b: number] = [11, 10, 9]
) {
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
    board.loop(30 * 1000, handleColor);
  });
}
