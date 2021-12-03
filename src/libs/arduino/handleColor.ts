import { Led } from "johnny-five";
import { refreshTokenWhenExpire } from "../spotifyApi";
import { getColor } from "./getColor";

export async function handleColor(led: Led.RGB) {
  const color = await refreshTokenWhenExpire(getColor);

  // the type definition on this method is wrong. (should accept type of number[])
  led.color((color as unknown as string) || "000000");
}
