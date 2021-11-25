import express from "express";
import { saveUser } from "../db";
import { getSpotifyApi } from "./getSpotifyApi";

const app = express();

export async function getToken(clientId: string, clientSecret: string) {
  const spotifyApi = await getSpotifyApi(clientId, clientSecret);

  app
    .get("/", async (req, res) => {
      const code = req.query.code as string;

      spotifyApi.authorizationCodeGrant(code, (error, result) => {
        if (error) return console.error(error);

        const { access_token, refresh_token } = result.body;
        saveUser({ access_token, refresh_token, clientId, clientSecret });

        res.send("You can close this window now.");
        process.exit(0);
      });
    })
    .listen(6969);
}
