import express from "express";
import { saveUser } from "../fs_db";
import { getSpotifyAPi } from "./spotifyApiBootstrap";

export async function getToken(clientId: string, clientSecret: string) {
  const spotifyApi = await getSpotifyAPi(clientId, clientSecret);
  const app = express();

  app.get("/", async (req, res) => {
    const code = req.query.code as string;

    spotifyApi.authorizationCodeGrant(code, (error, result) => {
      if (error) return console.error(error);

      const { access_token, refresh_token } = result.body;
      saveUser({ access_token, refresh_token, clientId, clientSecret });

      res.send("You can close this window now.");
      process.exit(0);
    });
  });

  app.listen(6969);
}
