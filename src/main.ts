import { getColor } from "./core";
import { refreshTokenWhenExpire } from "./spotifyApiProvider";

export const main = () => refreshTokenWhenExpire(() => getColor());
